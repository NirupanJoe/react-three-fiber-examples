/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Texture = ({ texture, materials }) =>
	<mesh
		material={ materials[''] }
		material-map={ texture }
		material-map-flipY={ false }
	/>;

const Scene = () => {
	const { nodes, materials, scene } = useLoader(GLTFLoader, `${ process.env.PUBLIC_URL }/model/stacy.gltf`);
	const texture = useLoader(TextureLoader, `${ process.env.PUBLIC_URL }/model/stacy.jpg`);

	return (
		<group>
			{true && <primitive object={ scene }/>}
			{ true && <Texture { ...{ nodes, texture, materials } }/> }
		</group>
	);
};

export default Scene;
