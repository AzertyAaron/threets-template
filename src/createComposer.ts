import { WebGLRenderer, Scene, PerspectiveCamera } from "three"

import { EffectComposer, RenderPass } from "postprocessing"
//import { EffectComposer, RenderPass } from "three"

export function createComposer(scene: Scene, camera: PerspectiveCamera) {
	const renderer = new WebGLRenderer({ antialias: true })
	document.body.appendChild(renderer.domElement)

	const composer = new EffectComposer(renderer)
	composer.setSize(window.innerWidth, window.innerHeight)

	composer.addPass(new RenderPass(scene, camera))

	return {
		render: () => renderer.render(scene, camera),
		setSize: (w: number, h: number) => renderer.setSize(w, h, true)
	}
}
