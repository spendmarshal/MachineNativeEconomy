#!/usr/bin/env node
// The installed command. It runs main() unconditionally, so it works however the package manager wires the bin:
// a .cmd shim on Windows, a symlink in node_modules/.bin on macOS and Linux, or npx's temporary install. The guard in
// dist/index.js only decides whether `node dist/index.js` runs main when the file is executed directly.
import { main } from "../dist/index.js";

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(`spendmarshal: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(2);
  },
);
