import * as THREE from "../js/three.module.js";
export default function ESC01({x, y, z}) {


    
// VELA
var geometry01 = new THREE.CylinderGeometry(2, 2, 8, 20, 20);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xF1E8D9,
    side: THREE.DoubleSide,


});
var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(0, 4.1, 0);

// MECHA
var geometry02 = new THREE.CylinderGeometry(0.1, 0.1, 2, 30, 30);
var material02 = new THREE.MeshLambertMaterial({
    color: 0x05060E,
    side: THREE.DoubleSide,


});
var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(0, 8, 0);

// CIRCULO SUPERIOR
var geometry04 = new THREE.CircleGeometry(2, 20);
var material04 = new THREE.MeshLambertMaterial({
    color: 0xD8C3A5,
    side: THREE.DoubleSide,


});
var mesh04 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh04);
mesh04.position.set(0, 8.11, 0);
mesh04.rotation.set(Math.PI / 2, 0, 0);

//flamaa
var geometry05 = new THREE.SphereGeometry(1, 20, 20, 0, Math.PI*2,0, Math.PI/2);
var material05 = new THREE.MeshLambertMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,


});
var mesh05 = new THREE.Mesh(geometry05, material05);
//scene.add(mesh05);
mesh05.position.set(0, 9.25, 0);
mesh05.rotation.set(Math.PI, 0, 0);

// PUNTA DE LA FLAMA
var geometry06 = new THREE.ConeGeometry(1, 2.5, 20);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,


});
var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(0, 10.5, 0);

const ESC01 = new THREE.Group();
ESC01.add(mesh01,mesh02,mesh04,mesh05,mesh06);
ESC01.position.set(x,y,z);

return ESC01;
}
