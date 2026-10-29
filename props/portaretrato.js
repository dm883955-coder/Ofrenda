import * as THREE from "../js/three.module.js";
export default function ESC06({x, y, z}) {

    
// Marco exterior 
var geometryMarco = new THREE.BoxGeometry(5, 6, 0.4);
var materialMarco = new THREE.MeshLambertMaterial({
    color: 0x8B5A2B, 
    roughness: 0.7
});
var meshMarco = new THREE.Mesh(geometryMarco, materialMarco);
meshMarco.position.set(0, 4, -20); 
meshMarco.castShadow = true;
//scene.add(meshMarco);

// Imagen 
var geometryFoto = new THREE.BoxGeometry(4.2, 5.2, 0.1);
var textureFoto = new THREE.TextureLoader().load('./assets/abuelita.jpeg');

var materialFoto = new THREE.MeshBasicMaterial({
    map: textureFoto
});

var meshFoto = new THREE.Mesh(geometryFoto, materialFoto);
meshFoto.position.set(0, 4, -19.75); 
//scene.add(meshFoto);

//  Soporte trasero
var geometrySoporte = new THREE.BoxGeometry(0.3, 4, 2.5);
var materialSoporte = new THREE.MeshLambertMaterial({
    color: 0x5C4033,
    roughness: 0.8
});
var meshSoporte = new THREE.Mesh(geometrySoporte, materialSoporte);
meshSoporte.position.set(0, 2.5, -21.5);
meshSoporte.rotation.set(95,-Math.PI / 2, 0); 
//scene.add(meshSoporte);




const ESC06 = new THREE.Group();
ESC06.add(meshFoto,meshMarco,meshSoporte,textureFoto);
ESC06.position.set(x,y,z);

return ESC06;
}
