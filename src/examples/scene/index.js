/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Texture = ({ nodes, texture, materials }) =>
	<mesh
		geometry={ nodes.stacy.geometry }
		material={ materials[''] }
		material-map={ texture }
		material-map-flipY={ false }
	/>;

const Scene = () => {
	const { nodes, materials } = useLoader(GLTFLoader, `${ process.env.PUBLIC_URL }/model/stacy.gltf`);
	const texture = useLoader(TextureLoader, `${ process.env.PUBLIC_URL }/model/stacy.jpg`);

	// eslint-disable-next-line no-console
	console.log(nodes);
	return (
		<group>
			{false && <primitive object={ nodes }/>}
			{ true && <Texture { ...{ nodes, texture, materials } }/> }
		</group>
	);
};

export default Scene;
