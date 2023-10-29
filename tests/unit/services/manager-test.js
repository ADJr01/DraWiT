import { module, test } from 'qunit';
import { setupTest } from 'dra-wi-t/tests/helpers';

module('Unit | Service | manager', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:manager');
    assert.ok(service);
  });
});
