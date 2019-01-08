import { WebGLRenderer } from "three"

import { createScene } from "./createScene"
import { createCamera } from "./createCamera"
import { createComposer } from "./createComposer"

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight, true)
document.body.appendChild(renderer.domElement)

const scene = createScene()
const camera = createCamera()
const composer = createComposer(scene, camera, renderer)

function draw() {
	requestAnimationFrame(draw)

	composer.render()
}

window.addEventListener("resize", () => {
	renderer.setSize(window.innerWidth, window.innerHeight, true)
	composer.setSize(window.innerWidth, window.innerHeight)

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
})

draw()
