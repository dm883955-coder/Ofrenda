import * as THREE from "../js/three.module.js";
export default function ESC03({x, y, z}) {

    
//VASO
//agua
var geometry01= new THREE.CylinderGeometry(1.5,1,3,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0x3E6D9C,
    side: THREE.DoubleSide,


});
var meshAgua = new THREE.Mesh(geometry01, material01);
//scene.add(meshAgua);
meshAgua.position.set(20,4,0);

// vidrio
var geometry01= new THREE.CylinderGeometry(2,1.3,5,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,


});
var meshVidrio = new THREE.Mesh(geometry01, material01);
//scene.add(meshVidrio);
meshVidrio.position.set(20,5,0);



const ESC03 = new THREE.Group();
ESC03.add(meshVidrio,meshAgua);
ESC03.position.set(x,y,z);

return ESC03;
}
