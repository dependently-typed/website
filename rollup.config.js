import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const inputs = [
  "src/scripts/index.js",
  "src/scripts/wiki.js"
];

export default inputs.map(f => (
  {
    input: f,
    output: {
      dir: "dist",
      format: "iife",
    },
    onwarn(warning) {
      if (warning.code !== "THIS_IS_UNDEFINED") {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: { "Reflect.decorate": "undefined" },
      }),
      nodeResolve(),
      terser({
        ecma: 2017,
        module: true,
        warnings: true,
        mangle: {
          properties: {
            regex: /^__/,
          },
        },
      }),
    ],
  }
));
