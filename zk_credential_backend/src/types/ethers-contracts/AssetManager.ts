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

export type PreTokenStruct = {
  status: BigNumberish;
  supplyCompany: string;
  volume: BigNumberish;
  generationPeriod: string;
  energySource: BigNumberish;
  expirationDate: string;
  Exist: boolean;
};

export type PreTokenStructOutput = [
  status: bigint,
  supplyCompany: string,
  volume: bigint,
  generationPeriod: string,
  energySource: bigint,
  expirationDate: string,
  Exist: boolean
] & {
  status: bigint;
  supplyCompany: string;
  volume: bigint;
  generationPeriod: string;
  energySource: bigint;
  expirationDate: string;
  Exist: boolean;
};

export type PurchaseReceiptStruct = {
  ReceiptOwner: AddressLike;
  Pre_TokenId: string;
  amount: BigNumberish;
  Irec_issued: boolean;
  txHash: BytesLike;
};

export type PurchaseReceiptStructOutput = [
  ReceiptOwner: string,
  Pre_TokenId: string,
  amount: bigint,
  Irec_issued: boolean,
  txHash: string
] & {
  ReceiptOwner: string;
  Pre_TokenId: string;
  amount: bigint;
  Irec_issued: boolean;
  txHash: string;
};

export interface AssetManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BuyPre_Irec"
      | "ExpireToken"
      | "ViewExpiredTokens"
      | "changeReceiptIssue"
      | "createPreToken"
      | "getNonceIndex"
      | "getPreToken"
      | "getReceipt"
      | "getTotalVolume"
      | "getTotalVolumeBySource"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "BuyPre_Irec",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ExpireToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ViewExpiredTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeReceiptIssue",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createPreToken",
    values: [string, string, BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNonceIndex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getPreToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getReceipt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVolume",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVolumeBySource",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "BuyPre_Irec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ExpireToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ViewExpiredTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeReceiptIssue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPreToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNonceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVolumeBySource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
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

export interface AssetManager extends BaseContract {
  connect(runner?: ContractRunner | null): AssetManager;
  waitForDeployment(): Promise<this>;

  interface: AssetManagerInterface;

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

  BuyPre_Irec: TypedContractMethod<
    [UUID: string, amount: BigNumberish, Price: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  ExpireToken: TypedContractMethod<[date: string], [void], "nonpayable">;

  ViewExpiredTokens: TypedContractMethod<[Date: string], [string[]], "view">;

  changeReceiptIssue: TypedContractMethod<
    [Buyer: AddressLike, _Nonce: BigNumberish, hash: BytesLike],
    [void],
    "nonpayable"
  >;

  createPreToken: TypedContractMethod<
    [
      UUID: string,
      enterprise: string,
      volume: BigNumberish,
      generationPeriod: string,
      energySource: BigNumberish,
      expirationDate: string
    ],
    [void],
    "nonpayable"
  >;

  getNonceIndex: TypedContractMethod<[Buyer: AddressLike], [bigint[]], "view">;

  getPreToken: TypedContractMethod<
    [tokenId: string],
    [PreTokenStructOutput],
    "view"
  >;

  getReceipt: TypedContractMethod<
    [_Nonce: BigNumberish],
    [PurchaseReceiptStructOutput],
    "view"
  >;

  getTotalVolume: TypedContractMethod<[], [bigint], "view">;

  getTotalVolumeBySource: TypedContractMethod<
    [energySource: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BuyPre_Irec"
  ): TypedContractMethod<
    [UUID: string, amount: BigNumberish, Price: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ExpireToken"
  ): TypedContractMethod<[date: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ViewExpiredTokens"
  ): TypedContractMethod<[Date: string], [string[]], "view">;
  getFunction(
    nameOrSignature: "changeReceiptIssue"
  ): TypedContractMethod<
    [Buyer: AddressLike, _Nonce: BigNumberish, hash: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createPreToken"
  ): TypedContractMethod<
    [
      UUID: string,
      enterprise: string,
      volume: BigNumberish,
      generationPeriod: string,
      energySource: BigNumberish,
      expirationDate: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getNonceIndex"
  ): TypedContractMethod<[Buyer: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getPreToken"
  ): TypedContractMethod<[tokenId: string], [PreTokenStructOutput], "view">;
  getFunction(
    nameOrSignature: "getReceipt"
  ): TypedContractMethod<
    [_Nonce: BigNumberish],
    [PurchaseReceiptStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTotalVolume"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalVolumeBySource"
  ): TypedContractMethod<[energySource: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
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
  };
}
