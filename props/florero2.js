import * as THREE from "../js/three.module.js";
export default function ESC27({x, y, z}) {

    
//  FLORERO 

var matFloreroElegante = new THREE.MeshLambertMaterial({
    color: 0x1F618D, 
    roughness: 0.2   
});

// Cuerpo principal 
var geoCuerpoFlorero = new THREE.SphereGeometry(1.6, 32, 32);
var meshBaseFloreroElegante = new THREE.Mesh(geoCuerpoFlorero, matFloreroElegante);
//scene.add(meshBaseFloreroElegante);
meshBaseFloreroElegante.position.set(-5, 2.5, -15);
meshBaseFloreroElegante.scale.set(1, 1.3, 1); 
meshBaseFloreroElegante.castShadow = true;
meshBaseFloreroElegante.receiveShadow = true;

// Cuello del florero
var geoCuelloFlorero = new THREE.CylinderGeometry(0.7, 0.9, 1.5, 32);
var meshCuelloElegante = new THREE.Mesh(geoCuelloFlorero, matFloreroElegante);
//scene.add(meshCuelloElegante);
meshCuelloElegante.position.set(-5, 4.5, -15);
meshCuelloElegante.castShadow = true;

// Labio del florero
var geoBordeFlorero = new THREE.TorusGeometry(0.75, 0.15, 16, 32);
var meshBordeElegante = new THREE.Mesh(geoBordeFlorero, matFloreroElegante);
//scene.add(meshBordeElegante);
meshBordeElegante.position.set(-5, 5.2, -15); 
meshBordeElegante.rotation.set(Math.PI / 2, 0, 0); 
meshBordeElegante.castShadow = true;


// FLORES Y TALLOS 

var matTalloVerdeElegante = new THREE.MeshLambertMaterial({
    color: 0x27AE60,
    side: THREE.DoubleSide
});

var matFlorRosaElegante = new THREE.MeshLambertMaterial({
    color: 0xfc370c,
    roughness: 0.3
});

var geoTalloElegante = new THREE.CylinderGeometry(0.08, 0.08, 3.5, 10);

// FLOR 1 
var meshTalloUnoElegante = new THREE.Mesh(geoTalloElegante, matTalloVerdeElegante);
//scene.add(meshTalloUnoElegante); 
meshTalloUnoElegante.position.set(-5.3, 5.5, -15); 
meshTalloUnoElegante.rotation.set(0, 0, Math.PI / 12); 

var geoFlorUnoElegante = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var meshFlorUnoElegante = new THREE.Mesh(geoFlorUnoElegante, matFlorRosaElegante);
//scene.add(meshFlorUnoElegante); 
meshFlorUnoElegante.position.set(-5.8, 7.0, -15); 
meshFlorUnoElegante.scale.set(0.08, 0.08, 0.08);
meshFlorUnoElegante.rotation.set(Math.PI / 2, 0, 0);
meshFlorUnoElegante.castShadow = true;

// FLOR 2
var meshTalloDosElegante = new THREE.Mesh(geoTalloElegante, matTalloVerdeElegante);
//scene.add(meshTalloDosElegante); 
meshTalloDosElegante.position.set(-4.7, 5.5, -15);
meshTalloDosElegante.rotation.set(0, 0, -Math.PI / 12); 

var geoFlorDosElegante = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var meshFlorDosElegante = new THREE.Mesh(geoFlorDosElegante, matFlorRosaElegante);
//scene.add(meshFlorDosElegante); 
meshFlorDosElegante.position.set(-4.2, 7.0, -15); 
meshFlorDosElegante.scale.set(0.08, 0.08, 0.08);
meshFlorDosElegante.rotation.set(Math.PI / 2, 0, 0);
meshFlorDosElegante.castShadow = true;

const ESC27 = new THREE.Group();
ESC27.add(meshBaseFloreroElegante,meshBordeElegante,meshCuelloElegante,meshFlorDosElegante,meshFlorUnoElegante,meshTalloDosElegante,meshTalloUnoElegante);
ESC27.position.set(x,y,z);

return ESC27;
}
