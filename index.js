/* eslint-env node */
module.exports = {
  name: 'ember-chai-jquery',

  options: {
    nodeAssets: {
      'chai-jquery': {
        import: [{ path: 'chai-jquery.js', type: 'test' }]
      }
    }
  }
};
