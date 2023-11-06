import * as THREE from './node_modules/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

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

camera.position.z = 30;

function animate() {
	
	requestAnimationFrame( animate );

	sphere.rotation.y += 0.01;
	// sphere.rotation.z += 0.01;

	renderer.render( scene, camera );
}

animate();