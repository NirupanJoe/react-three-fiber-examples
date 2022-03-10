import { React, useRef } from 'react';
import { Image, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import horizontalTileService from '../../services/horizontalTileService';

// eslint-disable-next-line max-lines-per-function
const Item = (context) => {
	const {
		data: { img: { url, hover }, i },
		patchState,
		state: { clicked },
		config: { horizontalTile: { width, gap }},
	} = context;
	const { damp } = THREE.MathUtils;
	const ref = useRef();
	const scroll = useScroll();
	const c = new THREE.Color();
	const x = width + gap;
	const position = [i * x, 0, 0];
	// eslint-disable-next-line no-magic-numbers
	const scale = [width, 4, 1];

	useFrame((dummy, delta) => {
		horizontalTileService.setEffect({ ...context,
			data: { delta, damp, scroll, ref, hover, c, i, scale, position }});
	});

	return (
		<Image
			ref={ ref }
			onClick={ () => patchState({ clicked: i === clicked ? null : i }) }
			onPointerOver={ () => patchState({ images: horizontalTileService
				.set({ ...context }) }) }
			onPointerOut={ () => patchState({ images: horizontalTileService
				.set({ ...context }) }) }
			position={ position }
			scale={ scale }
			url={ url }
		/>
	);
};

export default Item;
