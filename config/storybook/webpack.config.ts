import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack from "webpack";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "../../src"),
  };

  if (!config.resolve) {
    config.resolve = {};
  }

  config.resolve.alias = {
    ...config.resolve.alias,
    "@app": path.resolve(__dirname, "../../src/app"),
    "@pages": path.resolve(__dirname, "../../src/pages"),
    "@widgets": path.resolve(__dirname, "../../src/widgets"),
    "@features": path.resolve(__dirname, "../../src/features"),
    "@entities": path.resolve(__dirname, "../../src/entities"),
    "@shared": path.resolve(__dirname, "../../src/shared"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
