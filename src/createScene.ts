import { Scene, Vector3 } from "three"
import { createCube } from "./createCube"

export function createScene(): Scene {
	const scene = new Scene()

	scene.add(createCube())

	return scene
}
