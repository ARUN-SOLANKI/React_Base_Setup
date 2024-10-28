const featureSliceDesignError =
  '⚠ Feature-Slice-Design Error: ' +
  'Stick to the following import hierarchy:' +
  ' app > pages > features > entities > shared'

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['./tsconfig.json', '.eslintrc.js'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    // {
    //   files: ['*.js'], // JavaScript files
    //   rules: {
    //     'max-len': ['error', { code: 200 }],
    //   },
    // },
    // {
    //   files: ['**/*.ts'], // TypeScript files
    //   rules: {
    //     'max-len': ['error', { code: 300 }],
    //   },
    // },
    // {
    //   files: ['**/*.tsx'], // TypeScript React files
    //   rules: {
    //     'max-len': ['error', { code: 150 }],
    //   },
    // },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'error', // no any type
    '@typescript-eslint/no-shadow': 'off', // same name for different variables
    'react/require-default-props': 'off', // default value for optional props is required
    'react/jsx-props-no-spreading': 'off', // allow props spreading
    '@typescript-eslint/no-unnecessary-condition': 'error',

    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-redeclare': [
      'error',
      { ignoreDeclarationMerge: true },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        // prefix: ['I'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
        // suffix: ['Types'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'shared/**', group: 'internal', position: 'before' },
          { pattern: 'entities/**', group: 'internal', position: 'before' },
          { pattern: 'features/**', group: 'internal', position: 'before' },
          { pattern: 'pages/**', group: 'internal', position: 'before' },
          { pattern: 'app/**', group: 'internal', position: 'before' },
        ],
        distinctGroup: true,
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],

    'import/no-restricted-paths': [
      'error',
      {
        basePath: './src',
        zones: [
          {
            target: './pages',
            from: ['./app'],
            message: featureSliceDesignError,
          },
          {
            target: './features',
            from: ['./pages', './app'],
            message: featureSliceDesignError,
          },
          {
            target: './entities',
            from: ['./features', './pages', './app'],
            message: featureSliceDesignError,
          },
          {
            target: './shared',
            from: ['./features', 'entities', './pages', './app'],
            message: featureSliceDesignError,
          },
        ],
      },
    ],

    complexity: ['warn', 12],
    'no-void': 'off',
    'max-params': ['error', 3], // setting max param to function
    // 'max-len': ['error', { code: 150 }],
    'max-len': 'off', // fix the above rule and also in the override section
  },
  settings: {
    react: {
      version: '18.0',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
}
