import * as THREE from "../js/three.module.js";
export default function ESC08({x, y, z}) {

    
// MOLE CON POLLO 

// Plato hondo
var geometryPlatoMole = new THREE.CylinderGeometry(4, 3, 0.5, 30);
var materialPlatoBlanco = new THREE.MeshLambertMaterial({
    color: 0xF5F0EB, 
    side: THREE.DoubleSide
});
var meshPlatoMole = new THREE.Mesh(geometryPlatoMole, materialPlatoBlanco);
//scene.add(meshPlatoMole);
meshPlatoMole.position.set(0, 1.5, -15);

//  Salsa de mole 
var geometryMole = new THREE.CylinderGeometry(3.8, 2.8, 0.4, 30);
var materialMole = new THREE.MeshLambertMaterial({
    color: 0x4A2511, 
    side: THREE.DoubleSide
});
var meshMole = new THREE.Mesh(geometryMole, materialMole);
//scene.add(meshMole);
meshMole.position.set(0, 1.7, -15);

// Pieza de pollo 
var geometryPollo = new THREE.SphereGeometry(1.2, 16, 16);
var materialPollo = new THREE.MeshLambertMaterial({
    color: 0x4A2511, 
    side: THREE.DoubleSide
});
var meshPollo = new THREE.Mesh(geometryPollo, materialPollo);
//scene.add(meshPollo);
meshPollo.position.set(0, 2.3, -15);
meshPollo.scale.set(1.3, 0.9, 1); 

// Huesito del pollo 
var geometryHuesito = new THREE.CylinderGeometry(0.4, 0.4, 2, 10);
var materialHuesito = new THREE.MeshLambertMaterial({
    color: 0xFFFAFA, 
    side: THREE.DoubleSide
});
var meshHuesito = new THREE.Mesh(geometryHuesito, materialHuesito);
//scene.add(meshHuesito);
meshHuesito.position.set(1.5, 2.3, -15);
meshHuesito.rotation.set(0, 0, Math.PI / 2); 


const ESC08 = new THREE.Group();
ESC08.add(meshHuesito,meshMole,meshPlatoMole,meshHuesito,meshPollo);
ESC08.position.set(x,y,z);

return ESC08;
}
