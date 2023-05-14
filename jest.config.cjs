const { resolve } = require('path');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // TODO: Incase you need assets in test files (🤷‍♂️),
    // uncomment the following line.
    // '^@assets/(.*)$': resolve(__dirname, 'public/assets/$1'),
    '^@src/(.*)$': resolve(__dirname, 'src/$1'),
  },
};