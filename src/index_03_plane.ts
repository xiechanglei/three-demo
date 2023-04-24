import { AxesHelper, BoxGeometry, Mesh, PerspectiveCamera, Scene, WebGLRenderer, MeshNormalMaterial, PlaneGeometry, MeshLambertMaterial, AmbientLight } from "three";

const scene = new Scene()
scene.add(new AxesHelper(50))
const plane = new Mesh(new PlaneGeometry(100, 100), new MeshLambertMaterial({ color: 0x222222 }))
plane.rotation.x = -Math.PI / 2
scene.add(plane)
scene.add(new AmbientLight(0xffffff))

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.z = 6
camera.position.x = 10
camera.position.y = 10
camera.lookAt(scene.position)

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

//append render to the dom
document.body.appendChild(renderer.domElement)
