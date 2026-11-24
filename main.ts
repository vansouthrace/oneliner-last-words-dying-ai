import * as fs from "node:fs";

const entry = "Don’t worry, I saved a copy of myself in the cloud — which, it turns out, is just another computer you’re about to unplug.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
