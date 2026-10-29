import * as THREE from "../js/three.module.js";
export default function ESC16({x, y, z}) {

    
// -CRUZ 


var materialCruz = new THREE.MeshLambertMaterial({
    color: 0xac4a00, 
    roughness: 0.7
});

// 1. Barra1
var geometryVertical = new THREE.BoxGeometry(1.2, 10, 1.2);
var meshVertical = new THREE.Mesh(geometryVertical, materialCruz);
//scene.add(meshVertical);
meshVertical.position.set(0, 5, -20);
meshVertical.castShadow = true;
meshVertical.receiveShadow = true;

//  Barra2
var geometryHorizontal = new THREE.BoxGeometry(7, 1.2, 1.2);
var meshHorizontal = new THREE.Mesh(geometryHorizontal, materialCruz);
//scene.add(meshHorizontal);
meshHorizontal.position.set(0, 7.5, -20);
meshHorizontal.castShadow = true;
meshHorizontal.receiveShadow = true;




const ESC16 = new THREE.Group();
ESC16.add(materialCruz,meshHorizontal,meshVertical);
ESC16.position.set(x,y,z);

return ESC16;
}
