import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<MyComponent />`);
    // This is fine now since @typescript-eslint/parser correctly identifies
    // this type assertion instead of mistaking it as JSX
    assert.strictEqual((<HTMLFormElement>this.element).textContent?.trim(), '');

    await render(hbs`
      <MyComponent>
        template block text
      </MyComponent>
    `);

    assert.strictEqual(this.element.textContent?.trim(), 'template block text');
  });
});
