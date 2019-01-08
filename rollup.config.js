import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import serve from "rollup-plugin-serve"
import copy from "rollup-plugin-copy"
import del from "rollup-plugin-delete"
import glslify from "rollup-plugin-glslify"
import html from "rollup-plugin-generate-html-template"

export default {
	input: "./src/main.ts",
	output: {
		file: "./dist/main.js",
		format: "iife",
		globals: { three: "THREE" },
		sourcemap: true
	},
	watch: {
		chokidar: true,
		include: "./src/**"
	},
	external: ["three"],
	plugins: [
		del({ targets: "./dist" }),
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
			"./src/assets/": "./dist/assets/",
			"./node_modules/three/examples/js/postprocessing/":
				"./dist/js/postprocessing/",
			"./node_modules/three/examples/js/shaders/": "./dist/js/shaders/"
		}),
		serve("dist")
	]
}
