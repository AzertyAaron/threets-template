import { createScene } from "./createScene"
import { createCamera } from "./createCamera"
import { createComposer } from "./createComposer"

const scene = createScene()
const camera = createCamera()
const composer = createComposer(scene, camera)

function draw() {
	requestAnimationFrame(draw)

	composer.render()
}

window.addEventListener("resize", () => {
	const res = { width: window.innerWidth, height: window.innerHeight }

	composer.setSize(res.width, res.height)

	camera.aspect = res.width / res.height
	camera.updateProjectionMatrix()
})

draw()
