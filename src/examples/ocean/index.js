/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { Sky, useTexture } from '@react-three/drei';
import { Water } from 'three-stdlib';
import { useControls } from 'leva';

extend({ Water });

// eslint-disable-next-line max-lines-per-function
const Ocean = () => {
	const ref = useRef();
	const waterNormals = useTexture(`${ process.env.PUBLIC_URL }/waternormals.jpeg`);

	// eslint-disable-next-line no-multi-assign
	waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
	const geom = new THREE.PlaneGeometry(1000, 1000);
	const config = useControls('Ocean', {
		textureWidth: 512,
		textureHeight: 512,
		sunDirection: [0, 0, 0],
		sunColor: '#ffffff',
		waterColor: '#204545',
		distortionScale: 3.7,
		fog: false,
	});

	const sky = useControls('Sky', {
		scale: 1000,
		sunPosition: [500, 150, -1000],
		turbidity: 0.1,
		rotation: [0, 0, 0],
		position: [0, 0, 0],
	});

	const waterProps = useControls('waterProps', {
		'rotation-x': -Math.PI / 2,
		'position': [0, 0, 0],
	});
	const groupProps = useControls('groupProps', {
		rotation: [0, 0, 0],
		position: [0, -Math.PI / 2, 0],
	});

	useFrame((state, delta) =>
		(ref.current.material.uniforms.time.value += delta));

	return (
		<group { ...groupProps }>
			<water
				ref={ ref }
				args={ [geom, { ...config, waterNormals }] }
				{ ...waterProps }
			/>
			<Sky { ... sky }/>
		</group>
	);
};

export default Ocean;
