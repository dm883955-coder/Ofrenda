import * as THREE from "../js/three.module.js";
export default function ESC07({x, y, z}) {

    
//  BOTELLA DE LICOR 

// Cuerpo principal de la botella 
var geometryCuerpoBotella = new THREE.CylinderGeometry(1.5, 1.8, 5, 30, 30);
var materialBotella = new THREE.MeshLambertMaterial({
    color: 0x2C5E3B, 
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
});
var meshCuerpoBotella = new THREE.Mesh(geometryCuerpoBotella, materialBotella);
//scene.add(meshCuerpoBotella);
meshCuerpoBotella.position.set(-10, 4.5, 0);

//  Hombreras 
var geometryHombrera = new THREE.CylinderGeometry(0.8, 1.5, 1.5, 30, 30);
var meshHombrera = new THREE.Mesh(geometryHombrera, materialBotella);
//scene.add(meshHombrera);
meshHombrera.position.set(-10, 7.75, 0);

// Cuello de la botella
var geometryCuelloBotella = new THREE.CylinderGeometry(0.7, 0.8, 2, 30, 30);
var meshCuelloBotella = new THREE.Mesh(geometryCuelloBotella, materialBotella);
//scene.add(meshCuelloBotella);
meshCuelloBotella.position.set(-10, 9.25, 0);

// corcho de la botella
var geometryTapa = new THREE.CylinderGeometry(0.8, 0.7, 0.6, 30, 30);
var materialTapa = new THREE.MeshLambertMaterial({
    color: 0x8C6239, 
    side: THREE.DoubleSide
});
var meshTapa = new THREE.Mesh(geometryTapa, materialTapa);
//scene.add(meshTapa);
meshTapa.position.set(-10, 10.5, 0);




const ESC07 = new THREE.Group();
ESC07.add(meshCuelloBotella,meshCuerpoBotella,meshHombrera,meshTapa);
ESC07.position.set(x,y,z);

return ESC07;
}