# Reflector Boilerplate

Will make building and testing contracts which use the [Reflector oracles](https://reflector.network/) much easier.

```bash
make snapshot
```

```bash
make bindings
```

```bash
cargo test -- --nocapture
```

Ensure `snapshot.json` `"protocol_version"` is `22` or whatever the current protocol version is.