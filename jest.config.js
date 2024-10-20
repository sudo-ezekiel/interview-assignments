module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).[jt]s?(x)",
    "**/?(*.)+(test|spec).[tj]s?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
