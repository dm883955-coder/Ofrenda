import * as THREE from "../js/three.module.js";
export default function ESC23({x, y, z}) {

// LATA DE ATÚN 


var materialMetalLata = new THREE.MeshLambertMaterial({
    color: 0x95A5A6, 
    roughness: 0.3
});
var materialEtiquetaLata = new THREE.MeshLambertMaterial({
    color: 0x154360, 
    roughness: 0.8
});
var materialPescadito = new THREE.MeshLambertMaterial({
    color: 0xBDC3C7, 
    roughness: 0.4
});

//  Cuerpo
var geometryLata = new THREE.CylinderGeometry(1.5, 1.5, 1.2, 32);
var meshLata = new THREE.Mesh(geometryLata, materialMetalLata);
//scene.add(meshLata);
meshLata.position.set(-12, 8, -2); 
meshLata.castShadow = true;
meshLata.receiveShadow = true;

// Etiqueta 
var geometryEtiqueta = new THREE.CylinderGeometry(1.52, 1.52, 0.9, 32);
var meshEtiqueta = new THREE.Mesh(geometryEtiqueta, materialEtiquetaLata);
//scene.add(meshEtiqueta);
meshEtiqueta.position.set(-12, 8, -2);
meshEtiqueta.castShadow = true;

//  tapa 
var geometryAnillo = new THREE.TorusGeometry(0.2, 0.05, 8, 16);
var meshAnillo = new THREE.Mesh(geometryAnillo, materialMetalLata);
//scene.add(meshAnillo);
meshAnillo.position.set(-12, 8.6, -2.5); 
meshAnillo.rotation.set(Math.PI / 2, 0, 0);
meshAnillo.castShadow = true;


// LA ETIQUETA 
//pescadito
var geometryCuerpoPez = new THREE.SphereGeometry(0.2, 16, 16);
var meshCuerpoPez = new THREE.Mesh(geometryCuerpoPez, materialPescadito);
//scene.add(meshCuerpoPez);

meshCuerpoPez.position.set(-12, 8, -0.45); 
meshCuerpoPez.scale.set(1.6, 0.7, 0.4); 
meshCuerpoPez.castShadow = true;

// Cola
var geometryColaPez = new THREE.ConeGeometry(0.12, 0.28, 4);
var meshColaPez = new THREE.Mesh(geometryColaPez, materialPescadito);
//scene.add(meshColaPez);

meshColaPez.position.set(-12.4, 8, -0.45);
meshColaPez.rotation.set(0, 0, -Math.PI / 2); 
meshColaPez.castShadow = true;


const ESC23 = new THREE.Group();
ESC23.add(meshAnillo,meshColaPez,meshCuerpoPez,meshEtiqueta,meshLata);
ESC23.position.set(x,y,z);

return ESC23;
}
