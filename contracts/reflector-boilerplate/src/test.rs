#![cfg(test)]

extern crate std;
use std::println;

use soroban_sdk::{testutils::EnvTestConfig, Address, Env, String};

use crate::{Contract, ContractClient};

#[test]
fn test() {
    let mut env = Env::from_ledger_snapshot_file("../../snapshot.json");

    env.set_config(EnvTestConfig {
        capture_snapshot_at_drop: false,
    });

    let contract_id = env.register_contract(None, Contract);
    let client = ContractClient::new(&env, &contract_id);

    let reflector_address = Address::from_string(&String::from_str(
        &env,
        "CAFJZQWSED6YAWZU3GWRTOCNPPCGBN32L7QV43XX5LZLFTK6JLN34DLN",
    ));

    let admin = client.whodis(&reflector_address);

    println!("admin: {:?}", admin);
}
