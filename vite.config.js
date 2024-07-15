import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { execSync } from "child_process";

// Get the date of the last commit
const lastCommitDate = execSync("git log -1 --format=%cd").toString().trim();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.LAST_COMMIT_DATE": JSON.stringify(lastCommitDate),
  },
});
