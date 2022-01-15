import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { React } from 'react';
import './App.scss';
import examples from './examples';

const getInput = () => useControls({
	Example: {
		options: examples,
	},
	orbitControl: true,
	Background: folder({
		color: '#6fba93',
	}, { collapsed: true }),
});

const App = () => {
	const { Example, color, orbitControl } = getInput();

	return (
		<div className="App" role="App">
			<Canvas>
				<color attach="background" args={ [color] }/>
				<Example/>
				{ orbitControl &&	<OrbitControls/> }
			</Canvas>
		</div>);
};

export default App;
