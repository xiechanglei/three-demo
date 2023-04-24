import { PerspectiveCamera, Scene, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer, AxesHelper } from 'three';

//相机
const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 2

//场景
const scene = new Scene()
const mesh = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial())
scene.add(mesh)
//坐标轴
scene.add(new AxesHelper())

//渲染器
const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//动画
renderer.setAnimationLoop((time: number) => {
    mesh.rotation.x = time / 2000
    mesh.rotation.y = time / 1000
    renderer.render(scene, camera)
})
