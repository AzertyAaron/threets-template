import { OrthographicCamera, PerspectiveCamera } from "three"

export const mainCamera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight)
mainCamera.position.z = 5