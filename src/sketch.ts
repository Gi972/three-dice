import './sketch.css';
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Color } from 'three';

//gray = 0xb0b0b0
//const color_black = 'black';

const gui = new GUI();

const size = {
  width: 400,
  height: 400,
};

//*SCENE
let canvas: HTMLCanvasElement = document.querySelector('.webgl')!;

const box = new THREE.BoxGeometry(1, 1, 1);
const circle = new THREE.SphereGeometry(0.05, 32);

const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xe71837 });
const pointMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

const container = new THREE.Mesh(box, boxMaterial);
const point1 = new THREE.Mesh(circle, pointMaterial);
point1.position.z = 0.5;

const point2_1 = new THREE.Mesh(circle, pointMaterial);
const point2_2 = new THREE.Mesh(circle, pointMaterial);
point2_1.position.set(0, 0.2, 0);
point2_2.position.set(0, -0.2, 0);

const point2 = new THREE.Group();
point2.add(point2_1, point2_2);
point2.position.x = 0.5;

const point3_1 = new THREE.Mesh(circle, pointMaterial);
const point3_2 = new THREE.Mesh(circle, pointMaterial);
const point3_3 = new THREE.Mesh(circle, pointMaterial);

const point3 = new THREE.Group();
point3.add(point3_1, point3_2, point3_3);
point3_1.position.set(0, 0.5, 0);
point3_2.position.set(0.2, 0.5, 0.2);
point3_3.position.set(-0.2, 0.5, -0.2);

const point4_1 = new THREE.Mesh(circle, pointMaterial);
const point4_2 = new THREE.Mesh(circle, pointMaterial);
const point4_3 = new THREE.Mesh(circle, pointMaterial);
const point4_4 = new THREE.Mesh(circle, pointMaterial);

const point4 = new THREE.Group();
point4.add(point4_1, point4_2, point4_3, point4_4);
point4_1.position.set(0.2, -0.5, -0.2);
point4_2.position.set(-0.2, -0.5, 0.2);
point4_3.position.set(0.2, -0.5, 0.2);
point4_4.position.set(-0.2, -0.5, -0.2);

const point5_1 = new THREE.Mesh(circle, pointMaterial);
const point5_2 = new THREE.Mesh(circle, pointMaterial);
const point5_3 = new THREE.Mesh(circle, pointMaterial);
const point5_4 = new THREE.Mesh(circle, pointMaterial);
const point5_5 = new THREE.Mesh(circle, pointMaterial);

point5_1.position.set(-0.5, 0.2, -0.2);
point5_2.position.set(-0.5, 0.2, 0.2);
point5_3.position.set(-0.5, -0.2, -0.2);
point5_4.position.set(-0.5, -0.2, 0.2);
point5_5.position.set(-0.5, 0, 0);

const point5 = new THREE.Group();
point5.add(point5_1, point5_2, point5_3, point5_4, point5_5);

const point6_1 = new THREE.Mesh(circle, pointMaterial);
const point6_2 = new THREE.Mesh(circle, pointMaterial);
const point6_3 = new THREE.Mesh(circle, pointMaterial);
const point6_4 = new THREE.Mesh(circle, pointMaterial);
const point6_5 = new THREE.Mesh(circle, pointMaterial);
const point6_6 = new THREE.Mesh(circle, pointMaterial);
point6_1.position.set(-0.2, -0.2, 0);
point6_2.position.set(-0.2, 0, 0);
point6_3.position.set(-0.2, 0.2, 0);
point6_4.position.set(0.2, -0.2, 0);
point6_5.position.set(0.2, 0, 0);
point6_6.position.set(0.2, 0.2, 0);
const point6 = new THREE.Group();

point6.add(point6_1, point6_2, point6_3, point6_4, point6_5, point6_6);
point6.position.z = -0.5;

const planeGeometry = new THREE.PlaneGeometry(5, 3);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x35654d,
  side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(planeGeometry, groundMaterial);
ground.rotation.x = Math.PI * 0.5;

const dice = new THREE.Group();
dice.position.y = 0.11;
dice.scale.set(0.2, 0.2, 0.2);
dice.add(container, point1, point2, point3, point4, point5, point6);

const dice2 = dice.clone();
dice2.position.x = 0.25;
dice2.rotation.y = 0.4;

gui.add(point2.position, 'x').min(-3).max(3).step(0.1);
gui.add(point2.rotation, 'y').min(-3).max(3).step(0.1);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xff9000, 0.5);
pointLight.position.set(0, 0.2, 0.2);

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(size.width, size.height);

//* DEBUG
const debugUi = new THREE.Group();
const axesHelper = new THREE.AxesHelper(6);
const helper = new THREE.GridHelper(6, 6);
const cameraHelper = new THREE.CameraHelper(camera);

debugUi.add(helper, axesHelper);
debugUi.position.y = -0;

const scene = new THREE.Scene();
//scene.add(debugUi)

scene.add(camera, dice, dice2, ground);
scene.add(ambientLight);
scene.add(pointLight);

const clock = new THREE.Clock();
const controls = new OrbitControls(camera, renderer.domElement);

//renderer.render(scene, camera);
function gameLoop() {
  //dice.rotation.y = clock.getElapsedTime();
  //point2.position.x = Math.cos(clock.getElapsedTime());

  renderer.render(scene, camera);

  window.requestAnimationFrame(gameLoop);
}

function init() {
  // Start the first frame request
  gameLoop();
}

window.onload = init;
