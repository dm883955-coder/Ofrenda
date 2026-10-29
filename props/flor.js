import * as THREE from "../js/three.module.js";
export default function ESC05({x, y, z}) {

    
//flor
//abajo
var florUno = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var matUno = new THREE.MeshLambertMaterial({
    color:0xfc370c,
    metalness:0.5,
    rouhness: 0.3,
});
var meshUno = new THREE.Mesh(florUno,matUno);
meshUno.position.set(-60,4,-60);
meshUno.rotation.set(0,Math.PI,0);
//scene.add(meshUno);
 meshUno.castShadow = true;
//arriba
 var florDos = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var matDos = new THREE.MeshLambertMaterial({
    color:0xfc370c,
    metalness:0.5,
    rouhness: 0.3,
});
var meshDos = new THREE.Mesh(florDos,matDos);
meshDos.position.set(-60,4.5,-60);
meshDos.rotation.set(0,Math.PI,0);
//scene.add(meshDos);
 meshDos.castShadow = true;


const ESC05 = new THREE.Group();
ESC05.add(meshUno,meshDos);
ESC05.position.set(x,y,z);

return ESC05;
}
