import { PerspectiveCamera, Vector3 } from "three"

export function createCamera() {
	const camera = new PerspectiveCamera()

	camera.position.set(3, 3, 3)
	camera.lookAt(new Vector3(0, 0, 0))

	return camera
}
