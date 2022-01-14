import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { React } from 'react';
import './App.scss';
import examples from './examples';

const Example = () => {
	const { Selection } = useControls('Example', {
		Selection: {
			options: examples,
		},
	});

	return <Selection/>;
};

const App = () =>
	<div className="App" role="App">
		<Canvas>
			<Example/>
		</Canvas>
	</div>;

export default App;
