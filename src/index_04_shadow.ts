import * as THREE from "three";
import { Vector2 } from "three";

//定义一个场景
const scene = new THREE.Scene()

//坐标轴
scene.add(new THREE.AxesHelper(50))

//定义一个立方体
// const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({  }))
const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }))
box.castShadow = true
scene.add(box)

//地面
const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshLambertMaterial({ color: 0xffffff }))
plane.rotation.x = - Math.PI / 2
plane.position.y = -5
plane.receiveShadow = true
scene.add(plane)

//光源
const spot = new THREE.SpotLight(0xffffff)
spot.position.set(10, 15, 20)
spot.castShadow = true
spot.shadow.mapSize = new Vector2(10240, 10240)
spot.shadow.camera.near = 0.5
spot.shadow.camera.far = 50
scene.add(spot)

//摄像机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.set(-10, 10, 10)
camera.lookAt(scene.position)

//render
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
// renderer.setAnimationLoop(() => {
//     // spot.position.x += 0.01
//     // spot.position.y += 0.01
// }
// )


document.body.appendChild(renderer.domElement)