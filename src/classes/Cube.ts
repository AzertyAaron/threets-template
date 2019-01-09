import { Mesh, BoxBufferGeometry, MeshNormalMaterial, Euler } from "three"

export class Cube {
	mesh = new Mesh(new BoxBufferGeometry(), new MeshNormalMaterial())

	rotation = new Euler()

	update() {
		this.rotation.x += 0.03
		this.rotation.y += 0.03
		this.rotation.z += 0.03
	}

	updateMesh() {
		this.mesh.setRotationFromEuler(this.rotation)
	}
}
