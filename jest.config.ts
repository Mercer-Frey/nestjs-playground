import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],

  rootDir: '.',

  testRegex: '.*\\.spec\\.ts$',

  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  collectCoverageFrom: ['src/**/*.(t|j)s'],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  // 🔥 ВОТ ЭТО ЧИНИТ АЛИАСЫ
  moduleNameMapper: {
    '^@root/(.*)$': '<rootDir>/src/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^uuid$': '<rootDir>/test/mocks/uuid.ts',
  },
};

export default config;
