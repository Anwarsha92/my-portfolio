module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off', // ✅ disable prop-types check
    'react/react-in-jsx-scope': 'off', // ✅ disable React import requirement
    'no-unused-vars': 'warn', // ✅ won't block build
    'jsx-a11y/alt-text': 'warn',
  },
};
