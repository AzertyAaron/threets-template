import { Mesh, BoxBufferGeometry, MeshNormalMaterial, Euler } from "three"

export class Cube {
	mesh = new Mesh(new BoxBufferGeometry(), new MeshNormalMaterial())

	rotation = new Euler()

	update(delta: number) {
		this.rotation.x += 0.001 * delta
		this.rotation.y += 0.001 * delta
		this.rotation.z += 0.001 * delta

		this.updateMesh()
	}

	updateMesh() {
		this.mesh.setRotationFromEuler(this.rotation)
	}
}
