import { PerspectiveCamera, Vector3 } from "three"

export function createCamera() {
	const camera = new PerspectiveCamera(
		undefined,
		window.innerWidth / window.innerHeight
	)

	camera.position.set(3, 3, 3)
	camera.lookAt(new Vector3(0, 0, 0))

	return camera
}
