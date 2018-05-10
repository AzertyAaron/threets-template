import { renderer } from "./Renderer"
import { mainScene } from "./Scene"
import { mainCamera } from "./Camera"
import { box } from "./Box"


function animate() {
	requestAnimationFrame(animate)

	box.update()
	renderer.render(mainScene, mainCamera)
}

animate()