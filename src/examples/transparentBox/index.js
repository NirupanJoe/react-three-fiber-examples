/* eslint-disable no-magic-numbers */
import { Box, Sphere } from '@react-three/drei';
import { useControls } from 'leva';
import React from 'react';

// eslint-disable-next-line max-lines-per-function
const control = () => {
	const bProps = useControls(
		'TransparentBox', {
			rotation: [0, 0, 0],
			position: [0, -1, 0],
			args: [1, 1, 1],
			scale: 1,
		}, { collapsed: true }
	);
	const bMProps = useControls(
		'Box material', {
			transmission: { value: 0, min: 0, max: 1, step: 0.1 },
			opacity: { value: 0.5, min: 0, max: 1, step: 0.1 },
			metalness: { value: 1, min: 0, max: 1, step: 0.1 },
			roughness: { value: 0, min: 0, max: 1, step: 0.1 },
			clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
			clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
			reflectivity: { value: 0, min: 0, max: 1, step: 0.1 },
			thickness: { value: 0, min: 0, max: 20, step: 0.5 },
			envMapIntensity: { value: 0.5, min: 0, max: 10, step: 1 },
			transparent: true,
		}, { collapsed: true }
	);
	const pProps = useControls(
		'Sphere', {
			rotation: [0, 0, 0],
			position: [0, -1, -2],
			args: [1, 60, 60],
			scale: 1,
		}, { collapsed: true }
	);
	const sMProps = useControls(
		'Sphere material', {
			transmission: { value: 1, min: 0, max: 1, step: 0.1 },
			opacity: { value: 1, min: 0, max: 1, step: 0.1 },
			metalness: { value: 1, min: 0, max: 1, step: 0.1 },
			roughness: { value: 0, min: 0, max: 1, step: 0.1 },
			clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
			clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
			reflectivity: { value: 0, min: 0, max: 1, step: 0.1 },
			thickness: { value: 0, min: 0, max: 20, step: 0.5 },
			envMapIntensity: { value: 1, min: 0, max: 10, step: 1 },
			ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
			transparent: true,
			color: '#ffffff',
		}, { collapsed: true }
	);

	return { bProps, bMProps, pProps, sMProps };
};

const TransparentBox = () => {
	const { bProps, bMProps, pProps, sMProps } = control();

	return (
		<mesh>
			<ambientLight/>
			<directionalLight/>
			<Box { ...bProps }>
				<meshPhysicalMaterial { ...bMProps }/>
			</Box>
			<Sphere { ...pProps }>
				<meshPhysicalMaterial { ...sMProps }/>
			</Sphere>
		</mesh>
	);
};

export default TransparentBox;
