import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  ...nextCoreWebVitals,
  {
    ignores: ['out/**', '.next/**', 'node_modules/**', 'coverage/**'],
  },
  {
    rules: {
      // The site renders curly quotes in body copy on purpose.
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
