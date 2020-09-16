import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import html from 'rollup-plugin-html2';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;
	
	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

const plugins = [
  svelte({
    // enable run-time checks when not in production
    dev: !production,
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css: css => {
      css.write('bundle.css');
    },
    preprocess: sveltePreprocess({ postcss: true }),
  }),

  // If you have external dependencies installed from
  // npm, you'll most likely need these plugins. In
  // some cases you'll need additional configuration -
  // consult the documentation for details:
  // https://github.com/rollup/plugins/tree/master/packages/commonjs
  resolve({
    browser: true,
    dedupe: ['svelte']
  }),
  commonjs(),
  typescript({ sourceMap: !production }),
  html({
    template: 'src/index.html',
    fileName: 'index.html'
  }),
]; 

if (production) {
  // If we're building for production (npm run build instead of npm run dev), minify
  plugins.push(terser());
} else {
  plugins.push(
    // Call `npm run start` once the bundle has been generated
    serve({ historyApiFallback: true },
    // Watch the `public` directory and refresh the browser on changes
    livereload('dist'))
  );
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'dist/bundle.js'
	},
	plugins: plugins,
	watch: {
		clearScreen: false
	}
};