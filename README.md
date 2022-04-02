# unplugin-properties

[![npm](https://img.shields.io/npm/v/unplugin-properties)](https://www.npmjs.com/package/unplugin-properties)

An Vite/Rollup/Webpack/esbuild plugin to load [properties](https://en.wikipedia.org/wiki/.properties) files.

## Usage

### Vite

```ts
// vite.config.ts
import properties from "unplugin-properties";

export default defineConfig({
  plugins: [
    // ...
    properties.vite(),
  ],
});
```

### Rollup

```js
// rollup.config.js
import properties from "unplugin-properties";

export default {
  plugins: [
    // ...
    properties(),
  ],
};
```

### Webpack

```js
// webpack.config.js
module.exports = {
  plugins: [
    // ...
    require("unplugin-properties").webpack(),
  ],
};
```

## License

MIT
