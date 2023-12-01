module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'next',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    rules: {
        'no-console': 'warn',
        'quotes': ['off', 'single'],
        'jsx-quotes': ['off', 'prefer-single'],
        'indent': ['off', 2],
        'max-len': ['off', {'code': 120}],
        'comma-dangle': ['off', true],
        'semi': ['off', false],
        'react/display-name': 'off',
        'object-curly-spacing': ['off', 'always', {'objectsInObjects': false}],
        'array-bracket-spacing': ['off', 'never']
    },
}
