import { access, stat } from "node:fs/promises";
import path from "node:path";

const requiredAssets = [
  "public/images/hero/sculptural-systems.png",
  "public/images/social/og-home.png",
  "references/Ghazariz_Portfolio_Design_Direction_03_Reference.png"
];

const failures = [];

for (const relativePath of requiredAssets) {
  const absolutePath = path.resolve(relativePath);
  try {
    await access(absolutePath);
    const file = await stat(absolutePath);
    if (file.size === 0) failures.push(`${relativePath}: empty file`);
  } catch {
    failures.push(`${relativePath}: missing`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Asset audit passed (${requiredAssets.length} required files).`);
