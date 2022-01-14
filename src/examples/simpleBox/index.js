import { useControls } from 'leva';
import { React } from 'react';

const control = () => useControls('Box', {
	rotation: [0, 0, 0],
	position: [0, 0, 0],
	width: 5,
	height: 5,
	depth: 5,
});

const SimpleBox = () => {
	const { ...props } = control();

	return (
		<mesh>
			<boxBufferGeometry { ...props }/>
			<meshBasicMaterial color="red"/>
		</mesh>);
};

export default SimpleBox;
