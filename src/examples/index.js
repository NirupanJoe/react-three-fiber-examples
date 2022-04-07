/* eslint-disable id-match */
import A11yBox from './a11yBox/A11yBox';
import GlassText from './glassText';
import HorizontalTiles from './horizontalTiles';
import Ocean from './ocean';
import PositionalAudio from './positionalAudio';
import Scene from './scene';
import SimpleBox from './simpleBox';
import TextScroll from './textScroll';
import TransparentBox from './transparentBox';
import VideoTexture from './videoTexture';

const examples = {
	'stacy': Scene,
	'Glass Text': GlassText,
	'Video Texture': VideoTexture,
	'Simple Box': SimpleBox,
	'Positional Audio': PositionalAudio,
	'Transparent Box': TransparentBox,
	'Ocean': Ocean,
	'HorizontalTiles': HorizontalTiles,
	'TextScroll': TextScroll,
	'A11yBox': A11yBox,
};

export default examples;
