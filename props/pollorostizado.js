import * as THREE from "../js/three.module.js";
export default function ESC22({x, y, z}) {

    
// POLLO ROSTIZADO

var materialPolloRostizado = new THREE.MeshLambertMaterial({
    color: 0x8C4A16, 
    roughness: 0.5
});

var materialHuesitoPollo = new THREE.MeshLambertMaterial({
    color: 0xFFFAFA,
    roughness: 0.6
});

// pechuga
var geometryCuerpoPollo = new THREE.SphereGeometry(2.2, 32, 16);
var meshCuerpoPollo = new THREE.Mesh(geometryCuerpoPollo, materialPolloRostizado);
//scene.add(meshCuerpoPollo);
meshCuerpoPollo.position.set(0, 2, 0); 
meshCuerpoPollo.scale.set(1.3, 1, 1.6);
meshCuerpoPollo.castShadow = true;
meshCuerpoPollo.receiveShadow = true;

//piernitaizq

var geometryPollo1 = new THREE.SphereGeometry(1.2, 16, 16);
var materialPollo1 = new THREE.MeshLambertMaterial({
    color: 0x8C4A16, 
    side: THREE.DoubleSide
});
var meshPollo1 = new THREE.Mesh(geometryPollo1, materialPollo1);
//scene.add(meshPollo1);
meshPollo1.position.set(2.5, 2, -2);
meshPollo1.scale.set(1.5, 1.1, 1.2); 
meshPollo1.rotation.set(-Math.PI/2, 0, Math.PI/2 + Math.PI/6); 

// Huesito del pollo 
var geometryHuesito1 = new THREE.CylinderGeometry(0.4, 0.3, 2, 10);
var materialHuesito1 = new THREE.MeshLambertMaterial({
    color: 0xFFFAFA, 
    side: THREE.DoubleSide
});
var meshHuesito1 = new THREE.Mesh(geometryHuesito1, materialHuesito1);
//scene.add(meshHuesito1);
meshHuesito1.position.set(1.5, 2, -3.8);
meshHuesito1.rotation.set(-Math.PI/2, 0, -Math.PI/2 + -Math.PI/3); 


//piernitader

var geometryPollo2 = new THREE.SphereGeometry(1.2, 16, 16);
var materialPollo2 = new THREE.MeshLambertMaterial({
    color: 0x8C4A16, 
    side: THREE.DoubleSide
});
var meshPollo2 = new THREE.Mesh(geometryPollo2, materialPollo2);
//scene.add(meshPollo2);
meshPollo2.position.set(-2.5, 2, -2);
meshPollo2.scale.set(1.5, 1.1, 1.2); 
meshPollo2.rotation.set(Math.PI/2, 0, Math.PI/2 + Math.PI/6); 

// Huesito del pollo 
var geometryHuesito2 = new THREE.CylinderGeometry(0.4, 0.3, 2, 10);
var materialHuesito2 = new THREE.MeshLambertMaterial({
    color: 0xFFFAFA, 
    side: THREE.DoubleSide
});
var meshHuesito2 = new THREE.Mesh(geometryHuesito2, materialHuesito2);
//scene.add(meshHuesito2);
meshHuesito2.position.set(-1.5, 2, -3.8);
meshHuesito2.rotation.set(Math.PI/2, 0, -Math.PI/2 + -Math.PI/3); 


const ESC22 = new THREE.Group();
ESC22.add(meshCuerpoPollo,meshPollo1,meshPollo2,meshHuesito1,meshHuesito2);
ESC22.position.set(x,y,z);

return ESC22;
}
