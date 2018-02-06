module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSubstrate',
      externals: {
        react: 'React'
      }
    }
  }
}
