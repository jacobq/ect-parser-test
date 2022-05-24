import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<MyComponent />`);
    // Problem is coming from type assertion (<HTMLFormElement>) here
    // (commenting out the following line prevents the parsing error below)
    assert.strictEqual((<HTMLFormElement>this.element).textContent?.trim(), '');

    // ESLint:
    // Parsing error: Unterminated JSX contents.
    await render(hbs`
      <MyComponent>
        template block text
      </MyComponent>
    `);

    assert.strictEqual(this.element.textContent?.trim(), 'template block text');
  });
});
