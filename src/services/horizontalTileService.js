/* eslint-disable max-statements */
/* eslint-disable complexity */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
const horizontalTileService = {
	set: (context) => {
		const { state: { images }, data: { img }} = context;

		return images.map((image) =>
			(image.id === img.id
				? {
					...image,
					hover: !image.hover,
				}
				: image));
	},
	setEffect: (context) => {
		const {
			state: { images, clicked },
			data: { delta, damp, scroll, ref: { current },
				hover, c, i, scale, position },
		} = context;
		const y = scroll.curve((i / images.length)
		- (1.5 / images.length), 4 / images.length);

		const YScale = damp(
			current.scale.y, clicked === i ? 5 : 4 + y, 8, delta
		);
		const XScale = damp(
			current.scale.x, clicked === i ? 4.7 : scale[0], 6, delta
		);

		current.material.scale[1] = YScale;
		current.scale.y = YScale;
		current.material.scale[0] = XScale;
		current.scale.x = XScale;
		(clicked !== null && i < clicked)
			&& (current.position.x = damp(
				current.position.x, position[0] - 2, 6, delta
			));

		(clicked !== null && i > clicked)
			&& (current.position.x = damp(
				current.position.x, position[0] + 2, 6, delta
			));

		(clicked === null || clicked === i)
			&& (current.position.x = damp(
				current.position.x, position[0], 6, delta
			));

		current.material.grayscale = damp(
			current.material.grayscale,
			hover || clicked === i ? 0 : Math.max(0, 1 - y), 6, delta
		);
		current.material.color.lerp(c.set(hover
		|| clicked === i
			? 'white'
			: '#aaa'), hover ? 0.3 : 0.1);
	},
};

export default horizontalTileService;
