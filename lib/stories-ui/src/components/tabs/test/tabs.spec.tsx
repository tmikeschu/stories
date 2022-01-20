import { newSpecPage } from '@stencil/core/testing';

import { Tabs } from '../tabs';

describe('stories-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<stories-tabs></stories-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tabs>
    `);
  });
});
