import * as THREE from "../js/three.module.js";
export default function ESC26({x, y, z}) {


//  SOBRE DE COMIDA 

var geometrySobre = new THREE.BoxGeometry(1.8, 2.4, 0.2);
var materialSobre = new THREE.MeshLambertMaterial({
    color: 0xfc8020, 
    roughness: 0.7 
});
var meshSobre = new THREE.Mesh(geometrySobre, materialSobre);
//scene.add(meshSobre);
meshSobre.position.set(5, 8.5, 1); 
meshSobre.rotation.set(-Math.PI / 12, 0, 0); 
meshSobre.castShadow = true;
meshSobre.receiveShadow = true;


var geometrySello = new THREE.BoxGeometry(1.8, 0.15, 0.22);
var materialSello = new THREE.MeshLambertMaterial({
    color: 0x95A5A6, 
    roughness: 0.3
});
var meshSelloSup = new THREE.Mesh(geometrySello, materialSello);
//scene.add(meshSelloSup);
meshSelloSup.position.set(5, 9.7, 0.7); 
meshSelloSup.rotation.set(-Math.PI / 12, 0, 0);
meshSelloSup.castShadow = true;


var meshSelloInf = new THREE.Mesh(geometrySello, materialSello);
//scene.add(meshSelloInf);
meshSelloInf.position.set(5, 7.3, 1.35); 
meshSelloInf.rotation.set(-Math.PI / 12, 0, 0);
meshSelloInf.castShadow = true;


// GATITO 

var geometryCabezaGato = new THREE.SphereGeometry(0.3, 16, 16);
var materialLogoGato = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, 
    roughness: 0.8
});
var meshCabezaGato = new THREE.Mesh(geometryCabezaGato, materialLogoGato);
//scene.add(meshCabezaGato);
meshCabezaGato.position.set(5, 8.5, 1.15); 
meshCabezaGato.scale.set(1, 0.8, 0.2);    
meshCabezaGato.rotation.set(-Math.PI / 12, 0, 0);
meshCabezaGato.castShadow = true;

var geometryOrejaGato = new THREE.ConeGeometry(0.12, 0.25, 8);
var meshOrejaIzq = new THREE.Mesh(geometryOrejaGato, materialLogoGato);
//scene.add(meshOrejaIzq);
meshOrejaIzq.position.set(4.8, 8.75, 1.08); 
meshOrejaIzq.scale.set(1, 1, 0.2);
meshOrejaIzq.rotation.set(-Math.PI / 12, 0, Math.PI / 8); 
meshOrejaIzq.castShadow = true;


var meshOrejaDer = new THREE.Mesh(geometryOrejaGato, materialLogoGato);
//scene.add(meshOrejaDer);
meshOrejaDer.position.set(5.2, 8.75, 1.08);
meshOrejaDer.scale.set(1, 1, 0.2);
meshOrejaDer.rotation.set(-Math.PI / 12, 0, -Math.PI / 8); 
meshOrejaDer.castShadow = true;

const ESC26 = new THREE.Group();
ESC26.add(meshCabezaGato,meshOrejaDer,meshOrejaIzq,meshOrejaIzq,meshSelloInf,meshSelloSup,meshSobre);
ESC26.position.set(x,y,z);

return ESC26;
}
