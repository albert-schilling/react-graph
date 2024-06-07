const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': path.resolve(__dirname, 'src/components/$1'),
    '^@contexts/(.*)$': path.resolve(__dirname, 'src/contexts/$1')
  }
}
