import * as THREE from "../js/three.module.js";
export default function ESC28({x, y, z}) {

    
//flor
//abajo
var florUn = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var matUn = new THREE.MeshLambertMaterial({
    color:0xe30075,
    metalness:0.5,
    rouhness: 0.3,
});
var meshUn = new THREE.Mesh(florUn,matUn);
meshUn.position.set(-60,4,-60);
meshUn.rotation.set(0,Math.PI,0);
//scene.add(meshUno);
 meshUn.castShadow = true;
//arriba
 var florDo = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var matDo = new THREE.MeshLambertMaterial({
    color:0xe30075,
    metalness:0.5,
    rouhness: 0.3,
});
var meshDo = new THREE.Mesh(florDo,matDo);
meshDo.position.set(-60,4.5,-60); 
meshDo.rotation.set(0,Math.PI,0);
//scene.add(meshDos);
 meshDo.castShadow = true;


const ESC28 = new THREE.Group();
ESC28.add(meshUn,meshDo);
ESC28.position.set(x,y,z);

return ESC28;
}
