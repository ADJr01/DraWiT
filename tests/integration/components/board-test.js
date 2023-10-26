import { module, test } from 'qunit';
import { setupRenderingTest } from 'dra-wi-t/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | board', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Board />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Board>
        template block text
      </Board>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
