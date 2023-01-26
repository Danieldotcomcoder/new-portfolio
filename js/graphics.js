import * as THREE from 'three';
import '../css/graphicsStyle.css';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 4000 );
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector('.webgl'),
    antialias: true
  });

renderer.setSize( window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const bigobject = new THREE.SphereGeometry(0.3,25,25)
const texture = new THREE.TextureLoader().load('/img/JavaScript-code.jpg')
const material = new THREE.MeshBasicMaterial({ map: texture })
const sphere = new THREE.Mesh(bigobject,material)
sphere.position.setX(-3.5)
sphere.position.setY(1.7)
sphere.position.setZ(-1)
scene.add(sphere);

const smallobject = new THREE.SphereGeometry(0.1,35,20)

const texture1 = new THREE.TextureLoader().load('/img/img2.jpg')
const material1 = new THREE.MeshBasicMaterial({ map: texture1 })
const smallsphere = new THREE.Mesh(smallobject, material1)
smallsphere.position.setX(2)
smallsphere.position.setY(1)
scene.add(smallsphere)

const texture2 = new THREE.TextureLoader().load('/img/img3.jpg')
const material2 = new THREE.MeshBasicMaterial({ map: texture2 })
const smallsphere2 = new THREE.Mesh(smallobject, material2)
smallsphere2.position.setX(2.4)
smallsphere2.position.setY(1)
scene.add(smallsphere2)

const texture3 = new THREE.TextureLoader().load('/img/img4.jpg')
const material3 = new THREE.MeshBasicMaterial({ map: texture3 })
const smallsphere3 = new THREE.Mesh(smallobject, material3)
smallsphere3.position.setX(2.8)
smallsphere3.position.setY(1)
scene.add(smallsphere3)


const texture4 = new THREE.TextureLoader().load('/img/img5.jpg')
const material4 = new THREE.MeshBasicMaterial({ map: texture4 })
const smallsphere4 = new THREE.Mesh(smallobject, material4)
smallsphere4.position.setX(3.2)
smallsphere4.position.setY(1)
scene.add(smallsphere4)



function animate() {
    sphere.rotation.y += 0.03;
    sphere.translateX(0.01)
    
    
    
    
    smallsphere.rotation.y += 0.03;
    smallsphere2.rotation.y += 0.03;
    smallsphere3.rotation.y += 0.03;
    smallsphere4.rotation.y += 0.03;

    smallsphere.translateY(-0.01)
    smallsphere.translateZ(-0.001)
    renderer.render( scene, camera );
	  requestAnimationFrame( animate );
}
animate();

	
	

