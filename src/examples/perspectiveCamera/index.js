import { PerspectiveCamera as Camera } from '@react-three/drei';
import { useControls } from 'leva';
import { React } from 'react';

const PerspectiveCamera = () => {
	const props = useControls('PerspectiveProps', {
		// eslint-disable-next-line no-magic-numbers
		position: [0, 0, 5],
		rotation: [0, 0, 0],
		fov: 50,
	});

	return (
		<Camera makeDefault={ true } { ...props }/>
	);
};

export default PerspectiveCamera;
