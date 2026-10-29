import * as THREE from "../js/three.module.js";
export default function ESC24({x, y, z}) {

 // REFRESCO 

var materialLiquido = new THREE.MeshLambertMaterial({
    color: 0x110500, 
    roughness: 0.1  
});


var materialRojoCola = new THREE.MeshLambertMaterial({
    color: 0xCC0000, 
    roughness: 0.7
});

//  Base
var geometryBaseRefresco = new THREE.CylinderGeometry(0.6, 0.6, 1.2, 32);
var meshBaseRefresco = new THREE.Mesh(geometryBaseRefresco, materialLiquido);
//scene.add(meshBaseRefresco); 
meshBaseRefresco.position.set(-6, 8.6, 1);
meshBaseRefresco.castShadow = true;
meshBaseRefresco.receiveShadow = true;

// Etiqueta 
var geometryEtiquetaRefresco = new THREE.CylinderGeometry(0.62, 0.62, 0.8, 32);
var textureCoca = new THREE.TextureLoader().load('./assets/coca.jpg');
var materialEtiquetaCoca = new THREE.MeshLambertMaterial({
    map: textureCoca,
    color: 0xffffff
});

var meshEtiquetaRefresco = new THREE.Mesh(geometryEtiquetaRefresco, materialEtiquetaCoca);
//scene.add(meshEtiquetaRefresco); 
meshEtiquetaRefresco.position.set(-6, 9.6, 1); 
meshEtiquetaRefresco.castShadow = true;

// Cuello de la botella 
var geometryCuelloRefresco = new THREE.CylinderGeometry(0.2, 0.6, 1.2, 32);
var meshCuelloRefresco = new THREE.Mesh(geometryCuelloRefresco, materialLiquido);
//scene.add(meshCuelloRefresco); 
meshCuelloRefresco.position.set(-6, 10.6, 1); 
meshCuelloRefresco.castShadow = true;

//  Tapa 
var geometryTapaRefresco = new THREE.CylinderGeometry(0.22, 0.22, 0.15, 16);
var meshTapaRefresco = new THREE.Mesh(geometryTapaRefresco, materialRojoCola); // Ahora sí existe
//scene.add(meshTapaRefresco); 
meshTapaRefresco.position.set(-6, 11.27, 1); 
meshTapaRefresco.castShadow = true;

const ESC24 = new THREE.Group();
ESC24.add(meshBaseRefresco,meshCuelloRefresco,meshEtiquetaRefresco,meshTapaRefresco,textureCoca);
ESC24.position.set(x,y,z);

return ESC24;
}
