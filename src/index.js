import { cubicOut } from 'eases-jsnext';

export default function scale(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, initial = 0, fade = true }
) {
	const diff = initial - 1;
	const o = +getComputedStyle( node ).opacity;

	return {
		delay,
		duration,
		easing,
		css: t => `transform: scale(${initial - (t * diff)}); ${fade ? `opacity: ${t * o};` : ''}`
	};
}
