import * as THREE from "../js/three.module.js";
export default function ESC10({x, y, z}) {

    
// FLORERO 

// Cuerpo principal del florero
var geometryFlorero = new THREE.CylinderGeometry(1.2, 2, 4, 30);
var materialFlorero = new THREE.MeshLambertMaterial({
    color: 0x9d332f,
    side: THREE.DoubleSide
});
var meshFlorero = new THREE.Mesh(geometryFlorero, materialFlorero);
//scene.add(meshFlorero);
meshFlorero.position.set(-5, 2, -15);

// Cuello del florero
var geometryCuelloFlorero = new THREE.CylinderGeometry(0.8, 1.2, 1, 30);
var meshCuelloFlorero = new THREE.Mesh(geometryCuelloFlorero, materialFlorero);
//scene.add(meshCuelloFlorero);
meshCuelloFlorero.position.set(-5, 4.5, -15);


var matFlor = new THREE.MeshLambertMaterial({
    color: 0xfc02841,
    metalness: 0.5,
    roughness: 0.3
});

var geometryTallo = new THREE.CylinderGeometry(0.08, 0.08, 3.5, 10);
var materialVerde = new THREE.MeshLambertMaterial({
    color: 0x27AE60,
    side: THREE.DoubleSide
});

// FLOR 1 
var meshTallo1 = new THREE.Mesh(geometryTallo, materialVerde);
//scene.add(meshTallo1);
meshTallo1.position.set(-5.3, 5, -15);
meshTallo1.rotation.set(0, 0, Math.PI / 12); 

var florGeo1 = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var meshFlor1 = new THREE.Mesh(florGeo1, matFlor);
//scene.add(meshFlor1);
meshFlor1.position.set(-5.5, 6.5, -15);
meshFlor1.scale.set(0.08, 0.08, 0.08);
meshFlor1.rotation.set(Math.PI / 2, 0, 0);
meshFlor1.castShadow = true;

// -FLOR 2
var meshTallo2 = new THREE.Mesh(geometryTallo, materialVerde);
//scene.add(meshTallo2);
meshTallo2.position.set(-4.7, 5, -15);
meshTallo2.rotation.set(0, 0, -Math.PI / 12); 

var florGeo2 = new THREE.TorusKnotGeometry(8,3,150,170,20,11);
var meshFlor2 = new THREE.Mesh(florGeo2, matFlor);
//scene.add(meshFlor2);
meshFlor2.position.set(-4.5, 7.0, -15);
meshFlor2.scale.set(0.08, 0.08, 0.08);
meshFlor2.rotation.set(Math.PI / 2, 0, 0);
meshFlor2.castShadow = true;




const ESC10 = new THREE.Group();
ESC10.add(meshCuelloFlorero,meshFlor1,meshFlor2,meshFlorero,meshTallo1,meshFlor2,meshTallo2);
ESC10.position.set(x,y,z);

return ESC10;
}
