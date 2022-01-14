import { useControls } from 'leva';
import { React } from 'react';

const control = () => useControls('Box', {
	rotation: [0, 0, 0],
	position: [0, 0, 0],
	args: [1, 1, 1],
	color: '#b70303',
});

const SimpleBox = () => {
	const { color, args, ...props } = control();

	return (
		<mesh { ...props }>
			<boxBufferGeometry args={ args }/>
			<meshBasicMaterial color={ color }/>
		</mesh>);
};

export default SimpleBox;
