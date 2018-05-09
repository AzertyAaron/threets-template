import uglify from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import path from 'path'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/main.js',
		format: 'iife',
		sourcemap: !production
	},
	external: [
		'three'
	],
	globals: {
		three: "THREE"
	},
	plugins: [
		typescript(),
		production && uglify()
	]
}