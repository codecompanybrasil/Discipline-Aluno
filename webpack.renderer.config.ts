import path from "path";
import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push(
  {
    test: /\.css$/i,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [{ loader: "file-loader" }],
  }
);

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src/renderer/"),
    },
  },
};
