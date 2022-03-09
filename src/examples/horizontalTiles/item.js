/* eslint-disable no-multi-assign */
/* eslint-disable max-statements */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React, useRef, useState } from 'react';
import { Image, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Item = (context) => {
	const {
		data: { img: { url }, i },
		patchState,
		state: { clicked, images },
		config: { horizontalTile: { width, gap }},
	} = context;
	const { damp } = THREE.MathUtils;
	const ref = useRef();
	const scroll = useScroll();
	const [hovered, hover] = useState(false);
	const click = () => {
		patchState({ clicked: i === clicked ? null : i });
	};
	const over = () => hover(true);
	const out = () => hover(false);
	const c = new THREE.Color();
	const x = width + gap;
	const position = [i * x, 0, 0];
	const scale = [width, 4, 1];

	useFrame((dummy, delta) => {
		const y = scroll.curve((i / images.length)
			- (1.5 / images.length), 4 / images.length);

		ref.current.material.scale[1] = ref.current.scale.y = damp(
			ref.current.scale.y, clicked === i ? 5 : 4 + y, 8, delta
		);
		ref.current.material.scale[0] = ref.current.scale.x = damp(
			ref.current.scale.x, clicked === i ? 4.7 : scale[0], 6, delta
		);
		if(clicked !== null && i < clicked) {
			ref.current.position.x = damp(
				ref.current.position.x, position[0] - 2, 6, delta
			);
		}
		if(clicked !== null && i > clicked) {
			ref.current.position.x = damp(
				ref.current.position.x, position[0] + 2, 6, delta
			);
		}
		if(clicked === null || clicked === i) {
			ref.current.position.x = damp(
				ref.current.position.x, position[0], 6, delta
			);
		}
		ref.current.material.grayscale = damp(
			ref.current.material.grayscale,
			hovered || clicked === i ? 0 : Math.max(0, 1 - y), 6, delta
		);
		ref.current.material.color.lerp(c.set(hovered
			|| clicked === i
			? 'white'
			: '#aaa'), hovered ? 0.3 : 0.1);
	});

	return (
		<Image
			ref={ ref }
			onClick={ click }
			onPointerOver={ over }
			onPointerOut={ out }
			position={ position }
			scale={ scale }
			url={ url }
		/>
	);
};

export default Item;
