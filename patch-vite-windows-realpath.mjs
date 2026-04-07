import fs from "node:fs";
import path from "node:path";

const viteChunksDir = path.join(
  process.cwd(),
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
);

if (!fs.existsSync(viteChunksDir)) {
  process.exit(0);
}

const chunkFiles = fs
  .readdirSync(viteChunksDir)
  .filter((file) => file.startsWith("dep-") && file.endsWith(".js"));

if (chunkFiles.length === 0) {
  process.exit(0);
}

let patchedFiles = 0;

for (const chunkFile of chunkFiles) {
  const chunkPath = path.join(viteChunksDir, chunkFile);
  const source = fs.readFileSync(chunkPath, "utf8");
  const start = source.indexOf('  exec("net use", (error, stdout) => {');

  if (start === -1) {
    continue;
  }

  const end = source.indexOf("  });", start);

  if (end === -1) {
    continue;
  }

  const patched =
    source.slice(0, start) +
    "  safeRealpathSync = fs__default.realpathSync.native;\n" +
    source.slice(end + "  });".length);

  fs.writeFileSync(chunkPath, patched);
  patchedFiles += 1;
}

if (patchedFiles > 0) {
  console.log(`Patched Vite Windows realpath handling in ${patchedFiles} chunk file(s)`);
}
