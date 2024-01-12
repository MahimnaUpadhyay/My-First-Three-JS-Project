import * as THREE from './node_modules/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Space Background
const textureLoader = new THREE.TextureLoader();
const spaceBackgroundTexture = textureLoader.load('./images/space_mesh/spacebg.jpg');

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

// Earth
const earth_texture = new THREE.TextureLoader().load('./images/planet_mesh/earth.jpg');

const earth = new THREE.Mesh(

	new THREE.SphereGeometry(15,30,16),
	new THREE.MeshBasicMaterial( {map:earth_texture} )

);
  
scene.add( earth );

earth.translateOnAxis(new THREE.Vector3(-50,0,0),1);

camera.position.z = 10;

// Mars
const mars_texture = new THREE.TextureLoader().load('./images/planet_mesh/mars.jpg');

const mars = new THREE.Mesh(
	
	new THREE.SphereGeometry(15,32,16),
	new THREE.MeshBasicMaterial({map:mars_texture})

);

scene.add(mars);

mars.translateOnAxis(new THREE.Vector3(-8,0,0),1);

camera.position.z = 40;

// Mars
const jupiter_texture = new THREE.TextureLoader().load('./images/planet_mesh/jupiter.jpg');

const jupiter = new THREE.Mesh(
	
	new THREE.SphereGeometry(25,32,16),
	new THREE.MeshBasicMaterial({map:jupiter_texture})

);

scene.add(jupiter);

jupiter.translateOnAxis(new THREE.Vector3(40,0,0),1);

camera.position.z = 60;

function animate() {
	
	requestAnimationFrame( animate );

	earth.rotation.y += 0.003;

	mars.rotation.y += 0.002;

	jupiter.rotation.y += 0.001;

	renderer.render( scene, camera );
}

animate();