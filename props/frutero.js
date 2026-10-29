import * as THREE from "../js/three.module.js";
export default function ESC13({x, y, z}) {

    
// FRUTERO 

var geometryFrutero = new THREE.CylinderGeometry(4.5, 2, 2, 30);
var materialFrutero = new THREE.MeshLambertMaterial({
    color: 0xC19A6B, 
    side: THREE.DoubleSide
});
var meshFrutero = new THREE.Mesh(geometryFrutero, materialFrutero);
//scene.add(meshFrutero);
meshFrutero.position.set(15, 1, -15);




const ESC13 = new THREE.Group();
ESC13.add(meshFrutero);
ESC13.position.set(x,y,z);

return ESC13;
}
