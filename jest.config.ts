import { resolve } from 'path';

export default {
  roots: ['.'],
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/**/*.spec.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
    'dist'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@certificates/(.*)$': '<rootDir>/src/modules/customers/certificates/$1'
  }
};
