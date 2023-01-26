import * as THREE from 'three';
import '../css/graphicsStyle.css';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 4000 );
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector('.webgl'),
  });

renderer.setSize( window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const obj1 = new THREE.SphereGeometry(0.5,10,10)
const material = new THREE.MeshBasicMaterial({ color: 0x40E0D0 })
const sphere = new THREE.Mesh(obj1,material)
scene.add(sphere);


renderer.render( scene, camera );
	
	

