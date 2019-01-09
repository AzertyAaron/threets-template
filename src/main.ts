import { WebGLRenderer, Scene } from "three"

import { createCamera } from "./createCamera"
import { createComposer } from "./createComposer"
import { Cube } from "./classes/Cube"

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight, true)
document.body.appendChild(renderer.domElement)

const scene = new Scene()

const cube = new Cube()
scene.add(cube.mesh)

const camera = createCamera()
const composer = createComposer(scene, camera, renderer)

function update() {
	cube.update()
}

function draw() {
	requestAnimationFrame(draw)

	cube.updateMesh()
	composer.render()
}

window.addEventListener("resize", () => {
	renderer.setSize(window.innerWidth, window.innerHeight, true)
	composer.setSize(window.innerWidth, window.innerHeight)

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
})

setInterval(update, 16)

draw()
