import { ThemeProvider } from "@app/providers/theme";
import { Theme } from "@app/providers/theme/lib/ThemeContext";
import { ReactRenderer } from "@storybook/react-webpack5";
import { PartialStoryFn } from "storybook/internal/csf";

export const ThemeDecorator =
  (theme: Theme) =>
  // eslint-disable-next-line
  (
    Story: PartialStoryFn<
      ReactRenderer,
      {
        // eslint-disable-next-line
        [x: string]: any;
      }
    >,
  ) => {
    return (
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
