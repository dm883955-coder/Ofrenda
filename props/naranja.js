import * as THREE from "../js/three.module.js";
export default function ESC12({x, y, z}) {

    
// naranja 

var geometryNaranja = new THREE.SphereGeometry(1.2, 16, 16);
var materialNaranja = new THREE.MeshLambertMaterial({
    color: 0xFF7518,
    side: THREE.DoubleSide
});
var meshNaranja = new THREE.Mesh(geometryNaranja, materialNaranja);
//scene.add(meshNaranja);
meshNaranja.position.set(15, 3.2, -15); 




const ESC12 = new THREE.Group();
ESC12.add(meshNaranja);
ESC12.position.set(x,y,z);

return ESC12;
}
