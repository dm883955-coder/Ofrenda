import * as THREE from "../js/three.module.js";
export default function ESC04({x, y, z}) {

    
//caña

var geometry01= new THREE.CylinderGeometry(1.3,1.5,5,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0x529e43,
    side: THREE.DoubleSide,


});
var mesh07 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh07);
mesh07.position.set(-30,20.5,0);

var geometry01= new THREE.CylinderGeometry(1.5,1.5,6,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0x6A994E,
    side: THREE.DoubleSide,


});
var mesh08 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh08);
mesh08.position.set(-30,15,0);



var geometry01= new THREE.CylinderGeometry(1.5,1.3,5,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0xA7C957,
    side: THREE.DoubleSide,


});
var mesh09 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh09);
mesh09.position.set(-30,9.5,0);

//hoja 1
var geometry06 = new THREE.SphereGeometry(0.5,10,10);
var material05 = new THREE.MeshLambertMaterial({
    color:0x00aa66
});
 
var mesh10 = new THREE.Mesh(geometry06,material05);
mesh10.scale.set(0.5,1.5,0.5);
///¿scene.add(mesh10);
mesh10.position.set(-30,15,3);

//hoja 2
var geometry06 = new THREE.SphereGeometry(0.5,10,10);
var material05 = new THREE.MeshLambertMaterial({
    color:0x00aa66
});
 
var mesh11 = new THREE.Mesh(geometry06,material05);
mesh11.scale.set(0.5,1.5,0.5);
//scene.add(mesh11);
mesh11.position.set(-30,16.5,2.6);
//tallo
var geometry01= new THREE.CylinderGeometry(0.5,0.5,3,30,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0x386641,
    side: THREE.DoubleSide,


});
var mesh12 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh12);
mesh12.position.set(-30,15,2);
mesh12.rotation.set(Math.PI/4,0,0);


const ESC04 = new THREE.Group();
ESC04.add(mesh07,mesh08,mesh09,mesh10,mesh11,mesh12);
ESC04.position.set(x,y,z);

return ESC04;
}
