import * as THREE from 'three';
import '../css/graphicsStyle.css';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  4000
);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: document.querySelector('.webgl'),
  powerPreference: "high-performance",
  antialias: false
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// const bigobject = new THREE.SphereGeometry(0.4, 25, 25);
// const texture = new THREE.TextureLoader().load('/img/JavaScript-code.jpg');
// const material = new THREE.MeshBasicMaterial({ map: texture });
// const sphere = new THREE.Mesh(bigobject, material);
// sphere.position.setX(-3.5);
// sphere.position.setY(1.4);
// sphere.position.setZ(-1);
// scene.add(sphere);

const smallobject = new THREE.SphereBufferGeometry(0.1, 35, 20);

const texture1 = new THREE.TextureLoader().load('/img/img4.jpg');
const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
const smallsphere = new THREE.Mesh(smallobject, material1);
smallsphere.position.setX(2);
smallsphere.position.setY(1);
scene.add(smallsphere);

// const texture2 = new THREE.TextureLoader().load('/img/img3.jpg');
// const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const smallsphere2 = new THREE.Mesh(smallobject, material1);
smallsphere2.position.setX(2.4);
smallsphere2.position.setY(1);
scene.add(smallsphere2);

// const texture3 = new THREE.TextureLoader().load('/img/img4.jpg');
// const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const smallsphere3 = new THREE.Mesh(smallobject, material1);
smallsphere3.position.setX(2.8);
smallsphere3.position.setY(1);
scene.add(smallsphere3);

// const texture4 = new THREE.TextureLoader().load('/img/img5.jpg');
// const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const smallsphere4 = new THREE.Mesh(smallobject, material1);
smallsphere4.position.setX(3.2);
smallsphere4.position.setY(1);
scene.add(smallsphere4);

const smallsphere5 = new THREE.Mesh(smallobject, material1);
smallsphere5.position.setX(3.6);
smallsphere5.position.setY(1);
scene.add(smallsphere5);

const smallsphere6 = new THREE.Mesh(smallobject, material1);
smallsphere6.position.setX(4);
smallsphere6.position.setY(1);
scene.add(smallsphere6);

// const geometry = new THREE.BoxGeometry( 0.02, 1, 1 );
// const texture5 = new THREE.TextureLoader().load('/img/code1.png');
// const material0 = new THREE.MeshBasicMaterial({ map: texture5 });
// const cube = new THREE.Mesh( geometry, material0 );
// cube.position.setX(-1.5)
// cube.position.setY(-0.8)
// cube.position.setZ(-0.8)
// scene.add( cube );

const translate = () => {
  setTimeout(() => {
    smallsphere.translateY(-0.004);
    ;
  }, 1000);
  setTimeout(() => {
    smallsphere2.translateY(-0.004);
   ;
  }, 2000);
  setTimeout(() => {
    smallsphere3.translateY(-0.004);
   ;
  }, 3000);
  setTimeout(() => {
    smallsphere4.translateY(-0.004);
    ;
  }, 4000);
  setTimeout(() => {
    smallsphere5.translateY(-0.004);
    ;
  }, 5000);
  setTimeout(() => {
    smallsphere6.translateY(-0.004);
    ;
  }, 6000);
};

function animate() {

  
  smallsphere.rotation.y += 0.03;
  smallsphere2.rotation.y += -0.05;
  smallsphere3.rotation.y += -0.07;
  smallsphere4.rotation.y += 0.09;
  smallsphere5.rotation.y += 0.09;
  smallsphere6.rotation.y += -0.09;

  translate();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
