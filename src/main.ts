import { createScene } from "./createScene"
import { createCamera } from "./createCamera"
import { createComposer } from "./createComposer"

const scene = createScene()
const camera = createCamera()
const { composer, renderer } = createComposer(scene, camera)

function draw() {
	requestAnimationFrame(draw)

	composer.render()
}

window.addEventListener("resize", () => {
	const res = { w: window.innerWidth, h: window.innerHeight }

	renderer.setSize(res.w, res.h, true)
	composer.setSize(res.w, res.h)

	camera.aspect = res.w / res.h
	camera.updateProjectionMatrix()
})

draw()
