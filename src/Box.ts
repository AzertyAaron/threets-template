import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshStandardMaterial } from "three"


class Box {
	geometry: BufferGeometry
	material: Material
	mesh: Mesh

	constructor() {
		this.geometry = new BoxBufferGeometry(1, 1, 1)
		this.material = new MeshStandardMaterial({ color: 0x50bbff })
		this.mesh = new Mesh(this.geometry, this.material)
	}

	update() {
		box.mesh.rotation.x = Date.now() / 2000
		box.mesh.rotation.y = Date.now() / 2000
		box.mesh.rotation.z = Date.now() / 2000
	}
}

export const box = new Box()