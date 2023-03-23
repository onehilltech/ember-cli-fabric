import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | fabric-register-canvas', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test.skip('it renders', async function (assert) {
    await render(hbs`<div {{fabric-register-canvas}}></div>`);

    assert.ok(true);
  });
});
