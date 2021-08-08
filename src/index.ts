import fs from "node:fs";
import { Plugin } from "esbuild";

export default function propertiesPlugin(): Plugin {
  return {
    name: "properties-plugin",
    setup: (build) => {
      build.onLoad(
        { filter: /\.properties$/, namespace: "file" },
        async (args) => {
          const content = await fs.promises.readFile(args.path, "utf-8");
          // @ts-ignore
          const { parse } = await import("properties");

          return {
            contents: JSON.stringify(parse(content)),
            loader: "json",
          };
        }
      );
    },
  };
}
