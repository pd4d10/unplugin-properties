# esbuild-plugin-properties

An ESBuild plugin to load [properties](https://en.wikipedia.org/wiki/.properties) files.

## Usage

```js
import esbuild from "esbuild";
import propertiesPlugin from "esbuild-plugin-properties";

esbuild.build({
  // ...
  plugins: [
    // ...
    propertiesPlugin(),
  ],
});
```

## License

MIT
