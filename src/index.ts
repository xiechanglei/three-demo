import * as THREE from "three"
import { usePlane, useSpotLight, useThree } from "./util/three.util";

//定义一个场景
let [scene] = useThree()
scene.add(useSpotLight())
scene.add(usePlane())

const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(geometry, material)
scene.add(line)