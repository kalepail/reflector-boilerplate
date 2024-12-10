default: build

all: test

test: build
	cargo test

build:
	stellar contract build
	@ls -l target/wasm32-unknown-unknown/release/*.wasm

fmt:
	cargo fmt --all

clean:
	cargo clean

bindings:
	stellar contract bindings typescript --network testnet --output-dir ./reflector-oracle-sdk --contract-id CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63 --overwrite
	cd reflector-oracle-sdk && npm install && npm run build

snapshot:
	rm -rf snapshot.json
	stellar snapshot create --network mainnet --output json --address CAFJZQWSED6YAWZU3GWRTOCNPPCGBN32L7QV43XX5LZLFTK6JLN34DLN