import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { AutoUnpackNativesPlugin } from "@electron-forge/plugin-auto-unpack-natives";
import { WebpackPlugin } from "@electron-forge/plugin-webpack";

import { mainConfig } from "./webpack.main.config";
import { rendererConfig } from "./webpack.renderer.config";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ["darwin"]), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      // devContentSecurityPolicy:
      //   "default-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:* ws://localhost:* http://api.discipline.app.br;",
      devContentSecurityPolicy:
        "default-src * self ws: blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * ws: 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;",
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: "./src/renderer/html/index.html",
            js: "./src/renderer/renderer.ts",
            name: "main_window",
            preload: {
              js: "./src/main/preload.ts",
            },
          },
        ],
      },
    }),
  ],
};

export default config;
