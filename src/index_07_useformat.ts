import * as THREE from "three"
import { useGui, useSpotLight, useThree } from "./util/three.util";

//定义一个场景
let [scene, camera, renderer] = useThree()
scene.add(useSpotLight())

//定义一个立方体
// const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({  }))
const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({ color: 0xff0000 }))
box.castShadow = true
scene.add(box)

//地面
const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshLambertMaterial({ color: 0xffffff }))
plane.rotation.x = - Math.PI / 2
plane.position.y = -2
plane.receiveShadow = true
scene.add(plane)

//摄像机

//animation
let ctrl = useGui({ rotationSpeed: { init: 0.05, step: 0.01, min: 0, max: 1 }, jumpSpeed: { init: 0.05, step: 0.01, min: 0, max: 1 } })
let gap = 0.01
renderer.setAnimationLoop(() => {
    box.rotation.x += ctrl.rotationSpeed
    box.rotation.y += ctrl.rotationSpeed
    gap += ctrl.jumpSpeed
    box.position.x = Math.sin(gap) * 5
    box.position.y = Math.abs(Math.cos(gap) * 5)
    renderer.render(scene, camera)
}
)
