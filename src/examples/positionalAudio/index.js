import { React, Suspense } from 'react';
import { PositionalAudio as Audio } from '@react-three/drei';
import { folder, useControls } from 'leva';

const control = () =>
	useControls('PositionalAudio', {
		audio: false,
		props: folder({
			loop: true,
			autoplay: true,
			distance: 10,
			clip: {
				options: {
					engine: 'engine',
					accelerate: 'accelerate',
					boost: 'boost',
					crash: 'crash',
					train: 'train',
					water: 'water',
					honk: 'honk',
				},
			},
		}),
	});

const PositionalAudio = () => {
	const { audio, clip, ...props } = control();

	return (
		<Suspense fallback={ null }>
			{ audio
			&& <mesh>
				<Audio
					url={ `${ process.env.PUBLIC_URL }/sounds/${ clip }.mp3` }
					{ ...props }
				/>
				 </mesh>}
		</Suspense>
	);
};

export default PositionalAudio;
