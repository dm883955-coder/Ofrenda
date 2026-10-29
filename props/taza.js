import * as THREE from "../js/three.module.js";
export default function ESC02({x, y, z}) {

    
// TAZA DE CAFÉ 

//  Platito base
var geometryPlato = new THREE.CylinderGeometry(3.5, 2.5, 0.3, 30);
var materialCeramica = new THREE.MeshLambertMaterial({
    color: 0xE7DFF7,
    roughness: 0.4
});
var meshPlato = new THREE.Mesh(geometryPlato, materialCeramica);
meshPlato.position.set(-20, 1.5, 0); 
meshPlato.castShadow = true;
//scene.add(meshPlato);


// Cuerpo de la taza
var geometryTaza = new THREE.CylinderGeometry(2, 1.2, 3, 30, 30);
var meshTaza = new THREE.Mesh(geometryTaza, materialCeramica);
meshTaza.position.set(-20, 3.1, 0);
meshTaza.castShadow = true;
//scene.add(meshTaza);

// Líquido (Café) dentro de la taza
var geometryCafe = new THREE.CylinderGeometry(2, 1, 3, 30, 30);
var materialCafe = new THREE.MeshLambertMaterial({
    color: 0x6F4E37,
    roughness: 0.4
});
var meshCafe = new THREE.Mesh(geometryCafe, materialCafe);
meshCafe.position.set(-20, 3.1, 0);
meshCafe.castShadow = true;
//scene.add(meshCafe);

//  Agarradera / Asa de la taza
var geometryAsa = new THREE.TorusGeometry(0.8, 0.25, 16, 30);
var meshAsa = new THREE.Mesh(geometryAsa, materialCeramica);
meshAsa.position.set(-17.8, 3.2, 0); 
//scene.add(meshAsa);



const ESC02 = new THREE.Group();
ESC02.add(meshPlato,meshTaza,meshCafe,meshAsa);
ESC02.position.set(x,y,z);

return ESC02;
}
