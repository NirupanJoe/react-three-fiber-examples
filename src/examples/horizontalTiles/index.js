/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Item from './item';
import { useControls } from 'leva';

const HorizontalTiles = (context) => {
	const {
		state: { images },
		config: { horizontalTile: { width: w, gap }},
	} = context;
	const { width } = useThree(({ viewport }) => viewport);
	const x = w + gap;
	const scProps = useControls('ScrollControl', {
		horizontal: true,
		damping: 10,
		pages: (width - x + (images.length * x)) / width,
	});

	return (
		<ScrollControls
			{ ...scProps }
		>
			<Scroll>
				{images.map((img, i) =>
					<Item
						key={ i }
						{ ...{ ...context, data: { img, i }} }
					/>) }
			</Scroll>
		</ScrollControls>
	);
};

export default HorizontalTiles;
