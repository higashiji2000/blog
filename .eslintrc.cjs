module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["unused-imports"],
  extends: ["plugin:astro/recommended", "standard-with-typescript", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".astro"],
  },
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "unused-imports/no-unused-vars": ["off"],
      },
    },
    {
      files: "src/env.d.ts",
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
};
