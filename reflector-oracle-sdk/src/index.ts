import { Buffer } from "buffer";
import { Address } from '@stellar/stellar-sdk';
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  Result,
  Spec as ContractSpec,
} from '@stellar/stellar-sdk/contract';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk'
export * as contract from '@stellar/stellar-sdk/contract'
export * as rpc from '@stellar/stellar-sdk/rpc'

if (typeof window !== 'undefined') {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63",
  }
} as const

export type Asset = {tag: "Stellar", values: readonly [string]} | {tag: "Other", values: readonly [string]};


export interface ConfigData {
  admin: string;
  assets: Array<Asset>;
  base_asset: Asset;
  decimals: u32;
  period: u64;
  resolution: u32;
}

export const Errors = {
  0: {message:"AlreadyInitialized"},

  1: {message:"Unauthorized"},

  2: {message:"AssetMissing"},

  3: {message:"AssetAlreadyExists"},

  4: {message:"InvalidConfigVersion"},

  5: {message:"InvalidTimestamp"},

  6: {message:"InvalidUpdateLength"},

  7: {message:"AssetLimitExceeded"}
}

export interface PriceData {
  price: i128;
  timestamp: u64;
}


export interface Client {
  /**
   * Construct and simulate a base transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  base: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Asset>>

  /**
   * Construct and simulate a decimals transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  decimals: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a resolution transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  resolution: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a period transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  period: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<u64>>>

  /**
   * Construct and simulate a assets transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  assets: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Array<Asset>>>

  /**
   * Construct and simulate a last_timestamp transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  last_timestamp: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u64>>

  /**
   * Construct and simulate a price transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  price: ({asset, timestamp}: {asset: Asset, timestamp: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<PriceData>>>

  /**
   * Construct and simulate a lastprice transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  lastprice: ({asset}: {asset: Asset}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<PriceData>>>

  /**
   * Construct and simulate a prices transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  prices: ({asset, records}: {asset: Asset, records: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<Array<PriceData>>>>

  /**
   * Construct and simulate a x_last_price transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  x_last_price: ({base_asset, quote_asset}: {base_asset: Asset, quote_asset: Asset}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<PriceData>>>

  /**
   * Construct and simulate a x_price transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  x_price: ({base_asset, quote_asset, timestamp}: {base_asset: Asset, quote_asset: Asset, timestamp: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<PriceData>>>

  /**
   * Construct and simulate a x_prices transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  x_prices: ({base_asset, quote_asset, records}: {base_asset: Asset, quote_asset: Asset, records: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<Array<PriceData>>>>

  /**
   * Construct and simulate a twap transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  twap: ({asset, records}: {asset: Asset, records: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<i128>>>

  /**
   * Construct and simulate a x_twap transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  x_twap: ({base_asset, quote_asset, records}: {base_asset: Asset, quote_asset: Asset, records: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<i128>>>

  /**
   * Construct and simulate a version transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  version: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a admin transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  admin: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

  /**
   * Construct and simulate a config transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  config: ({config}: {config: ConfigData}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a add_assets transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  add_assets: ({assets}: {assets: Array<Asset>}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a set_period transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  set_period: ({period}: {period: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a set_price transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  set_price: ({updates, timestamp}: {updates: Array<i128>, timestamp: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a update_contract transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  update_contract: ({wasm_hash}: {wasm_hash: Buffer}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

}
export class Client extends ContractClient {
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAgAAAAAAAAAAAAAABUFzc2V0AAAAAAAAAgAAAAEAAAAAAAAAB1N0ZWxsYXIAAAAAAQAAABMAAAABAAAAAAAAAAVPdGhlcgAAAAAAAAEAAAAR",
        "AAAAAQAAAAAAAAAAAAAACkNvbmZpZ0RhdGEAAAAAAAYAAAAAAAAABWFkbWluAAAAAAAAEwAAAAAAAAAGYXNzZXRzAAAAAAPqAAAH0AAAAAVBc3NldAAAAAAAAAAAAAAKYmFzZV9hc3NldAAAAAAH0AAAAAVBc3NldAAAAAAAAAAAAAAIZGVjaW1hbHMAAAAEAAAAAAAAAAZwZXJpb2QAAAAAAAYAAAAAAAAACnJlc29sdXRpb24AAAAAAAQ=",
        "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAACAAAAAAAAAASQWxyZWFkeUluaXRpYWxpemVkAAAAAAAAAAAAAAAAAAxVbmF1dGhvcml6ZWQAAAABAAAAAAAAAAxBc3NldE1pc3NpbmcAAAACAAAAAAAAABJBc3NldEFscmVhZHlFeGlzdHMAAAAAAAMAAAAAAAAAFEludmFsaWRDb25maWdWZXJzaW9uAAAABAAAAAAAAAAQSW52YWxpZFRpbWVzdGFtcAAAAAUAAAAAAAAAE0ludmFsaWRVcGRhdGVMZW5ndGgAAAAABgAAAAAAAAASQXNzZXRMaW1pdEV4Y2VlZGVkAAAAAAAH",
        "AAAAAQAAAAAAAAAAAAAACVByaWNlRGF0YQAAAAAAAAIAAAAAAAAABXByaWNlAAAAAAAACwAAAAAAAAAJdGltZXN0YW1wAAAAAAAABg==",
        "AAAAAAAAAAAAAAAEYmFzZQAAAAAAAAABAAAH0AAAAAVBc3NldAAAAA==",
        "AAAAAAAAAAAAAAAIZGVjaW1hbHMAAAAAAAAAAQAAAAQ=",
        "AAAAAAAAAAAAAAAKcmVzb2x1dGlvbgAAAAAAAAAAAAEAAAAE",
        "AAAAAAAAAAAAAAAGcGVyaW9kAAAAAAAAAAAAAQAAA+gAAAAG",
        "AAAAAAAAAAAAAAAGYXNzZXRzAAAAAAAAAAAAAQAAA+oAAAfQAAAABUFzc2V0AAAA",
        "AAAAAAAAAAAAAAAObGFzdF90aW1lc3RhbXAAAAAAAAAAAAABAAAABg==",
        "AAAAAAAAAAAAAAAFcHJpY2UAAAAAAAACAAAAAAAAAAVhc3NldAAAAAAAB9AAAAAFQXNzZXQAAAAAAAAAAAAACXRpbWVzdGFtcAAAAAAAAAYAAAABAAAD6AAAB9AAAAAJUHJpY2VEYXRhAAAA",
        "AAAAAAAAAAAAAAAJbGFzdHByaWNlAAAAAAAAAQAAAAAAAAAFYXNzZXQAAAAAAAfQAAAABUFzc2V0AAAAAAAAAQAAA+gAAAfQAAAACVByaWNlRGF0YQAAAA==",
        "AAAAAAAAAAAAAAAGcHJpY2VzAAAAAAACAAAAAAAAAAVhc3NldAAAAAAAB9AAAAAFQXNzZXQAAAAAAAAAAAAAB3JlY29yZHMAAAAABAAAAAEAAAPoAAAD6gAAB9AAAAAJUHJpY2VEYXRhAAAA",
        "AAAAAAAAAAAAAAAMeF9sYXN0X3ByaWNlAAAAAgAAAAAAAAAKYmFzZV9hc3NldAAAAAAH0AAAAAVBc3NldAAAAAAAAAAAAAALcXVvdGVfYXNzZXQAAAAH0AAAAAVBc3NldAAAAAAAAAEAAAPoAAAH0AAAAAlQcmljZURhdGEAAAA=",
        "AAAAAAAAAAAAAAAHeF9wcmljZQAAAAADAAAAAAAAAApiYXNlX2Fzc2V0AAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAtxdW90ZV9hc3NldAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAl0aW1lc3RhbXAAAAAAAAAGAAAAAQAAA+gAAAfQAAAACVByaWNlRGF0YQAAAA==",
        "AAAAAAAAAAAAAAAIeF9wcmljZXMAAAADAAAAAAAAAApiYXNlX2Fzc2V0AAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAtxdW90ZV9hc3NldAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAdyZWNvcmRzAAAAAAQAAAABAAAD6AAAA+oAAAfQAAAACVByaWNlRGF0YQAAAA==",
        "AAAAAAAAAAAAAAAEdHdhcAAAAAIAAAAAAAAABWFzc2V0AAAAAAAH0AAAAAVBc3NldAAAAAAAAAAAAAAHcmVjb3JkcwAAAAAEAAAAAQAAA+gAAAAL",
        "AAAAAAAAAAAAAAAGeF90d2FwAAAAAAADAAAAAAAAAApiYXNlX2Fzc2V0AAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAtxdW90ZV9hc3NldAAAAAfQAAAABUFzc2V0AAAAAAAAAAAAAAdyZWNvcmRzAAAAAAQAAAABAAAD6AAAAAs=",
        "AAAAAAAAAAAAAAAHdmVyc2lvbgAAAAAAAAAAAQAAAAQ=",
        "AAAAAAAAAAAAAAAFYWRtaW4AAAAAAAAAAAAAAQAAA+gAAAAT",
        "AAAAAAAAAAAAAAAGY29uZmlnAAAAAAABAAAAAAAAAAZjb25maWcAAAAAB9AAAAAKQ29uZmlnRGF0YQAAAAAAAA==",
        "AAAAAAAAAAAAAAAKYWRkX2Fzc2V0cwAAAAAAAQAAAAAAAAAGYXNzZXRzAAAAAAPqAAAH0AAAAAVBc3NldAAAAAAAAAA=",
        "AAAAAAAAAAAAAAAKc2V0X3BlcmlvZAAAAAAAAQAAAAAAAAAGcGVyaW9kAAAAAAAGAAAAAA==",
        "AAAAAAAAAAAAAAAJc2V0X3ByaWNlAAAAAAAAAgAAAAAAAAAHdXBkYXRlcwAAAAPqAAAACwAAAAAAAAAJdGltZXN0YW1wAAAAAAAABgAAAAA=",
        "AAAAAAAAAAAAAAAPdXBkYXRlX2NvbnRyYWN0AAAAAAEAAAAAAAAACXdhc21faGFzaAAAAAAAA+4AAAAgAAAAAA==" ]),
      options
    )
  }
  public readonly fromJSON = {
    base: this.txFromJSON<Asset>,
        decimals: this.txFromJSON<u32>,
        resolution: this.txFromJSON<u32>,
        period: this.txFromJSON<Option<u64>>,
        assets: this.txFromJSON<Array<Asset>>,
        last_timestamp: this.txFromJSON<u64>,
        price: this.txFromJSON<Option<PriceData>>,
        lastprice: this.txFromJSON<Option<PriceData>>,
        prices: this.txFromJSON<Option<Array<PriceData>>>,
        x_last_price: this.txFromJSON<Option<PriceData>>,
        x_price: this.txFromJSON<Option<PriceData>>,
        x_prices: this.txFromJSON<Option<Array<PriceData>>>,
        twap: this.txFromJSON<Option<i128>>,
        x_twap: this.txFromJSON<Option<i128>>,
        version: this.txFromJSON<u32>,
        admin: this.txFromJSON<Option<string>>,
        config: this.txFromJSON<null>,
        add_assets: this.txFromJSON<null>,
        set_period: this.txFromJSON<null>,
        set_price: this.txFromJSON<null>,
        update_contract: this.txFromJSON<null>
  }
}