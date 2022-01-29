// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import type { StoryModule, StoryModules } from '@stories/stories-common';

import { App } from '../app';

describe('stories-app', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [App],
      html: '<stories-app></stories-app>',
    });
    expect(root).toEqualHtml(`
      <stories-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-app>
    `);
  });

  it('renders with values', async () => {
    const storyModule: StoryModule = {
      'default': {
        title: 'title',
        component: {},
        subcomponents: [],
        decorators: [],
        args: {},
        argTypes: {}
      },
      '__esModule': true,
      'myStory': {}
    };
    const storyModules: StoryModules = [storyModule];
    const storyChange = jest.fn(event => {
      expect(event.detail).toEqual({
        "argTypes": {},
        "args": {},
        "component": {},
        "decorators": [],
        "kinds": ["title"],
        "parameters": {},
        "storyFn": {},
        "storyId": "title--my-story",
        "storyName": "My Story",
        "subcomponents": [],
      })
    });
    const { root } = await newSpecPage({
      components: [App],
      template: () => (<stories-app modules={storyModules} onStoryChange={storyChange}></stories-app>),
    });
    expect(root).toEqualHtml(`
      <stories-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-app>
    `);
    expect(storyChange).toHaveBeenCalled();
  });
});
