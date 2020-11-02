import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'Meta.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'Meta' }
  ],
  plugins: [
    svelte({
      preprocess: autoPreprocess({
        defaults: { script: 'typescript' }
      })
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    })
  ]
};
