/**
 *
 * @file index.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */
import raf from 'raf';
import VirtualScroll from 'virtual-scroll';

export default class ScrollingArea {
	constructor(element) {
		// Bind
		this.on = {
			scroll: this.scroll.bind(this),
			resize: this.resize.bind(this),
			update: this.update.bind(this),
		};

		// Elements
		this.$el = document.querySelector(element);
		[this.$child] = this.$el.children;

		// Vars
		this.vars = {
			value: 0,
			target: 0,
			bottom: 0,
			spring: 0.1,
		};

		this.vs = new VirtualScroll();
		this.raf = raf;
	}

	init() {
		this.initElements();
		this.initEvents();
		this.on.resize();
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
	scroll(event) {
		this.vars.target += event.deltaY * -1;
		this.vars.target = Math.max(0, Math.min(this.vars.target, this.vars.bottom));
	}

	resize() {
		this.vars.bottom = document.body.getBoundingClientRect().height - window.innerHeight;

		this.container = this.$el.getBoundingClientRect().width;
		this.width = this.$child.getBoundingClientRect().width;
	}

	update() {
		this.vars.value += (this.vars.target - this.vars.value) * this.vars.spring;

		// this.bottom                    -> this.value   -> 0
		// this.width - this.container    -> ?            -> 0
		// 100                            -> ?            -> 0

		//
		const abscissa = Math.round(
			(this.vars.value * (this.width - this.container)) / this.vars.bottom,
		);

		this.$child.style.transform = `translate3d(${abscissa * -1}px, 0, 0)`;

		return this.raf(this.on.update);
	}
}
