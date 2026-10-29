import * as THREE from "../js/three.module.js";
export default function ESC11({x, y, z}) {

    
//JARRON
var geometryJarron= new THREE.CylinderGeometry(1.5,1,2.5,30,30);
var materialJarron = new THREE.MeshLambertMaterial({
    color:0xF7B7C4,
    side: THREE.DoubleSide,


});
var meshJarron = new THREE.Mesh(geometryJarron, materialJarron);
//scene.add(meshJarron);
meshJarron.position.set(40,15,0);


var geometryBase= new THREE.IcosahedronGeometry(4,2,40,90,4);
var materialBase = new THREE.MeshLambertMaterial({
    color:0xFAD2E1,
    side: THREE.DoubleSide,


});
var meshBase = new THREE.Mesh(geometryBase, materialBase);
//scene.add(meshBase);
meshBase.position.set(40,10,0);



//AGARRADERA JARRON
var geometryAga= new THREE.TorusGeometry(1.2,.5,20,40);
var materialAga = new THREE.MeshLambertMaterial({
    color:0xDFE7FD,
    side: THREE.DoubleSide,


});
var meshAga = new THREE.Mesh(geometryAga, materialAga);
//scene.add(meshAga);
meshAga.position.set(44,10,0);



const ESC11 = new THREE.Group();
ESC11.add(meshAga,meshBase,meshJarron);
ESC11.position.set(x,y,z);

return ESC11;
}
