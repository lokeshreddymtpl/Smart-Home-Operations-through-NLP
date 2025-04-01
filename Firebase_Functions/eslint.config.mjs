export default [
  {
    files: ["**/*.js"], // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        console: "readonly", // Add console as a global
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "max-len": ["error", { code: 80 }],
      "quotes": ["error", "double"],
      // Add more rules as needed
    },
  },
];
