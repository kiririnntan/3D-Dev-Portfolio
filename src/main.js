import 'C:/Users/kirir/OneDrive - The Ohio State University/AU24/Extras/3D Dev Portfolio/Project_1/styles/style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
const material = new THREE.MeshPhongMaterial({color : 0xFFC0CB});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLightA = new THREE.PointLight(0xffffff, 5);
pointLightA.position.set(10, 5, 5);

const pointLightB = new THREE.PointLight(0xffffff, 5);
pointLightB.position.set(-10, -5, -5);

console.log(pointLightA.intensity);

const ambientLT = new THREE.AmbientLight(0xffffff);

scene.add(pointLightA, pointLightB, ambientLT);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

//const lightHelper = new THREE.PointLightHelper(pointLight);
//scene.add(lightHelper);

function animate(){
  requestAnimationFrame( animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera);
}

animate();
