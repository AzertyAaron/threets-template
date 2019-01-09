import { Mesh, BoxBufferGeometry, MeshNormalMaterial, Euler } from "three"

export class Cube {
	mesh = new Mesh(new BoxBufferGeometry(), new MeshNormalMaterial())

	rotation = new Euler()

	update() {
		this.rotation.x += 0.1
		this.rotation.y += 0.1
		this.rotation.z += 0.1
	}

	updateMesh() {
		this.mesh.setRotationFromEuler(this.rotation)
	}
}
