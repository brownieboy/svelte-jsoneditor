// import { within, userEvent } from '@storybook/testing-library';
import Page from '../routes/examples/basic_usage_one_way_binding/+page.svelte';

export default {
  title: 'Example/Basic One Way Binding',
  component: Page,
  render: (args) => ({
    Component: Page,
    props: args,
  }),
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
  //   layout: 'fullscreen',
  // },
};

// More on interaction testing: https://storybook.js.org/docs/svelte/writing-tests/interaction-testing
export const Default = {
  render: (args) => ({
    Component: Page,
    props: args,
  }),
};
