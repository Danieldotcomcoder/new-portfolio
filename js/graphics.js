import * as THREE from 'three';

const scene = new THREE.Scene();
// scene.background = transparent;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 4;
const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    canvas: document.querySelector('.webgl'),
  });

renderer.setSize( window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const obj1 = new THREE.SphereGeometry(0.5,10,10)
const material = new THREE.MeshBasicMaterial({ color: '0x69DB6B' })
const sphere = new THREE.Mesh(obj1, material)
scene.add(sphere);


renderer.render( scene, camera );
	
	

