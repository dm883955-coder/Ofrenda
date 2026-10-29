import * as THREE from "../js/three.module.js";
export default function ESC29({x, y, z}) {

    
//  LA CATRINA 

// Materiales
var matHuesoCatrina = new THREE.MeshLambertMaterial({ color: 0xFDFAF5, roughness: 0.9 });
var matVes = new THREE.MeshLambertMaterial({ color: 0x000000, roughness: 0.5 }); 
var matSombreroCatrina = new THREE.MeshLambertMaterial({ color: 0x000000, roughness: 0.9 }); 
var matOjosCatrina = new THREE.MeshLambertMaterial({ color: 0x000000, roughness: 1.0 }); // Negro mate
var matMan = new THREE.MeshLambertMaterial({ color: 0x111111, roughness: 1.0 }); 


//  Torso 
var geoTorsoCatrina = new THREE.CylinderGeometry(.3, .7, 2.5, 32);
var meshTorsoCatrina = new THREE.Mesh(geoTorsoCatrina, matVes);
//scene.add(meshTorsoCatrina);
meshTorsoCatrina.position.set(14, 6.1, -5);
meshTorsoCatrina.castShadow = true;

// vestido1
var geoVes = new THREE.CylinderGeometry(.7, 3, 2.5, 32);
var meshVes = new THREE.Mesh(geoVes, matVes);
//scene.add(meshVes);
meshVes.position.set(14, 5, -5);
meshVes.castShadow = true;

// vestido1
var geoVes1 = new THREE.CylinderGeometry(.7, 3, 2.5, 32);
var meshVes1 = new THREE.Mesh(geoVes1, matVes);
//scene.add(meshVes1);
meshVes1.position.set(14, 4, -5);
meshVes1.castShadow = true;


// Cuello y Cabeza
var geoCuelloCatrina = new THREE.CylinderGeometry(0.15, 0.17, 0.8, 16);
var meshCuelloCatrina = new THREE.Mesh(geoCuelloCatrina, matHuesoCatrina);
//scene.add(meshCuelloCatrina);
meshCuelloCatrina.position.set(14, 7.6, -5);
meshCuelloCatrina.castShadow = true;

var geoCabezaCatrina = new THREE.SphereGeometry(1, 42, 42);
var meshCabezaCatrina = new THREE.Mesh(geoCabezaCatrina, matHuesoCatrina);
//scene.add(meshCabezaCatrina);
meshCabezaCatrina.position.set(14, 8.5, -5);
meshCabezaCatrina.castShadow = true;

//  ojos 
var geoOjoCatrina = new THREE.SphereGeometry(0.18, 16, 16);
var ojoIzqCatrina = new THREE.Mesh(geoOjoCatrina, matOjosCatrina);
//scene.add(ojoIzqCatrina);
ojoIzqCatrina.position.set(13.7, 8.6, -4.20);

var ojoDerCatrina = new THREE.Mesh(geoOjoCatrina, matOjosCatrina);
//scene.add(ojoDerCatrina);
ojoDerCatrina.position.set(14.3, 8.6, -4.20); 


//  Sombrero Elegante

var geoAlaSombrero = new THREE.CylinderGeometry(3, 3, 0.05, 32);
var meshAlaSombrero = new THREE.Mesh(geoAlaSombrero, matSombreroCatrina);
//scene.add(meshAlaSombrero);
meshAlaSombrero.position.set(14, 9.2, -5);
meshAlaSombrero.rotation.set(-Math.PI / 12, 0, 0); 
meshAlaSombrero.castShadow = true;


var geoBordeSombrero = new THREE.TorusGeometry(3, 0.08, 16, 32);
var meshBordeSombrero = new THREE.Mesh(geoBordeSombrero, matSombreroCatrina);
//scene.add(meshBordeSombrero);
meshBordeSombrero.position.set(14, 9.2, -5);
meshBordeSombrero.rotation.set(Math.PI / 2 - Math.PI / 12, 0, 0); 
meshBordeSombrero.castShadow = true;

// Copa del sombrero
var geoCopaSombrero = new THREE.CylinderGeometry(0.7, 0.9, 1.2, 32);
var meshCopaSombrero = new THREE.Mesh(geoCopaSombrero, matSombreroCatrina);
//scene.add(meshCopaSombrero);
meshCopaSombrero.position.set(14, 9.7, -5.1); 
meshCopaSombrero.rotation.set(-Math.PI / 12, 0, 0);
meshCopaSombrero.castShadow = true;

// brazo
var geoMan = new THREE.CylinderGeometry(0.2, 0.1, 2, 32);
var meshMan = new THREE.Mesh(geoMan, matMan);
//scene.add(meshMan);
meshMan.position.set(13.3, 6.5, -4.5); 
meshMan.rotation.set(-Math.PI / 12, 0, 0);
meshMan.castShadow = true;
meshMan.rotation.set(-Math.PI/4, 0, Math.PI/2 + Math.PI/3); 

// brazo
var geoMan1 = new THREE.CylinderGeometry(0.2, 0.1, 2, 32);
var meshMan1 = new THREE.Mesh(geoMan1, matMan);
//scene.add(meshMan1);
meshMan1.position.set(14.6, 6.5, -4.5); 
meshMan1.rotation.set(-Math.PI / 12, 0, 0);
meshMan1.castShadow = true;
meshMan1.rotation.set(-Math.PI/4, 0, -Math.PI/2 + -Math.PI/3);

//  decoracion
var geoDeco = new THREE.SphereGeometry(0.18, 16, 16);
var matDeco = new THREE.MeshLambertMaterial({ color: 0xFF1493, roughness: 1.0 }); 
var mehsDeco = new THREE.Mesh(geoDeco, matDeco);
//scene.add(mehsDeco);
mehsDeco.position.set(13.2, 9.7, -4.27);

var geoDeco1 = new THREE.SphereGeometry(0.18, 16, 16);
var matDeco1 = new THREE.MeshLambertMaterial({ color: 0x3fd97f, roughness: 1.0 }); 
var mehsDeco1 = new THREE.Mesh(geoDeco1, matDeco1);
//scene.add(mehsDeco1);
mehsDeco1.position.set(13.9, 9.7, -4.27);

var geoDeco2 = new THREE.SphereGeometry(0.18, 16, 16);
var matDeco2 = new THREE.MeshLambertMaterial({ color: 0xffb914, roughness: 1.0 }); 
var mehsDeco2 = new THREE.Mesh(geoDeco2, matDeco2);
//scene.add(mehsDeco2);
mehsDeco2.position.set(14.5, 9.7, -4.37);

// NARIZ 


var geoNarizInvertida = new THREE.ConeGeometry(0.1, 0.22, 3);
var meshNarizInvertida = new THREE.Mesh(geoNarizInvertida, matOjosCatrina); 
//scene.add(meshNarizInvertida);

meshNarizInvertida.position.set(14, 8.3, -4);
meshNarizInvertida.rotation.set(0, Math.PI, 0);

const ESC29 = new THREE.Group();
ESC29.add(meshAlaSombrero,meshBordeSombrero,meshCopaSombrero,meshCuelloCatrina,
    meshTorsoCatrina,meshVes,meshVes1,meshMan,meshMan1,mehsDeco,mehsDeco1,mehsDeco2);
ESC29.position.set(x,y,z);

return ESC29;
}
