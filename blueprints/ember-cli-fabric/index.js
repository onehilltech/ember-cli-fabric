/* eslint-env node */

const { Blueprint } = require('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend({
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  addons: [{ name: '@ember/render-modifiers' }],
});
