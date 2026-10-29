
import * as THREE from "../js/three.module.js";
export default function ESC31({x, y, z}) {

    
//  CALAVERA 

// Materiales
var matCalaveraHueso = new THREE.MeshLambertMaterial({
    color: 0xFDFAF5,
    roughness: 0.9   
});

var matDecoradoNegro = new THREE.MeshLambertMaterial({
    color: 0x111111,
    roughness: 1.0
});

var matDecoradoAzul = new THREE.MeshLambertMaterial({ color: 0x00B0FF, roughness: 0.8 });
var matDecoradoRosa = new THREE.MeshLambertMaterial({ color: 0xE91E63, roughness: 0.8 });


//  cráneo
var geoCranioRedondo = new THREE.SphereGeometry(1.6, 32, 32);
var meshCranio = new THREE.Mesh(geoCranioRedondo, matCalaveraHueso);
//scene.add(meshCranio);
meshCranio.position.set(0, 4, 0); 
meshCranio.scale.set(1.0, 1.1, 1.1);
meshCranio.castShadow = true;
meshCranio.receiveShadow = true;




//  Barbilla
var geoBarbilla = new THREE.SphereGeometry(0.7, 16, 16);
var meshBarbilla = new THREE.Mesh(geoBarbilla, matCalaveraHueso);
//scene.add(meshBarbilla);
meshBarbilla.position.set(0, 2.6, 0.5); 
meshBarbilla.scale.set(1.2, 0.6, 1.0); 
meshBarbilla.castShadow = true;


//  Pómulos
var geoPomulo = new THREE.SphereGeometry(0.45, 16, 16);
var meshPomuloIzq = new THREE.Mesh(geoPomulo, matCalaveraHueso);
//scene.add(meshPomuloIzq);
meshPomuloIzq.position.set(-1.0, 3.4, 0.65);

var meshPomuloDer = new THREE.Mesh(geoPomulo, matCalaveraHueso);
//scene.add(meshPomuloDer);
meshPomuloDer.position.set(1.0, 3.4, 0.65);


// ojos 
var geoOjo = new THREE.SphereGeometry(0.35, 16, 16);
var meshOjoIzq = new THREE.Mesh(geoOjo, matDecoradoNegro);
//scene.add(meshOjoIzq);
meshOjoIzq.position.set(-0.6, 3.8, 1.6);
meshOjoIzq.scale.set(1, 1, 0.3); 

var meshOjoDer = new THREE.Mesh(geoOjo, matDecoradoNegro);
//scene.add(meshOjoDer);
meshOjoDer.position.set(0.6, 3.8, 1.6);
meshOjoDer.scale.set(1, 1, 0.3);


// Nariz 
var geoNariz = new THREE.ConeGeometry(0.18, 0.35, 32);
var meshNariz = new THREE.Mesh(geoNariz, matDecoradoNegro);
//scene.add(meshNariz);
meshNariz.position.set(0, 3.3, 1.45);
meshNariz.scale.set(1, 1.6, 0.4); 
meshNariz.rotation.set(0, Math.PI, 0);


//  dientes

var geoDiente = new THREE.BoxGeometry(0.12, 0.3, 0.1);
var materialDiente = new THREE.MeshLambertMaterial({ color: 0xeac761, roughness: 0.5 }); 

var dienteCenIzq = new THREE.Mesh(geoDiente, materialDiente);
//scene.add(dienteCenIzq);
dienteCenIzq.position.set(-0.1, 2.9, 1.32);

var dienteCenDer = new THREE.Mesh(geoDiente, materialDiente);
//scene.add(dienteCenDer);
dienteCenDer.position.set(0.1, 2.9, 1.32);

var dienteExtIzq = new THREE.Mesh(geoDiente, materialDiente);
//scene.add(dienteExtIzq);
dienteExtIzq.position.set(-0.35, 2.9, 1.25);
dienteExtIzq.rotation.set(0, -Math.PI / 8, 0); 

var dienteExtDer = new THREE.Mesh(geoDiente, materialDiente);
//scene.add(dienteExtDer);
dienteExtDer.position.set(0.35, 2.9, 1.25);
dienteExtDer.rotation.set(0, Math.PI / 8, 0);


//  Decoraciones 
var geoFresaAdorno = new THREE.SphereGeometry(0.2, 16, 16);

// Flor rosa
var adornoFrente = new THREE.Mesh(geoFresaAdorno, matDecoradoRosa);
//scene.add(adornoFrente);
adornoFrente.position.set(0, 4.8, 1.4);

// Detalles azules
var adornoIzq = new THREE.Mesh(geoFresaAdorno, matDecoradoAzul);
//scene.add(adornoIzq);
adornoIzq.position.set(-1.1, 4.6, 0.9);

var adornoDer = new THREE.Mesh(geoFresaAdorno, matDecoradoAzul);
//scene.add(adornoDer);
adornoDer.position.set(1.1, 4.6, 0.9);

const ESC31 = new THREE.Group();
ESC31.add(meshBarbilla,matCalaveraHueso,meshCranio,meshNariz,
    meshOjoDer,meshOjoIzq,adornoDer,adornoFrente,adornoIzq,meshPomuloIzq,
    meshPomuloDer,dienteCenDer,dienteExtDer,dienteCenIzq,dienteExtIzq);
ESC31.position.set(x,y,z);

return ESC31;
}
