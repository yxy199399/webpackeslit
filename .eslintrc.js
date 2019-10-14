module.exports = {
  "root": true,
  "extends": [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "plugins": ['prettier'],
  "rules": {
    "prettier/prettier": "error",
    // "no-console": "error"
  }
}