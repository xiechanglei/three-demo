import { PerspectiveCamera, Scene, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer } from 'three';

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 1;

const scene = new Scene();
const mesh = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial())
scene.add(mesh);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation
function animation(time: number) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render(scene, camera)
}


