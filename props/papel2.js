import * as THREE from "../js/three.module.js";
export default function ESC18({x, y, z}) {

    
//  PAPEL PICADO

var geometryPlano = new THREE.PlaneGeometry(10, 6); 
var textureFoto1 = new THREE.TextureLoader().load('./assets/2.jpg');

var materialPlano = new THREE.MeshBasicMaterial({
    map: textureFoto1,
    side: THREE.DoubleSide,
});

var meshPlano = new THREE.Mesh(geometryPlano, materialPlano);
//scene.add(meshPlano);
meshPlano.position.set(0, 8, -25);


const ESC18 = new THREE.Group();
ESC18.add(meshPlano,textureFoto1);
ESC18.position.set(x,y,z);

return ESC18;
}
