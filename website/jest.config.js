module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/node_modules/**",
      "!assets.d.ts",
      "!setupTests.ts"
    ],  
  };