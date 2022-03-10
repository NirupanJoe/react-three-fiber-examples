/* eslint-disable no-magic-numbers */
import { Scroll, ScrollControls, Text } from '@react-three/drei';
import { useControls } from 'leva';
import React from 'react';

const textOne = () => useControls('TextOne', {
	color: '#000',
	fontSize: 2,
	position: [0, 0, 0],
});

const textTwo = () => useControls('TextTwo', {
	color: '#000',
	fontSize: 2,
	position: [10, 0, 0],
});

const textThree = () => useControls('TextThree', {
	color: '#000',
	fontSize: 2,
	position: [20, 0, 0],
});

const textScroll = () => useControls('TextScroll', {
	horizontal: true,
	damping: 2,
	distance: 1,
	pages: 3 / 1.3,
});

const TextScroll = () =>
	<ScrollControls { ...textScroll() }>
		<Scroll>
			<Text { ...textOne() }>Laufire</Text>
			<Text { ...textTwo() }>Team</Text>
			<Text { ...textThree() }>Solution</Text>
		</Scroll>
	</ScrollControls>;

export default TextScroll;
