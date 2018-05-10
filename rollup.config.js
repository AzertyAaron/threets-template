import uglify from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import path from 'path'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/main.js',
		format: 'iife',
		sourcemap: !production
	},
	plugins: [
		nodeResolve(),
		commonjs({ sourceMap: true }),
		typescript(),
		production && uglify()
	]
}