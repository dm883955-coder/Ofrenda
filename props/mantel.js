import * as THREE from "../js/three.module.js";
export default function ESC32({x, y, z}) {

    
//mantel
var geometryMantel = new THREE.PlaneGeometry(10,30);
var textureMantel= new THREE.TextureLoader().load('./assets/mantel.jpg');
var materialMantel = new THREE.MeshBasicMaterial({
      map: textureMantel,
    color: 0xffffff,
    side: THREE.DoubleSide
 
});
var mantel = new THREE.Mesh(geometryMantel, materialMantel);
 
mantel.position.set(0,1,0);
mantel.rotation.set(-Math.PI/2,0,0);
//scene.add(mantel);


const ESC32 = new THREE.Group();
ESC32.add(mantel);
ESC32.position.set(x,y,z);

return ESC32;
}
