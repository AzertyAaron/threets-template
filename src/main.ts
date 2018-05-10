import { WebGLRenderer } from "three"
import { mainScene } from "./Scene"
import { mainCamera } from "./Camera"
import { box } from "./Box";

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
	box.update()
	requestAnimationFrame(animate)

	renderer.render(mainScene, mainCamera)
}

animate()