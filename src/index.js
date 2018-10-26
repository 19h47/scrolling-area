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
		this.options = Object.assign({
			container: options.container || this.$el,
		}, options);

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
		this.initEvents();
	}

	initEvents() {
		this.vs.on(this.on.scroll);
		this.raf(this.on.update);

		window.addEventListener('resize', this.on.resize);
		document.addEventListener('DOMContentLoaded', this.on.resize);
	}

	initElements() {
		this.$child.style.setProperty('display', 'inline-block');
		this.$child.style.setProperty('white-space', 'nowrap');
	}

	// Events
	scroll(event) {
		this.current = window.pageYOffset + document.documentElement.clientHeight;
		this.top = this.$child.getBoundingClientRect().top + document.documentElement.scrollTop;

		this.vars.target += event.deltaY * -1;

		this.vars.target = Math.max(
			0,
			Math.min(
				this.vars.target,
				this.containerHeight,
			),
		);
	}


	resize() {
		this.containerWidth = this.options.container.getBoundingClientRect().width;
		this.containerHeight = this.options.container.getBoundingClientRect().height;

		this.width = this.$child.getBoundingClientRect().width;
		this.height = this.$child.getBoundingClientRect().height;
		this.top = this.$child.getBoundingClientRect().top;
	}


	update() {
		this.vars.value += (this.vars.target - this.vars.value) * this.vars.spring;

		// this.containerHeight							-> this.vars.value 	-> 0
		// Math.abs(this.width - this.containerWidth) 	-> ? 				-> 0
		// 100 											-> ? 				-> 0

		// Overlap
		if (Math.round(this.width - this.containerWidth) < 0) {
			return this.raf(this.on.update);
		}

		const abscissa = Math.round(
			(this.vars.value * Math.abs(this.width - this.containerWidth)) / this.containerHeight,
		);

		this.$child.style.transform = `translate3d(${abscissa * -1}px, 0, 0)`;

		return this.raf(this.on.update);
	}
}
