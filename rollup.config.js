import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default [
  {
    input: "src/index.js",
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
  },
];
