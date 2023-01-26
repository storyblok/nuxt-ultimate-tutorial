module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "./node_modules/eslint-config-airbnb-base/rules/best-practices.js",
    "./node_modules/eslint-config-airbnb-base/rules/errors.js",
    "./node_modules/eslint-config-airbnb-base/rules/es6.js",
    "./node_modules/eslint-config-airbnb-base/rules/imports.js",
    "./node_modules/eslint-config-airbnb-base/rules/node.js",
    // './node_modules/eslint-config-airbnb-base/rules/strict.js',
    "./node_modules/eslint-config-airbnb-base/rules/variables.js",
    "@nuxtjs/eslint-config-typescript",
    "./node_modules/eslint-config-airbnb-base/rules/style.js",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { code: 240 }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "vue/multi-word-component-names": "off",
    "import/extensions": [2, "never"],
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": []
    }],
  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ],
};
