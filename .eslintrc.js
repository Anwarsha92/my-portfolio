module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/alt-text': 'warn', // Optional: show warning for missing alt
  },
};
