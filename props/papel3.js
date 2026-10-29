import * as THREE from "../js/three.module.js";
export default function ESC19({x, y, z}) {

    
//  PAPEL PICADO

var geometryPlano = new THREE.PlaneGeometry(10, 6); 
var textureFoto2 = new THREE.TextureLoader().load('./assets/3.jpg');

var materialPlano = new THREE.MeshBasicMaterial({
    map: textureFoto2,
    side: THREE.DoubleSide,
});

var meshPlano = new THREE.Mesh(geometryPlano, materialPlano);
//scene.add(meshPlano);
meshPlano.position.set(0, 8, -25);


const ESC19 = new THREE.Group();
ESC19.add(meshPlano,textureFoto2);
ESC19.position.set(x,y,z);

return ESC19;
}
