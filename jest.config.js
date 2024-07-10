const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': path.resolve(__dirname, 'src/components/$1'),
    '^@contexts/(.*)$': path.resolve(__dirname, 'src/contexts/$1'),
    '^@helpers/(.*)$': path.resolve(__dirname, 'src/helpers/$1'),
    '^@models/(.*)$': path.resolve(__dirname, 'src/models/$1')
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/tests/**/*.{js,jsx,ts,tsx}'
  ]
}
