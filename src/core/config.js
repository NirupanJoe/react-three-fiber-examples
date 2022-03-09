import { rndString } from '@laufire/utils/random';

const config = {
	// eslint-disable-next-line no-magic-numbers
	images: [1, 2, 3, 4, 5, 6].map((u) => ({
		id: rndString(),
		url: `${ process.env.PUBLIC_URL }/img/${ u }.jpg`,
		hover: false,
	})),
	horizontalTile: {
		width: 0.7,
		gap: 0.15,
	},
};

export default config;
