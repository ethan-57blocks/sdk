import { PublicClient, WalletClient, stringToHex } from "viem";

import { handleError } from "../utils/errors";
import { DisputeModuleConfig } from "../abi/config";
import {
  CancelDisputeRequest,
  CancelDisputeResponse,
  RaiseDisputeRequest,
  RaiseDisputeResponse,
  ResolveDisputeRequest,
  ResolveDisputeResponse,
  SetDisputeJudgementRequest,
  SetDisputeJudgementResponse,
} from "../types/resources/dispute";
import { waitTx, waitTxAndFilterLog } from "../utils/utils";

export class DisputeClient {
  private readonly wallet: WalletClient;
  private readonly rpcClient: PublicClient;

  constructor(rpcClient: PublicClient, wallet: WalletClient) {
    this.rpcClient = rpcClient;
    this.wallet = wallet;
  }

  /**
   * Initiates a dispute on an IP.
   * @param request - The request object containing necessary data to raise a dispute.
   *   @param request.targetIpId - The IP ID that is the target of the dispute.
   *   @param request.arbitrationPolicy - The address of the arbitration policy.
   *   @param request.linkToDisputeEvidence - The link to the dispute evidence.
   *   @param request.targetTag - The target tag of the dispute.
   *   @param request.calldata - Optional calldata to initialize the policy.
   *   @param request.txOptions - Optional transaction options.
   * @returns A Promise that resolves to a RaiseDisputeResponse containing the transaction hash.
   * @throws `NotRegisteredIpId` if targetIpId is not registered in the IPA Registry.
   * @throws `NotWhitelistedDisputeTag` if targetTag is not whitelisted.
   * @throws `ZeroLinkToDisputeEvidence` if linkToDisputeEvidence is empty
   * @calls raiseDispute(address _targetIpId, string memory _linkToDisputeEvidence, bytes32 _targetTag, bytes calldata _data) external nonReentrant returns (uint256) {
   * @emits DisputeRaised (disputeId_, targetIpId, msg.sender, arbitrationPolicy, linkToDisputeEvidence, targetTag, calldata);
   */
  public async raiseDispute(request: RaiseDisputeRequest): Promise<RaiseDisputeResponse> {
    try {
      const { request: call } = await this.rpcClient.simulateContract({
        ...DisputeModuleConfig,
        functionName: "raiseDispute",
        args: [
          request.targetIpId,
          request.linkToDisputeEvidence,
          stringToHex(request.targetTag, { size: 32 }),
          request.calldata || "0x",
        ],
      });

      const txHash = await this.wallet.writeContract(call);

      if (request.txOptions?.waitForTransaction) {
        const logs = await waitTxAndFilterLog(this.rpcClient, txHash, {
          ...DisputeModuleConfig,
          eventName: "DisputeRaised",
        });
        return {
          txHash: txHash,
          disputeId: BigInt(logs.args.disputeId).toString() as `0x${string}`,
        };
      }
      return { txHash: txHash };
    } catch (error) {
      handleError(error, "Failed to raise dispute");
    }
  }

  /**
   * Sets the judgement for an existing dispute.
   * @param request The request object containing details for setting the dispute judgement.
   *   @param request.disputeId The ID of the dispute to be judged.
   *   @param request.decision The decision of the dispute.
   *   @param request.calldata Optional additional data for the dispute judgement.
   * @returns A Promise that resolves to a SetDisputeJudgementResponse containing the transaction hash.
   * @throws An error if the process of setting the judgement fails.
   * @throws `NotInDisputeState` if the currentTag of the Dispute is not being disputed.
   * @throws `NotWhitelistedArbitrationRelayer` if the transaction executor is not a whitelisted arbitration relayer contract.
   * @throws error if the Dispute's ArbitrationPolicy contract is not valid.
   * @calls setDisputeJudgement(uint256 _disputeId, bool _decision, bytes calldata _data) external nonReentrant {
   * @emits DisputeJudgementSet (_disputeId, _decision, _data);
   */
  public async setDisputeJudgement(
    request: SetDisputeJudgementRequest,
  ): Promise<SetDisputeJudgementResponse> {
    try {
      const { request: call } = await this.rpcClient.simulateContract({
        ...DisputeModuleConfig,
        functionName: "setDisputeJudgement",
        args: [
          BigInt(request.disputeId),
          request.decision,
          request.calldata ? request.calldata : "0x",
        ],
      });

      const txHash = await this.wallet.writeContract(call);

      if (request.txOptions?.waitForTransaction) {
        await waitTx(this.rpcClient, txHash);
      }

      return { txHash: txHash };
    } catch (error) {
      handleError(error, "Failed to raise dispute");
    }
  }

  /**
   * Cancels an existing dispute.
   * @param request The request object containing details to cancel the dispute.
   *   @param request.disputeId The ID of the dispute to be cancelled.
   *   @param request.calldata Optional additional data used in the cancellation process.
   * @returns A Promise that resolves to a CancelDisputeResponse containing the transaction hash.
   * @throws NotInDisputeState, if the currentTag of the Dispute is not being disputed
   * @throws NotDisputeInitiator, if the transaction executor is not the one that initiated the dispute
   * @throws error if the Dispute's ArbitrationPolicy contract is not valid
   * @calls cancelDispute(uint256 _disputeId, bytes calldata _data) external nonReentrant {
   * @emits DisputeCancelled (_disputeId, _data);
   */
  public async cancelDispute(request: CancelDisputeRequest): Promise<CancelDisputeResponse> {
    try {
      const { request: call } = await this.rpcClient.simulateContract({
        ...DisputeModuleConfig,
        functionName: "cancelDispute",
        args: [BigInt(request.disputeId), request.calldata ? request.calldata : "0x"],
      });

      const txHash = await this.wallet.writeContract(call);

      if (request.txOptions?.waitForTransaction) {
        await waitTx(this.rpcClient, txHash);
      }

      return { txHash: txHash };
    } catch (error) {
      handleError(error, "Failed to cancel dispute");
    }
  }

  /**
   * Resolves an existing dispute after a judgement has been set.
   * @param request The request object containing details to resolve the dispute.
   *   @param request.disputeId The ID of the dispute to be resolved.
   * @returns A Promise that resolves to a ResolveDisputeResponse.
   * @throws NotAbleToResolve, if currentTag is still in dispute (i.e still needs a judgement to be set)
   * @throws NotDisputeInitiator, if the transaction executor is not the one that initiated the dispute
   * @emits DisputeResolved (_disputeId)
   */
  public async resolveDispute(request: ResolveDisputeRequest): Promise<ResolveDisputeResponse> {
    try {
      const { request: call } = await this.rpcClient.simulateContract({
        ...DisputeModuleConfig,
        functionName: "resolveDispute",
        args: [BigInt(request.disputeId)],
      });

      const txHash = await this.wallet.writeContract(call);

      if (request.txOptions?.waitForTransaction) {
        await waitTx(this.rpcClient, txHash);
      }

      return { txHash: txHash };
    } catch (error) {
      handleError(error, "Failed to cancel dispute");
    }
  }
}
