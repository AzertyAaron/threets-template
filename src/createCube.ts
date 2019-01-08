import { BoxBufferGeometry, MeshNormalMaterial, Mesh } from "three"

export function createCube() {
	const cubeGeo = new BoxBufferGeometry()
	const cubeMat = new MeshNormalMaterial()

	const cube = new Mesh(cubeGeo, cubeMat)

	return cube
}
