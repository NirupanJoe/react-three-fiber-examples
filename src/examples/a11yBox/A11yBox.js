/* eslint-disable no-magic-numbers */
/* eslint-disable id-match */
import React from 'react';
import { A11y, useA11y } from '@react-three/a11y';
import { Box as BoxComponent } from '@react-three/drei';

const Box = (props) => {
	const a11y = useA11y();
	const color = a11y.pressed ? '#cc4444' : a11y.hover ? '#44bb44' : '#0088ee';

	return (
		<BoxComponent args={ [1, 1, 1] } rotation={ [0, 1, 0] } { ...props }>
			<meshStandardMaterial color={ color }/>
		</BoxComponent>
	);
};

const A11yBox = () =>
	<group>
		<A11y
			role="box"
			description="Light intensity"
		>
			<Box position={ [1, 0, 0] }/>
		</A11y>
		<A11y
			role="box"
			description="Light intensity"
		>
			<Box position={ [-1, 0, 0] }/>
		</A11y>
	</group>
	;

export default A11yBox;
