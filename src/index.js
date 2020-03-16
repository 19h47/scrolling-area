/**
 *
 * @file index.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */
import raf from 'raf';
import VirtualScroll from 'virtual-scroll';

export default class ScrollingArea {
	constructor(element, options) {
		// Bind
		this.on = {
			scroll: this.scroll.bind(this),
			resize: this.resize.bind(this),
			update: this.update.bind(this),
		};

		// Elements
		this.$el = element;
		[this.$child] = this.$el.children;

		// Options
		this.options = { container: options.container || this.$el, ...options };

		// Vars
		this.vars = {
			bottom: 0,
			spring: 0.1,
			target: 0,
			value: 0,
		};

		this.vs = new VirtualScroll();
		this.raf = raf;
	}

	init() {
		this.initElements();
		this.on.resize();

		// No overlap
		if (0 > Math.round(this.width - this.containerWidth)) {
			return false;
		}

		return this.initEvents();
	}

	initEvents() {
		this.vs.on(this.on.scroll);
		this.raf(this.on.update);

		window.addEventListener('resize', this.on.resize);
	}

	initElements() {
		this.$child.style.setProperty('display', 'inline-block');
		this.$child.style.setProperty('white-space', 'nowrap');
	}

	// Events
	scroll() {
		const windowBottom = window.pageYOffset + this.windowArea;
		const progression = ((windowBottom - this.top) / this.windowArea) * 100;

		this.vars.target = Math.max(0, Math.min(progression, 100));
	}


	resize() {
		// Stock bounding $child rect
		const $childRect = this.$child.getBoundingClientRect();

		this.width = $childRect.width;
		this.height = $childRect.height;
		this.top = $childRect.top + window.pageYOffset - this.$child.clientTop;

		// Container width
		this.containerWidth = this.options.container.clientWidth;

		this.windowArea = window.innerHeight - this.height;
	}


	update() {
		this.vars.value += (this.vars.target - this.vars.value) * this.vars.spring;

		// 100											-> this.vars.target -> 0
		// Math.abs(this.width - this.containerWidth) 	-> ? 				-> 0

		const abscissa = Math.round(
			(this.vars.value * Math.abs(this.width - this.containerWidth)) / 100,
		);

		this.$child.style.transform = `translate3d(${abscissa * -1}px, 0, 0)`;

		return this.raf(this.on.update);
	}
}
