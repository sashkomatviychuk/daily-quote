import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ['unused-imports', 'simple-import-sort'],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'unused-imports/no-unused-imports': 2,
      'simple-import-sort/imports': 2,
      'simple-import-sort/exports': 2,
    },
  }),
];

export default eslintConfig;
