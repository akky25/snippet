// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // VitestのグローバルAPIを有効にする
    environment: "happy-dom", // テスト環境
  },
});
