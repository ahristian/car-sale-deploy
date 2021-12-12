import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | car sale', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to best place in Albuquerque to buy best cars!');

    assert.dom('.button').hasText('Inventory');
    await click('.button');
    assert.equal(currentURL(), '/inventory');

    assert.dom('.button').hasText('About Us');
    await click('.button');
    assert.equal(currentURL(), '/about');

    assert.dom('.button').hasText('Contact Us');
    await click('.button');
    assert.equal(currentURL(), '/contact');
  });
});
