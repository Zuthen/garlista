module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
transformIgnorePatterns: [
  'node_modules/(?!(react-native|@react-native|@react-navigation|react-clone-referenced-element|react-native-vector-icons|@unimodules|expo(nent)?|@expo(nent)?/.*|react-native-safe-area-context|react-native-svg|react-native-reanimated)/)',
],
moduleNameMapper: {
  '^@expo/vector-icons$': '<rootDir>/__mocks__/expoVectorIconsMock.js',
  '^@expo/vector-icons/(.*)$': '<rootDir>/__mocks__/expoVectorIconsMock.js',
},

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
