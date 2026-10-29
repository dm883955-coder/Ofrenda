import * as THREE from "../js/three.module.js";
export default function ESC25({x, y, z}) {


    

//  DULCE 
    
var materialDulceRosa = new THREE.MeshLambertMaterial({
    color: 0xFF1493, 
    roughness: 0.3
});

// Centro del dulce
var geometryCentro = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 16);
var meshCentroRosa = new THREE.Mesh(geometryCentro, materialDulceRosa);
//scene.add(meshCentroRosa);
meshCentroRosa.position.set(-8, 8, -6); 
meshCentroRosa.rotation.set(0, 0, Math.PI / 2); 
meshCentroRosa.castShadow = true;
meshCentroRosa.receiveShadow = true;

// Extremo izquierdo 
var geometryEnvoltorio = new THREE.ConeGeometry(0.4, 0.7, 16);
var meshEnvIzq = new THREE.Mesh(geometryEnvoltorio, materialDulceRosa);
//scene.add(meshEnvIzq);
meshEnvIzq.position.set(-7.2, 8, -6);
meshEnvIzq.rotation.set(0, 0, Math.PI / 2); 
meshEnvIzq.castShadow = true;

// Extremo derecho 
var meshEnvDer = new THREE.Mesh(geometryEnvoltorio, materialDulceRosa);
//scene.add(meshEnvDer);
meshEnvDer.position.set(-8.8, 8, -6);
meshEnvDer.rotation.set(0, 0, -Math.PI / 2); 
meshEnvDer.castShadow = true;



const ESC25 = new THREE.Group();
ESC25.add(meshCentroRosa,meshEnvDer,meshEnvIzq);
ESC25.position.set(x,y,z);

return ESC25;
}
