import { WebGLRenderer, Scene } from "three"

import { createCamera } from "./createCamera"
import { createComposer } from "./createComposer"
import { Cube } from "./classes/Cube"

const renderer = new WebGLRenderer({ antialias: true })
document.body.appendChild(renderer.domElement)

const scene = new Scene()
const camera = createCamera()

const cube = new Cube()
scene.add(cube.mesh)

const composer = createComposer(scene, camera, renderer)

let lastUpdate = Date.now()

// Update loop
function update(delta: number) {
	cube.update(delta)
}

// Render loop
function render(delta: number) {
	composer.render(delta)
}

function tick() {
	requestAnimationFrame(tick)

	const deltaTime = Date.now() - lastUpdate
	lastUpdate = Date.now()

	update(deltaTime)
	render(deltaTime)
}

// Resize event
function resize() {
	renderer.setSize(window.innerWidth, window.innerHeight, true)
	composer.setSize(window.innerWidth, window.innerHeight)

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
}

window.addEventListener("resize", resize)

// Start animation
resize()
tick()
