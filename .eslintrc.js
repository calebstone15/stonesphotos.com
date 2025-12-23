module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "off",
    "no-unused-vars": "warn"
  },
  "globals": {
    "emailjs": "readonly"
  }
};
