import * as THREE from "../js/three.module.js";
export default function ESC35({x, y, z}) {

    
//  ARCO 

var grupoArco = new THREE.Group();
//scene.add(grupoArco);
grupoArco.position.set(0, 0, -25); 

var geoEstructura = new THREE.TorusGeometry(18, 1.5, 16, 32, Math.PI);
var matFollaje = new THREE.MeshLambertMaterial({ color: 
    0xfc370c, 
    roughness: 0.9 });
var meshEstructura = new THREE.Mesh(geoEstructura, matFollaje);
meshEstructura.castShadow = true;
//grupoArco.add(meshEstructura); 

//  Flor Base
var florGeo = new THREE.TorusKnotGeometry(8, 3, 150, 16, 20, 11);
var matFlor = new THREE.MeshLambertMaterial({ color: 0xfc370c, roughness: 0.3 });
var florBase = new THREE.Mesh(florGeo, matFlor);
florBase.scale.set(0.25, 0.25, 0.25);
florBase.castShadow = true;


var f1 = florBase.clone();
f1.position.set(-18, 0, 0);
f1.rotation.set(0.1, 0.4, 0);
//grupoArco.add(f1);

var f2 = florBase.clone();
f2.position.set(-17.6, 3.5, 0);
f2.rotation.set(0.5, 0.1, 0.2);
//grupoArco.add(f2);

var f3 = florBase.clone();
f3.position.set(-16.6, 6.9, 0);
f3.rotation.set(0.2, 0.8, 0);
//grupoArco.add(f3);

var f4 = florBase.clone();
f4.position.set(-15, 10, 0);
f4.rotation.set(0.9, 0.2, 0.5);
//grupoArco.add(f4);

var f5 = florBase.clone();
f5.position.set(-12.7, 12.7, 0);
f5.rotation.set(0.3, 0.6, 0.1);
//grupoArco.add(f5);

var f6 = florBase.clone();
f6.position.set(-10, 15, 0);
f6.rotation.set(0.7, 0.3, 0.8);
//grupoArco.add(f6);

var f7 = florBase.clone();
f7.position.set(-6.9, 16.6, 0);
f7.rotation.set(0.1, 0.9, 0.4);
//grupoArco.add(f7);

var f8 = florBase.clone();
f8.position.set(-3.5, 17.6, 0);
f8.rotation.set(0.6, 0.4, 0.2);
//grupoArco.add(f8);


var f9 = florBase.clone();
f9.position.set(0, 18, 0);
f9.rotation.set(0, 1, 0.5);
//grupoArco.add(f9);


var f10 = florBase.clone();
f10.position.set(3.5, 17.6, 0);
f10.rotation.set(0.4, 0.2, 0.7);
//grupoArco.add(f10);

var f11 = florBase.clone();
f11.position.set(6.9, 16.6, 0);
f11.rotation.set(0.8, 0.5, 0.1);
//grupoArco.add(f11);

var f12 = florBase.clone();
f12.position.set(10, 15, 0);
f12.rotation.set(0.2, 0.7, 0.6);
//grupoArco.add(f12);

var f13 = florBase.clone();
f13.position.set(12.7, 12.7, 0);
f13.rotation.set(0.5, 0.1, 0.9);
//grupoArco.add(f13);

var f14 = florBase.clone();
f14.position.set(15, 10, 0);
f14.rotation.set(0.3, 0.8, 0.4);
//grupoArco.add(f14);

var f15 = florBase.clone();
f15.position.set(16.6, 6.9, 0);
f15.rotation.set(0.9, 0.4, 0.2);
//grupoArco.add(f15);

var f16 = florBase.clone();
f16.position.set(17.6, 3.5, 0);
f16.rotation.set(0.1, 0.6, 0.8);
//grupoArco.add(f16);

var f17 = florBase.clone();
f17.position.set(18, 0, 0);
f17.rotation.set(0.6, 0.2, 0.5);
//grupoArco.add(f17);

const ESC35 = new THREE.Group();
ESC35.add(grupoArco,meshEstructura,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17);
ESC35.position.set(x,y,z);

return ESC35;
}
