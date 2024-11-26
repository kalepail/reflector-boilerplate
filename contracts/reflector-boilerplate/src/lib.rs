#![no_std]

use reflector_oracle::Client as ReflectorClient;
use soroban_sdk::{contract, contractimpl, Address, Env};

mod reflector_oracle;

mod test;

#[contract]
pub struct Contract;

#[contractimpl]
impl Contract {
    pub fn whodis(env: Env, reflector_address: Address) -> Option<Address> {
        let reflector_client = ReflectorClient::new(&env, &reflector_address);

        reflector_client.admin()
    }
}
