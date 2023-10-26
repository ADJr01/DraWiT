import { module, test } from 'qunit';
import { setupTest } from 'dra-wi-t/tests/helpers';

module('Unit | Service | tools', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:tools');
    assert.ok(service);
  });
});
