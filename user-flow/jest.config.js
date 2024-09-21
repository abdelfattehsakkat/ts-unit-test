module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/tests/**/*.test.ts'],
    transform: {
      '^.+\\.ts$': ['ts-jest', {
        tsconfig: 'tsconfig.json',
      }],
    },
    collectCoverage: true, // Enable coverage collection
    coverageDirectory: 'coverage', // Specify the output directory for coverage reports
    coverageReporters: ['text', 'lcov'], // 'text' for console output, 'lcov' for detailed report
  };
  