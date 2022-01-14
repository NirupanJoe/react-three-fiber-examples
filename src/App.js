import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { React } from 'react';
import './App.scss';
import examples from './examples';

const Example = () => useControls('Example', {
	Selection: {
		options: examples,
	},
	OrbitControl: folder({
		enabled: false,
	}),
});

const App = () => {
	const { Selection, ...oProps } = Example();

	return (
		<div className="App" role="App">
			<Canvas>
				<Selection/>
				<OrbitControls { ...oProps }/>
			</Canvas>
		</div>);
};

export default App;
