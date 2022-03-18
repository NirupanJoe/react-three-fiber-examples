/* eslint-disable max-lines-per-function */
import { Text } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useEffect, useState } from 'react';

const textProps = () => useControls('textProps', {
	text: 'Hello',
	fontSize: { value: 5, min: 0, max: 5, step: 0.5 },
	letterSpacing: { value: 0.01, min: 0, max: 5, step: 0.05 },
});

const VideoTexture = (context) => {
	const { state } = context;

	// eslint-disable-next-line no-console
	console.log(state);
	const [video] = useState(() =>
		// eslint-disable-next-line no-undef
		Object.assign(document.createElement('video'), {
			src: `${ process.env.PUBLIC_URL }/drei.mp4`,
			crossOrigin: 'Anonymous',
			loop: true,
		}));

	// eslint-disable-next-line no-void
	useEffect(() => void (state.ready && video.play()),
		[video, state.ready]);

	return (
		<Text
			{ ...textProps() }
		>
			<meshBasicMaterial toneMapped={ false }>
				<videoTexture
					attach="map"
					args={ [video] }
				/>
			</meshBasicMaterial>
		</Text>

	);
};

export default VideoTexture;
