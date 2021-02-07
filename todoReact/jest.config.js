module.exports = {
  roots: ["<rootDir>/_tests_"],
  testRegex: "_tests_/(.+)\\.test\\.(jsx?|tsx?)$",
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  setupFiles: ["<rootDir>/_tests_/setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["!/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
