import { Scene } from "three"
import { box } from "./Box"
import { hemisphereLight, directionalLight } from './Lighting'


const scene = new Scene
scene.add(box.mesh, hemisphereLight, directionalLight)

export const mainScene = scene