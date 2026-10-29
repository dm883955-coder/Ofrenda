import * as THREE from "../js/three.module.js";
export default function ESC09({x, y, z}) {

    
// COPAL 

// Base inferior 
var geometryBaseCopal = new THREE.CylinderGeometry(1.2, 1.8, 1.5, 30);
var materialCopa = new THREE.MeshLambertMaterial({
    color: 0x4A2511, 
    side: THREE.DoubleSide
});
var meshBaseCopal = new THREE.Mesh(geometryBaseCopal, materialCopa);
//scene.add(meshBaseCopal);
meshBaseCopal.position.set(-15, 1.5, -10);


// Copita 
var geometryCopita = new THREE.CylinderGeometry(2, 0.8, 2, 30);
var meshCopita = new THREE.Mesh(geometryCopita, materialCopa);
//scene.add(meshCopita);
meshCopita.position.set(-15, 3, -10);

// Incienso 
var geometryIncienso = new THREE.SphereGeometry(1.1, 16, 16);
var materialIncienso = new THREE.MeshLambertMaterial({
    color: 0xD2B48C, 
    side: THREE.DoubleSide
});
var meshIncienso = new THREE.Mesh(geometryIncienso, materialIncienso);
//scene.add(meshIncienso);
meshIncienso.position.set(-15, 3.8, -10);

// Humo 
var geometryHumo = new THREE.SphereGeometry(0.8, 16, 16);
var materialHumo = new THREE.MeshLambertMaterial({
    color: 0xFFFAFA,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
});

var meshHumo1 = new THREE.Mesh(geometryHumo, materialHumo);
//scene.add(meshHumo1);
meshHumo1.position.set(-15, 5.2, -10);

var meshHumo2 = new THREE.Mesh(geometryHumo, materialHumo);
//scene.add(meshHumo2);
meshHumo2.position.set(-15.3, 6.4, -10);
meshHumo2.scale.set(1.2, 1.2, 1.2);


const ESC09 = new THREE.Group();
ESC09.add(meshBaseCopal,meshCopita,materialHumo,meshIncienso,meshHumo1,meshHumo2);
ESC09.position.set(x,y,z);

return ESC09;
}
