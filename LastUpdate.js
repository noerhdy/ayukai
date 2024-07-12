const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "lastUpdated.jsx");
const now = new Date().toISOString();

const content = `// This file is auto-generated
export const lastUpdated = "${now}";`;

fs.writeFileSync(filePath, content, "utf8");
console.log(`Updated lastUpdated date: ${now}`);
