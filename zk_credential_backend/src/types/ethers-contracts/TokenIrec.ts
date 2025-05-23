/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type BurnMetadataStruct = {
  TokenIds: BigNumberish[];
  InicialBeneficiaries: AddressLike[];
  Finalbeneficiaries: AddressLike[];
  supplyCompanies: string[];
  OriginPlaces: string[];
  initial_volumes: BigNumberish[];
  Burnt_volumes: BigNumberish[];
  CertificateIDS_From: string[];
  CertificateIDS_Until: string[];
  ProductionPeriods: string[];
  energySources: BigNumberish[];
  Links: string[];
  BurnHash: BytesLike[];
};

export type BurnMetadataStructOutput = [
  TokenIds: bigint[],
  InicialBeneficiaries: string[],
  Finalbeneficiaries: string[],
  supplyCompanies: string[],
  OriginPlaces: string[],
  initial_volumes: bigint[],
  Burnt_volumes: bigint[],
  CertificateIDS_From: string[],
  CertificateIDS_Until: string[],
  ProductionPeriods: string[],
  energySources: bigint[],
  Links: string[],
  BurnHash: string[]
] & {
  TokenIds: bigint[];
  InicialBeneficiaries: string[];
  Finalbeneficiaries: string[];
  supplyCompanies: string[];
  OriginPlaces: string[];
  initial_volumes: bigint[];
  Burnt_volumes: bigint[];
  CertificateIDS_From: string[];
  CertificateIDS_Until: string[];
  ProductionPeriods: string[];
  energySources: bigint[];
  Links: string[];
  BurnHash: string[];
};

export type IrecMetadataStruct = {
  TokenId: BigNumberish;
  InicialBeneficiary: AddressLike;
  Finalbeneficiary: AddressLike;
  supplyCompany: string;
  OriginPlace: string;
  volume: BigNumberish;
  CertificateID_From: string;
  CertificateID_Until: string;
  ProductionPeriod: string;
  energySource: BigNumberish;
  Link: string;
};

export type IrecMetadataStructOutput = [
  TokenId: bigint,
  InicialBeneficiary: string,
  Finalbeneficiary: string,
  supplyCompany: string,
  OriginPlace: string,
  volume: bigint,
  CertificateID_From: string,
  CertificateID_Until: string,
  ProductionPeriod: string,
  energySource: bigint,
  Link: string
] & {
  TokenId: bigint;
  InicialBeneficiary: string;
  Finalbeneficiary: string;
  supplyCompany: string;
  OriginPlace: string;
  volume: bigint;
  CertificateID_From: string;
  CertificateID_Until: string;
  ProductionPeriod: string;
  energySource: bigint;
  Link: string;
};

