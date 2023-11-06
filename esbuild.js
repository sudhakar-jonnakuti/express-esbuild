const { build, analyzeMetafile } = require('esbuild');
const fs = require('node:fs');

async function appBuild() {
  try {
    const result = await build({
      entryPoints: ['src/**/*.ts'],
      outdir: 'dist',
      minify: true,
      platform: 'node',
      format: 'cjs',
      treeShaking: true,
      bundle: true,
      metafile: true
    });

    if (result.metafile) {
      // use https://bundle-buddy.com/esbuild to analyses
      fs.writeFileSync('./dist/metafile.json', JSON.stringify(result.metafile))
    }
    console.log('Build successful:', result);
    process.exit(0);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

appBuild();