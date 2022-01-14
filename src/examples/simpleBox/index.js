import { useControls } from 'leva';
import { React } from 'react';

const control = () => useControls('Box', {
	rotation: [0, 0, 0],
	position: [0, 0, 0],
	width: 5,
	height: 5,
	depth: 5,
	color: '#b70303',
});

const SimpleBox = () => {
	const { color, ...props } = control();

	return (
		<mesh>
			<boxBufferGeometry { ...props }/>
			<meshBasicMaterial color={ color }/>
		</mesh>);
};

export default SimpleBox;
