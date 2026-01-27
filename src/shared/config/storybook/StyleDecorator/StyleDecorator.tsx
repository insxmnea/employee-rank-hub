import { ReactRenderer } from "@storybook/react-webpack5";
import { PartialStoryFn } from "storybook/internal/csf";
import "@app/styles/index.scss";

export const StyleDecorator = (
  Story: PartialStoryFn<
    ReactRenderer,
    {
      // eslint-disable-next-line
      [x: string]: any;
    }
  >,
) => {
  return <Story />;
};
