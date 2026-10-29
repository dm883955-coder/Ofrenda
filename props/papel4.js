import * as THREE from "../js/three.module.js";
export default function ESC20({x, y, z}) {

    
//  PAPEL PICADO

var geometryPlano = new THREE.PlaneGeometry(10, 6); 
var textureFoto3 = new THREE.TextureLoader().load('./assets/4.jpg');

var materialPlano = new THREE.MeshBasicMaterial({
    map: textureFoto3,
    side: THREE.DoubleSide,
});

var meshPlano = new THREE.Mesh(geometryPlano, materialPlano);
//scene.add(meshPlano);
meshPlano.position.set(0, 8, -25);


const ESC20 = new THREE.Group();
ESC20.add(meshPlano,textureFoto3);
ESC20.position.set(x,y,z);

return ESC20;
}
