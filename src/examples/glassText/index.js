/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const control = () => {
	const textOnProps = useControls('TextOne', {
		size: { value: 2.5, min: 0, max: 5, step: 0.1 },
		height: { value: 0.2, min: 0, max: 5, step: 0.1 },
		position: [-6, 0, 0],
		curveSegments: 32,
		bevelEnabled: true,
		bevelThickness: 0.2,
		bevelSize: 0.05,
		bevelSegments: 20,
	});

	const TMProps = useControls(
		'Text material', {
			transmission: { value: 1, min: 0, max: 1, step: 0.1 },
			opacity: { value: 0.6, min: 0, max: 1, step: 0.1 },
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

	return { textOnProps, TMProps };
};

const GlassText = () => {
	const {
		textOnProps: {
			position,
			...onProps
		},
		TMProps,
	} = control();
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/robotoMedium.json`);

	return (
		<group>
			<mesh position={ position }>
				<textGeometry args={ ['Laufire', { font, ...onProps }] }/>
				<meshPhysicalMaterial { ...TMProps }/>
			</mesh>
		</group>);
};

export default GlassText;
