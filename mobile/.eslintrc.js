module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './mobile/tsconfig.json',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
