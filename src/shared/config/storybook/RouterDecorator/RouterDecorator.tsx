import { ReactRenderer } from "@storybook/react-webpack5";
import { BrowserRouter } from "react-router";
import { PartialStoryFn } from "storybook/internal/csf";

export const RouterDecorator = (
  Story: PartialStoryFn<
    ReactRenderer,
    {
      // eslint-disable-next-line
      [x: string]: any;
    }
  >,
) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
