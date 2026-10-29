import * as THREE from "../js/three.module.js";
export default function ESC21({x, y, z}) {

    
// pipian 

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
var geometryMole1 = new THREE.CylinderGeometry(3.8, 2.8, 0.4, 30);
var materialMole1 = new THREE.MeshLambertMaterial({
    color: 0x2a5c0b, 
    side: THREE.DoubleSide
});
var meshMole1 = new THREE.Mesh(geometryMole1, materialMole1);
//scene.add(meshMole1);
meshMole1.position.set(0, 1.7, -15);

// Pieza de pollo 
var geometryPollo1 = new THREE.SphereGeometry(1.2, 16, 16);
var materialPollo1 = new THREE.MeshLambertMaterial({
    color: 0x2a5c0b, 
    side: THREE.DoubleSide
});
var meshPollo1 = new THREE.Mesh(geometryPollo1, materialPollo1);
//scene.add(meshPollo1);
meshPollo1.position.set(0, 2.3, -15);
meshPollo1.scale.set(1.3, 0.9, 1); 

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


const ESC21 = new THREE.Group();
ESC21.add(meshHuesito,meshMole1,meshPlatoMole,meshHuesito,meshPollo1);
ESC21.position.set(x,y,z);

return ESC21;
}
