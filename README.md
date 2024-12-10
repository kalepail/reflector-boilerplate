# Reflector Boilerplate

Will make building and testing contracts which use the [Reflector oracles](https://reflector.network/) much easier.

Generate a snapshot for running Rust tests.
```bash
make snapshot
```

Generate oracle bindings to ease client side invocations.
```bash
make bindings
```

Run Rust test.
```bash
cargo test -- --nocapture
```

Ensure `snapshot.json` `"protocol_version"` is `22` or whatever the current protocol version is.