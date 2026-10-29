import * as THREE from "../js/three.module.js";
export default function ESC17({x, y, z}) {

    
//  PAPEL PICADO

var geometryPlano = new THREE.PlaneGeometry(10, 6); 
var textureFoto = new THREE.TextureLoader().load('./assets/1.jpg');

var materialPlano = new THREE.MeshBasicMaterial({
    map: textureFoto,
    side: THREE.DoubleSide,
});

var meshPlano = new THREE.Mesh(geometryPlano, materialPlano);
//scene.add(meshPlano);
meshPlano.position.set(0, 8, -25);


const ESC17 = new THREE.Group();
ESC17.add(meshPlano,textureFoto);
ESC17.position.set(x,y,z);

return ESC17;
}
