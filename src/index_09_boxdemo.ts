import * as THREE from "three"
import { useSpotLight, useThree } from "./util/three.util";

//定义一个场景
let [scene, camera, renderer] = useThree()
scene.add(useSpotLight(0xffffff))

//定义一个立方体
// const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({  }))
let count = 9
let size = 1
//随机整数
function randomInt(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
new Array(count * count * count).fill(0).map((_, i) => {
    let box = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshLambertMaterial({ color: `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})` }))
    box.position.y = Math.floor(i / count / count) * size
    box.position.x = Math.floor((i % (count * count)) / count) * size
    box.position.z = Math.floor((i % (count * count)) % count) * size
    scene.add(box)
})


//地面
const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshLambertMaterial({ color: 0xffffff }))
plane.rotation.x = - Math.PI / 2
plane.position.y = -2
plane.receiveShadow = true
scene.add(plane)

renderer.render(scene, camera)

