import { defineConfig } from 'vite';
import { viteObfuscateFile } from 'vite-plugin-obfuscator';
import zipPack from 'vite-plugin-zip-pack';

const plugins = [];

if (/^(true|1|yes)$/i.test(process.env['RELEASE'])) {
  plugins.push(
    viteObfuscateFile({
      seed: Date.now()
    }),
    zipPack({
      inDir: 'dist',
      outDir: 'dist-zip',
      outFileName: 'dist.zip'
    })
  );
}

export default defineConfig({
  base: './',
  plugins: plugins,
  publicDir: './public',
  build: {
    outDir: 'dist'
  }
});
