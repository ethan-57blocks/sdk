export default [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AccessControlled__CallerIsNotIpAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipAccount",
        type: "address",
      },
    ],
    name: "AccessControlled__NotIpAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlled__ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__CallerIsNotIPAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipAccount",
        type: "address",
      },
    ],
    name: "AccessController__IPAccountIsNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__IPAccountIsZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "func",
        type: "bytes4",
      },
    ],
    name: "AccessController__PermissionDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__PermissionIsNotValid",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "AccessController__RecipientIsNotRegisteredModule",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__SignerIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__NotDisputeModule",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__ZeroDisputeModule",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__ZeroPaymentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotAbleToResolve",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotDisputeInitiator",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotInDisputeState",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotRegisteredIpId",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedArbitrationPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedArbitrationRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedDisputeTag",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__UnauthorizedAccess",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroArbitrationPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroArbitrationRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroDisputeTag",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroLinkToDisputeEvidence",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__InconsistentState",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__NewStateIsTheSameWithOldState",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__OnlyProtocolAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__ProtocolPaused",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "interfaceName",
        type: "string",
      },
    ],
    name: "Governance__UnsupportedInterface",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccountRegistry_InvalidIpAccountImpl",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__ExpiredSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__InvalidCalldata",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__InvalidSigner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__IPAccountAlreadyCreated",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__InvalidAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__InvalidMetadataProvider",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__NotYetRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__RegistrantUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__ResolverInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAssetRegistry__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "IPResolver_InvalidIP",
    type: "error",
  },
  {
    inputs: [],
    name: "IPResolver_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__ERC20BalanceNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__ETHBalanceNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__InvalidPathFirstPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__InvalidPathLastPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__ZeroIpId",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__ZeroLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "LSClaimer__ZeroRoyaltyPolicyLS",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__CallerNotLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__NotTransferable",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__ZeroLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModuleAware__CallerNotLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__CallerNotLicenseRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__CallerNotLicensorAndPolicyNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__CommercialTermInNonCommercialPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__DerivativeRevShareSumExceedsMaxRNFTSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__DerivativesCannotAddPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__EmptyLicenseUrl",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__EmptyParamName",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__FrameworkNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__IncompatibleLicensorCommercialPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__IncompatibleLicensorRoyaltyDerivativeRevShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__IncompatibleRoyaltyPolicyAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__IncompatibleRoyaltyPolicyDerivativeRevShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__InvalidLicensor",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__InvalidPolicyFramework",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__LicensorDoesntHaveThisPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__LicensorNotRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__LinkParentParamFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__MintLicenseParamFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__MismatchBetweenCommercialRevenueShareAndMinRoyalty",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__MismatchBetweenRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__NotLicensee",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__ParamVerifierAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__ParamVerifierLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__ParentIdEqualThanChild",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__PolicyAlreadySetForIpId",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__PolicyNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__TransferParamFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__UnauthorizedAccess",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule__UnregisteredFrameworkAddingPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalChecker__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__HashInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__IPAssetOwnerInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__MetadataNotCompatible",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__NameInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__RegistrantInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__RegistrationDateInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__URIInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__UpgradeProviderInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider__UpgradeUnavailable",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAddressNotContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAddressZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleNotRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameDoesNotMatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameEmptyString",
    type: "error",
  },
  {
    inputs: [],
    name: "Module_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "PolicyFrameworkManager__GettingPolicyWrongFramework",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule__InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__AlreadySetRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__IncompatibleRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__NoRoyaltyPolicySet",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__NotAllowedCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__NotWhitelistedRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__NotWhitelistedRoyaltyToken",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__ZeroLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__ZeroRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__ZeroRoyaltyToken",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__InvalidMinRoyalty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__InvalidRoyaltyStack",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__NotRoyaltyModule",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroLiquidSplitFactory",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroLiquidSplitMain",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroMinRoyalty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroRoyaltyModule",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__DstIpIdDoesNotHaveDstTag",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__InvalidRelationTypeName",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__RelationTypeAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__RelationTypeDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__SrcIpIdDoesNotHaveSrcTag",
    type: "error",
  },
] as const;
