import { createUnplugin } from "unplugin";

export default createUnplugin(() => {
  return {
    name: "unplugin-properties",
    transformInclude(id) {
      return id.endsWith(".properties");
    },
    async transform(code) {
      // @ts-ignore
      const { parse } = await import("properties");
      return "export default " + JSON.stringify(parse(code));
    },
  };
});
