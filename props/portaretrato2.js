import * as THREE from "../js/three.module.js";
export default function ESC30({x, y, z}) {

    
// Marco exterior 
var geometryMarco2 = new THREE.BoxGeometry(5, 6, 0.4);
var materialMarco2 = new THREE.MeshLambertMaterial({
    color: 0x8B5A2B, 
    roughness: 0.7
});
var meshMarco2 = new THREE.Mesh(geometryMarco2, materialMarco2);
meshMarco2.position.set(0, 4, -20); 
meshMarco2.castShadow = true;
//scene.add(meshMarco2);

// Imagen 
var geometryFoto2 = new THREE.BoxGeometry(4.2, 5.2, 0.1);
var textureFoto2 = new THREE.TextureLoader().load('./assets/Hara.jpg');

var materialFoto2 = new THREE.MeshBasicMaterial({
    map: textureFoto2
});

var meshFoto2 = new THREE.Mesh(geometryFoto2, materialFoto2);
meshFoto2.position.set(0, 4, -19.75); 
//scene.add(meshFoto2);

//  Soporte trasero
var geometrySoporte2 = new THREE.BoxGeometry(0.3, 4, 2.5);
var materialSoporte2 = new THREE.MeshLambertMaterial({
    color: 0x5C4033,
    roughness: 0.8
});
var meshSoporte2 = new THREE.Mesh(geometrySoporte2, materialSoporte2);
meshSoporte2.position.set(0, 2.5, -21.5);
meshSoporte2.rotation.set(95,-Math.PI / 2, 0); 
//scene.add(meshSoporte2);




const ESC30 = new THREE.Group();
ESC30.add(meshFoto2,meshMarco2,meshSoporte2,textureFoto2);
ESC30.position.set(x,y,z);

return ESC30;
}
