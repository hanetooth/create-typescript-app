import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import indexHtmlTemplate from './public/index.html.js';

import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';

const isProd = process.env.NODE_ENV === "production";
const outputDir =  'build';

export default {
  input: 'src/main.ts',
  output: {
    dir: outputDir,
    format: 'es',
    sourcemap: true,
  },
  watch: {
    chokidar: {
      paths: 'src/**'
    },
    buildDelay: 1000, // TODO: Adjust build delay time as u needed.
    clearScreen: false,
  },
  plugins: [
    alias({
      entries: [
        { find: '@assets', replacement: 'public/assets' }
      ]
    }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    typescript(),
    url({
      include: ['**/*.png'], // Adjust the glob pattern based on your asset file extensions
      limit: 0, // Disable base64 encoding
      publicPath: '/assets/', // Adjust the public path based on your project setup
      destDir: `${outputDir}/assets/`,
    }),
    copy({
      targets: [
        { src: 'public/static/*', dest: outputDir },
      ]
    }),
    nodeResolve(),
    postcss({
      namedExports: (name) => name.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()),
      plugins: [autoprefixer(), cssnano()],
      modules: true,
      extract: true,
      sourceMap: !isProd,
      minimize: !isProd,
      use: ['sass'],
    }),
    html({
      title: 'Boilerplate',
      // @ts-ignore
      template: indexHtmlTemplate
     }),
    !isProd && serve({
      contentBase: outputDir,
      open: true,
      verbose: true,
    }),
    !isProd && livereload({
      watch: outputDir,
      verbose: true,
    }),
    isProd && terser(),
  ],
};