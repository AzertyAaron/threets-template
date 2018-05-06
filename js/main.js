// Camera
const cameraScale = .06

const xRadius = window.innerWidth / 2 * cameraScale
const yRadius = window.innerHeight / 2 * cameraScale

const camera = new THREE.OrthographicCamera(-xRadius, xRadius, yRadius, -yRadius, 0.1, 500)
camera.position.z = 5

// Scene
const scene = new THREE.Scene()

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Line (Geometry, Material and Mesh)
function createLine(length, width) {
	const lineGeometry = new THREE.BoxBufferGeometry(length, width, width)

	const lineMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff
	})

	return new THREE.Mesh(lineGeometry, lineMaterial)
}

const line = createLine(1, .1)
scene.add(line)

const speed = 0.01

function animateLine(offset) {
	line.position.y = Math.sin(Date.now() * speed + offset)
}

// Animate fucntion
function animate() {
	requestAnimationFrame(animate)

	animateLine(0)
	renderer.render(scene, camera)
}

animate()