export interface TokenIrecInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ERC20Transfer"
      | "GetBurnInfo"
      | "NeoSupply"
      | "balanceOf"
      | "balanceOfBatch"
      | "burn"
      | "burnBatch"
      | "burnERC20"
      | "burnIREC"
      | "changeBalancelist"
      | "getCertificateRange"
      | "getIrecInfo"
      | "isApprovedForAll"
      | "mintERC20"
      | "mintIREC"
      | "owner"
      | "renounceOwnership"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "setApprovalForAll"
      | "setAssetManager"
      | "supportsInterface"
      | "transferOwnership"
      | "uri"
      | "verifyBalanceList"
      | "verifyUUIDByTokenID"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalForAll"
      | "BurnERC20"
      | "BurnIREC"
      | "Irec_Created"
      | "OwnershipTransferred"
      | "TransferBatch"
      | "TransferSingle"
      | "URI"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ERC20Transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "GetBurnInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "NeoSupply", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burnERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnIREC",
    values: [AddressLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeBalancelist",
    values: [AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getCertificateRange",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "getIrecInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintIREC",
    values: [
      string,
      BigNumberish,
      string,
      string,
      string,
      string,
      string,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "verifyBalanceList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyUUIDByTokenID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC20Transfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetBurnInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "NeoSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnERC20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnIREC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeBalancelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCertificateRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIrecInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintERC20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintIREC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyBalanceList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyUUIDByTokenID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    account: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    account: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    account: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnERC20Event {
  export type InputTuple = [account: AddressLike, value: BigNumberish];
  export type OutputTuple = [account: string, value: bigint];
  export interface OutputObject {
    account: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnIRECEvent {
  export type InputTuple = [
    account: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [account: string, id: bigint, value: bigint];
  export interface OutputObject {
    account: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace Irec_CreatedEvent {
  export type InputTuple = [
    TokenId: BigNumberish,
    volume: BigNumberish,
    User: AddressLike,
    ReceiptID: BigNumberish
  ];
  export type OutputTuple = [
    TokenId: bigint,
    volume: bigint,
    User: string,
    ReceiptID: bigint
  ];
  export interface OutputObject {
    TokenId: bigint;
    volume: bigint;
    User: string;
    ReceiptID: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferBatchEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    ids: BigNumberish[],
    values: BigNumberish[]
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    ids: bigint[],
    values: bigint[]
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
    values: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSingleEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    id: bigint,
    value: bigint
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIEvent {
  export type InputTuple = [value: string, id: BigNumberish];
  export type OutputTuple = [value: string, id: bigint];
  export interface OutputObject {
    value: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TokenIrec extends BaseContract {
  connect(runner?: ContractRunner | null): TokenIrec;
  waitForDeployment(): Promise<this>;

  interface: TokenIrecInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ERC20Transfer: TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  GetBurnInfo: TypedContractMethod<
    [account: AddressLike],
    [BurnMetadataStructOutput],
    "view"
  >;

  NeoSupply: TypedContractMethod<[], [bigint], "view">;

  balanceOf: TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfBatch: TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  burn: TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnBatch: TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  burnERC20: TypedContractMethod<
    [account: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnIREC: TypedContractMethod<
    [account: AddressLike, UUID: string, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  changeBalancelist: TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  getCertificateRange: TypedContractMethod<
    [TokenIdArray: BigNumberish[]],
    [string[]],
    "view"
  >;

  getIrecInfo: TypedContractMethod<
    [UUID: string],
    [IrecMetadataStructOutput],
    "view"
  >;

  isApprovedForAll: TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  mintERC20: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  mintIREC: TypedContractMethod<
    [
      UUID: string,
      Nonce: BigNumberish,
      supplyCompany: string,
      OriginPlace: string,
      CertificateID_From: string,
      CertificateID_Until: string,
      ProductionPeriod: string,
      energySource: BigNumberish,
      Link: string
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  safeBatchTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setAssetManager: TypedContractMethod<
    [_assetManager: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  uri: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  verifyBalanceList: TypedContractMethod<
    [account: AddressLike],
    [bigint[]],
    "view"
  >;

  verifyUUIDByTokenID: TypedContractMethod<
    [TokenId: BigNumberish],
    [string],
    "view"
  >;

  withdraw: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ERC20Transfer"
  ): TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "GetBurnInfo"
  ): TypedContractMethod<
    [account: AddressLike],
    [BurnMetadataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "NeoSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfBatch"
  ): TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBatch"
  ): TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnERC20"
  ): TypedContractMethod<
    [account: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnIREC"
  ): TypedContractMethod<
    [account: AddressLike, UUID: string, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeBalancelist"
  ): TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCertificateRange"
  ): TypedContractMethod<[TokenIdArray: BigNumberish[]], [string[]], "view">;
  getFunction(
    nameOrSignature: "getIrecInfo"
  ): TypedContractMethod<[UUID: string], [IrecMetadataStructOutput], "view">;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "mintERC20"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintIREC"
  ): TypedContractMethod<
    [
      UUID: string,
      Nonce: BigNumberish,
      supplyCompany: string,
      OriginPlace: string,
      CertificateID_From: string,
      CertificateID_Until: string,
      ProductionPeriod: string,
      energySource: BigNumberish,
      Link: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeBatchTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAssetManager"
  ): TypedContractMethod<[_assetManager: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "verifyBalanceList"
  ): TypedContractMethod<[account: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "verifyUUIDByTokenID"
  ): TypedContractMethod<[TokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "BurnERC20"
  ): TypedContractEvent<
    BurnERC20Event.InputTuple,
    BurnERC20Event.OutputTuple,
    BurnERC20Event.OutputObject
  >;
  getEvent(
    key: "BurnIREC"
  ): TypedContractEvent<
    BurnIRECEvent.InputTuple,
    BurnIRECEvent.OutputTuple,
    BurnIRECEvent.OutputObject
  >;
  getEvent(
    key: "Irec_Created"
  ): TypedContractEvent<
    Irec_CreatedEvent.InputTuple,
    Irec_CreatedEvent.OutputTuple,
    Irec_CreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "TransferBatch"
  ): TypedContractEvent<
    TransferBatchEvent.InputTuple,
    TransferBatchEvent.OutputTuple,
    TransferBatchEvent.OutputObject
  >;
  getEvent(
    key: "TransferSingle"
  ): TypedContractEvent<
    TransferSingleEvent.InputTuple,
    TransferSingleEvent.OutputTuple,
    TransferSingleEvent.OutputObject
  >;
  getEvent(
    key: "URI"
  ): TypedContractEvent<
    URIEvent.InputTuple,
    URIEvent.OutputTuple,
    URIEvent.OutputObject
  >;

  filters: {
    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "BurnERC20(address,uint256)": TypedContractEvent<
      BurnERC20Event.InputTuple,
      BurnERC20Event.OutputTuple,
      BurnERC20Event.OutputObject
    >;
    BurnERC20: TypedContractEvent<
      BurnERC20Event.InputTuple,
      BurnERC20Event.OutputTuple,
      BurnERC20Event.OutputObject
    >;

    "BurnIREC(address,uint256,uint256)": TypedContractEvent<
      BurnIRECEvent.InputTuple,
      BurnIRECEvent.OutputTuple,
      BurnIRECEvent.OutputObject
    >;
    BurnIREC: TypedContractEvent<
      BurnIRECEvent.InputTuple,
      BurnIRECEvent.OutputTuple,
      BurnIRECEvent.OutputObject
    >;

    "Irec_Created(uint256,uint256,address,uint256)": TypedContractEvent<
      Irec_CreatedEvent.InputTuple,
      Irec_CreatedEvent.OutputTuple,
      Irec_CreatedEvent.OutputObject
    >;
    Irec_Created: TypedContractEvent<
      Irec_CreatedEvent.InputTuple,
      Irec_CreatedEvent.OutputTuple,
      Irec_CreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;
    TransferBatch: TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;

    "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;
    TransferSingle: TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;

    "URI(string,uint256)": TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
    URI: TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
  };
}
