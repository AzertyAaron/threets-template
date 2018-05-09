import { WebGLRenderer } from "three"
import { mainScene } from "./Scene"
import { mainCamera } from "./Camera"
import { box } from "./Box";

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
	box.rotation.x += 0.003
	box.rotation.y += 0.003
	box.rotation.z += 0.003
	requestAnimationFrame(animate)

	renderer.render(mainScene, mainCamera)
}

animate()