import * as THREE from "../js/three.module.js";
export default function ESC14({x, y, z}) {

    
// Marco exterior 
var geometryMarco1 = new THREE.BoxGeometry(5, 6, 0.4);
var materialMarco1 = new THREE.MeshLambertMaterial({
    color: 0x8B5A2B, 
    roughness: 0.7
});
var meshMarco1 = new THREE.Mesh(geometryMarco1, materialMarco1);
meshMarco1.position.set(0, 4, -20); 
meshMarco1.castShadow = true;
//scene.add(meshMarco1);

// Imagen 
var geometryFoto1 = new THREE.BoxGeometry(4.2, 5.2, 0.1);
var textureFoto1 = new THREE.TextureLoader().load('./assets/gato.jpeg');

var materialFoto1 = new THREE.MeshLambertMaterial({
    map: textureFoto1
});

var meshFoto1 = new THREE.Mesh(geometryFoto1, materialFoto1);
meshFoto1.position.set(0, 4, -19.75); 
//scene.add(meshFoto1);

//  Soporte trasero
var geometrySoporte1 = new THREE.BoxGeometry(0.3, 4, 2.5);
var materialSoporte1 = new THREE.MeshLambertMaterial({
    color: 0x5C4033,
    roughness: 0.8
});
var meshSoporte1 = new THREE.Mesh(geometrySoporte1, materialSoporte1);
meshSoporte1.position.set(0, 2.5, -21.5);
meshSoporte1.rotation.set(95,-Math.PI / 2, 0); 
//scene.add(meshSoporte1);




const ESC14 = new THREE.Group();
ESC14.add(meshFoto1,meshMarco1,meshSoporte1,textureFoto1);
ESC14.position.set(x,y,z);

return ESC14;
}
