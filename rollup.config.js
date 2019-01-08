import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import serve from "rollup-plugin-serve"
import copy from "rollup-plugin-copy-assets"
import glslify from "rollup-plugin-glslify"
import html from "rollup-plugin-generate-html-template"

export default {
	input: "./src/main.ts",
	output: {
		file: "./dist/main.js",
		format: "iife",
		sourcemap: true
	},
	watch: {
		chokidar: true,
		include: "./src/**"
	},
	plugins: [
		glslify(),
		resolve({
			three: true
		}),
		commonjs(),
		typescript({
			clean: true,
			rollupCommonJSResolveHack: true
		}),
		html({
			template: "src/template.html",
			target: "index.html"
		}),
		copy({
			assets: ["./src/assets"]
		}),
		serve("dist")
	]
}
