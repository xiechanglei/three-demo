import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import GUI from 'data-gui'


export const useThree = (cameraX: number = -10, cameraY: number = 10, cameraZ: number = 10): [THREE.Scene, THREE.Camera, THREE.WebGLRenderer, OrbitControls] => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000)
    camera.position.set(cameraX, cameraY, cameraZ)
    camera.lookAt(scene.position)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera)
    })
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
    )
    return [scene, camera, renderer, useOrbitControls(camera, renderer)]
}

export const useOrbitControls = (camera: THREE.Camera, renderer: THREE.Renderer) => {
    return new OrbitControls(camera, renderer.domElement)
}

export const useSpotLight = (color: number = 0xffffff, x: number = 10, y: number = 15, z: number = 20) => {
    const spot = new THREE.SpotLight(color)
    spot.position.set(x, y, z)
    spot.castShadow = true
    spot.shadow.mapSize = new THREE.Vector2(10240, 10240)
    spot.shadow.camera.near = 0.5
    spot.shadow.camera.far = 50
    return spot
}

export const usePlane = (color: number = 0xffffff) => {
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshLambertMaterial({ color }))
    plane.rotation.x = - Math.PI / 2
    plane.receiveShadow = true
    return plane
}

type GuiConfig = {
    init: number,
    min: number,
    max: number,
    step: number
}
export const useGui = (config: { [index: string]: GuiConfig }) => {
    const gui = new GUI()
    const ctrl: { [index: string]: number } = {}
    for (let name in config) {
        ctrl[name] = config[name].init
        gui.add(name, ctrl, { min: config[name].min, max: config[name].max, step: config[name].step, name })
    }
    return ctrl
}