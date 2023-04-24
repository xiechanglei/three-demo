import { BoxGeometry, Mesh, MeshNormalMaterial } from "three";
import { useThree } from "./util/three.util";

let [scene, camera, renderer] = useThree()

scene.add(new Mesh(new BoxGeometry(3, 3, 3), new MeshNormalMaterial()))

// scene.children.forEach
//遍历场景中的所有对象
scene.traverse

//雾化
scene.fog

//覆盖所有子元素的材质
scene.overrideMaterial

//查找指定名称的对象
scene.getObjectByName

//删除元素
scene.remove

renderer.render(scene, camera)


