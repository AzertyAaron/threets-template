import { Scene } from "three"
import { box } from "./Box"

const scene = new Scene
scene.add(box.mesh)

export const mainScene = scene