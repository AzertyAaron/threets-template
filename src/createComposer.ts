import { WebGLRenderer, Scene, PerspectiveCamera } from "three"
import { EffectComposer, CopyShader, ShaderPass, SSAARenderPass } from "three"

export function createComposer(
	scene: Scene,
	camera: PerspectiveCamera,
	renderer: WebGLRenderer
) {
	const composer = new EffectComposer(renderer)

	const ssaa = new SSAARenderPass(scene, camera)

	const copyPass = new ShaderPass(CopyShader)
	copyPass.renderToScreen = true

	composer.addPass(ssaa)
	composer.addPass(copyPass)

	return composer
}
