import { OrthographicCamera, PerspectiveCamera } from "three"

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight)
camera.position.z = 5

export const mainCamera = camera