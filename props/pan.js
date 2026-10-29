import * as THREE from "../js/three.module.js";
export default function ESC15({x, y, z}) {

    
//PAN DE MUERTO


var materialPan = new THREE.MeshLambertMaterial({
    color: 0x784817,
    roughness: 0.7
});

// Cuerpo principal del pan
var geometryPan = new THREE.SphereGeometry(3, 32, 16);
var meshPan = new THREE.Mesh(geometryPan, materialPan);
//scene.add(meshPan);
meshPan.position.set(0, 1.5, 5);
meshPan.scale.set(1.2, 0.7, 1.2);
meshPan.castShadow = true;
meshPan.receiveShadow = true;



// Bolita superior central 
var geometryBolita = new THREE.SphereGeometry(0.6, 16, 16);
var meshBolita = new THREE.Mesh(geometryBolita, materialPan);
//scene.add(meshBolita);
meshBolita.position.set(0, 3.5, 5);
meshBolita.castShadow = true;

// BOLITAS 
var geometryNudo = new THREE.SphereGeometry(0.38, 16, 16);

// Extremos del Hueso 1
var meshNudo1 = new THREE.Mesh(geometryNudo, materialPan);
//scene.add(meshNudo1);
meshNudo1.position.set(0, 3.5, 3.5);
meshNudo1.castShadow = true;

var meshNudo2 = new THREE.Mesh(geometryNudo, materialPan);
//scene.add(meshNudo2);
meshNudo2.position.set(1.3, 3.5, 5);
meshNudo2.castShadow = true;

// Extremos del Hueso 2
var meshNudo3 = new THREE.Mesh(geometryNudo, materialPan);
//scene.add(meshNudo3);
meshNudo3.position.set(0, 3.5, 6.5);
meshNudo3.castShadow = true;

var meshNudo4 = new THREE.Mesh(geometryNudo, materialPan);
//scene.add(meshNudo4);
meshNudo4.position.set(-1.3, 3.5, 5);
meshNudo4.castShadow = true;


const ESC15 = new THREE.Group();
ESC15.add(meshBolita,meshPan,meshNudo1,meshNudo2,meshNudo2,meshNudo3,meshNudo4);
ESC15.position.set(x,y,z);

return ESC15;
}
