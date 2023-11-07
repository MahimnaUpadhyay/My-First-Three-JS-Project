import * as THREE from './node_modules/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const textureLoader = new THREE.TextureLoader();
const spaceBackgroundTexture = textureLoader.load('./spacebg.jpg');

const spaceBackgroundSphere = new THREE.Mesh
(
	new THREE.SphereGeometry(60,32,30), // Adjust the radius and segments as needed
	new THREE.MeshBasicMaterial({ map: spaceBackgroundTexture, side: THREE.BackSide })
);
  
scene.add(spaceBackgroundSphere);

camera.position.z= 100;

const renderer = new THREE.WebGLRenderer(
	{
		alpha: true
	}
);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
	
const texture = new THREE.TextureLoader().load('./earth.jpg');

const sphere = new THREE.Mesh(

	new THREE.SphereGeometry( 15,32,16),
	new THREE.MeshBasicMaterial( {map:texture} )

);
  
scene.add( sphere );

camera.position.z = 60;

function animate() {
	
	requestAnimationFrame( animate );

	sphere.rotation.y += 0.002;

	renderer.render( scene, camera );
}

animate();