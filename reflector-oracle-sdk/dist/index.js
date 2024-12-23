import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk';
export * as contract from '@stellar/stellar-sdk/contract';
export * as rpc from '@stellar/stellar-sdk/rpc';
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63",
    }
};
export const Errors = {
    0: { message: "AlreadyInitialized" },
    1: { message: "Unauthorized" },
    2: { message: "AssetMissing" },
    3: { message: "AssetAlreadyExists" },
    4: { message: "InvalidConfigVersion" },
    5: { message: "InvalidTimestamp" },
    6: { message: "InvalidUpdateLength" },
    7: { message: "AssetLimitExceeded" }
};
export class Client extends ContractClient {
    options;
    constructor(options) {
        super(new ContractSpec(["AAAAAgAAAAAAAAAAAAAABUFzc2V0AAAAAAAAAgAAAAEAAAAAAAAAB1N0ZWxsYXIAAAAAAQAAABMAAAABAAAAAAAAAAVPdGhlcgAAAAAAAAEAAAAR",
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
            "AAAAAAAAAAAAAAAPdXBkYXRlX2NvbnRyYWN0AAAAAAEAAAAAAAAACXdhc21faGFzaAAAAAAAA+4AAAAgAAAAAA=="]), options);
        this.options = options;
    }
    fromJSON = {
        base: (this.txFromJSON),
        decimals: (this.txFromJSON),
        resolution: (this.txFromJSON),
        period: (this.txFromJSON),
        assets: (this.txFromJSON),
        last_timestamp: (this.txFromJSON),
        price: (this.txFromJSON),
        lastprice: (this.txFromJSON),
        prices: (this.txFromJSON),
        x_last_price: (this.txFromJSON),
        x_price: (this.txFromJSON),
        x_prices: (this.txFromJSON),
        twap: (this.txFromJSON),
        x_twap: (this.txFromJSON),
        version: (this.txFromJSON),
        admin: (this.txFromJSON),
        config: (this.txFromJSON),
        add_assets: (this.txFromJSON),
        set_period: (this.txFromJSON),
        set_price: (this.txFromJSON),
        update_contract: (this.txFromJSON)
    };
}
