const path = require("path");

export default [
  {
    root: true,
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["generated", path.resolve(__dirname, "./src/__generated__")],
            ["app", path.resolve(__dirname, "./src/app")],
            ["components", path.resolve(__dirname, "./src/components")],
            ["generated_rest", path.resolve(__dirname, "./src/generated_rest")],
            ["gqls", path.resolve(__dirname, "./src/gqls")],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        }
      },
      "import/ignore": "node_modules",
    },
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals", "plugin:prettier/recommended",],
    plugins: ["@typescript-eslint", "unused-imports"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
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
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "sibling",
            "parent",
            "index"
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          }
        }
      ]
    },
  },
  {
    ignores: [".next/*", "env/*", "node_modules/*", "public/*"]
  }
]
