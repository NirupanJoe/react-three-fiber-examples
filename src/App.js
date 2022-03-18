import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { React, Suspense } from 'react';
import './App.scss';
import examples from './examples';
import OrthographicCamera from './examples/orthographicCamera';
import PerspectiveCamera from './examples/perspectiveCamera';

const camera = {
	PerspectiveCamera,
	OrthographicCamera,
};

// eslint-disable-next-line max-lines-per-function
const getInput = () => useControls({
	Example: {
		options: examples,
	},
	orbitControl: false,
	Camera: {
		options: camera,
	},
	Background: folder({
		color: '#6fba93',
		environment: false,
		preset: {
			options: {
				city: 'city',
				park: 'park',
				apartment: 'apartment',
				sunset: 'sunset',
				dawn: 'dawn',
				night: 'night',
			},
		},
	}, { collapsed: true }),
});

const Ready = ({ patchState, state }) =>
	<div
		className="ready"
		onClick={ () => patchState({ ready: !state.ready }) }
	>
		click
	</div>;

const Component = (context) => {
	const { Example, color, orbitControl, environment, preset } = getInput();

	return (
		<div className="App" role="App">
			<Canvas style={ { background: color } }>
				<Suspense fallback={ null }>
					<Example { ...context }/>
					 <Environment background={ environment } preset={ preset }/>
				</Suspense>
				{ orbitControl && <OrbitControls/> }
			</Canvas>
		</div>);
};

const App = (context) => {
	const { state } = context;

	return (
		state.ready ? <Component { ...context }/> : <Ready { ...context }/>
	);
};

export default App;
