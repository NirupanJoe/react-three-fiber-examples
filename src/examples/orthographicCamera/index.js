import { React } from 'react';
import { OrthographicCamera as Camera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

const two = 2;

const OrthographicCamera = () => {
	const { viewport: { width, aspect }} = useThree();
	const height = width / aspect;
	const args = useControls(
		'orthoProps', {
			left: -aspect * height / two,
			right: aspect * height / two,
			top: height / two,
			bottom: -height / two,
			near: -100,
			far: 100,
			position: [0, 1, 0],
		}, { collapsed: true }
	);

	return (
		<Camera makeDefault={ true } { ...args }/>
	);
};

export default OrthographicCamera;
