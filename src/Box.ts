import { BoxBufferGeometry, Mesh, MeshNormalMaterial } from "three"

const geometry = new BoxBufferGeometry(1, 1, 1)
const material = new MeshNormalMaterial()

export const box = new Mesh(geometry, material)