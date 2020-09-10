module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['simple-import-sort'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    'simple-import-sort/sort': 'error'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
