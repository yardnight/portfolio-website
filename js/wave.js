// waves
function createWaves() {
	let waves = document.querySelectorAll(".rl-waves");
	console.log(waves);
	waves.forEach(function () {
		let wave1 = document.querySelector(".wave-one");
		console.log(wave1);
		let wave2 = document.querySelector(".wave-two");
		console.log(wave2);

		let wave1Args;
		let wave2Args;
		console.log(screen.width);
		if (screen.width < 420) {
			wave1Args = {
				height: 20,
				width: "110%",
				bones: 4,
				amplitude: 30,
				color: "url(#id1)",
				speed: 0.2,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
			wave2Args = {
				height: 20,
				width: "110%",
				bones: 4,
				amplitude: 30,
				color: "url(#id2)",
				speed: 0.15,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
		} else if (screen.width < 960) {
			wave1Args = {
				height: 30,
				width: "110%",
				bones: 4,
				amplitude: 30,
				color: "url(#id1)",
				speed: 0.2,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
			wave2Args = {
				height: 30,
				width: "110%",
				bones: 4,
				amplitude: 30,
				color: "url(#id2)",
				speed: 0.15,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
		} else {
			wave1Args = {
				height: 40,
				width: "110%",
				bones: 4,
				amplitude: 50,
				color: "url(#id1)",
				speed: 0.2,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
			wave2Args = {
				height: 30,
				width: "110%",
				bones: 4,
				amplitude: 40,
				color: "url(#id2)",
				speed: 0.15,
				mirrored: "scale(1,-1) translate(0,-100)",
			};
		}
		wavify(wave1, wave1Args);
		wavify(wave2, wave2Args);
	});
}
createWaves();

//<wavify>=============================
function wavify(wave_element, options) {
	if ("undefined" === typeof options) options = {};

	//  Options

	var settings = Object.assign(
		{},
		{
			container: options.container ? options.container : "body",
			// Height of wave
			height: 150,
			// Amplitude of wave
			amplitude: 100,
			// Animation speed
			speed: 0.15,
			// Total number of articulation in wave
			bones: 3,
			// Color
			color: "#00AFB955",
		},
		options
	);
	console.log("Settings:", settings);
	console.log("Wave:", wave_element);

	let wave = wave_element,
		width = document
			.querySelector(settings.container)
			.getBoundingClientRect().width,
		height = document
			.querySelector(settings.container)
			.getBoundingClientRect().height,
		points = [],
		lastUpdate,
		totalTime = 0,
		animationInstance = false,
		tweenMaxInstance = false;

	//  Allow new settings, avoid setting new container for logic purpose please :)
	//
	function rebuilSettings(params) {
		settings = Object.assign({}, settings, params);
	}

	function drawPoints(factor) {
		var points = [];

		for (var i = 0; i <= settings.bones; i++) {
			var x = (i / settings.bones) * width;
			var sinSeed =
				(factor + (i + (i % settings.bones))) * settings.speed * 100;
			var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
			var yPos = Math.sin(sinSeed / 100) * sinHeight + settings.height;
			points.push({ x: x, y: yPos });
		}

		return points;
	}
	console.log("P:", points);

	function drawPath(points) {
		var SVGString = "M " + points[0].x + " " + points[0].y;

		var cp0 = {
			x: (points[1].x - points[0].x) / 2,
			y:
				points[1].y -
				points[0].y +
				points[0].y +
				(points[1].y - points[0].y),
		};

		SVGString +=
			" C " +
			cp0.x +
			" " +
			cp0.y +
			" " +
			cp0.x +
			" " +
			cp0.y +
			" " +
			points[1].x +
			" " +
			points[1].y;

		var prevCp = cp0;
		var inverted = -1;

		for (var i = 1; i < points.length - 1; i++) {
			var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
			var cp1 = {
				x: points[i].x - prevCp.x + points[i].x,
				y: points[i].y - prevCp.y + points[i].y,
			};

			SVGString +=
				" C " +
				cp1.x +
				" " +
				cp1.y +
				" " +
				cp1.x +
				" " +
				cp1.y +
				" " +
				points[i + 1].x +
				" " +
				points[i + 1].y;
			prevCp = cp1;
			inverted = -inverted;
		}

		SVGString += " L " + width + " " + height;
		SVGString += " L 0 " + height + " Z";
		return SVGString;
	}

	//  Draw function
	//
	//
	function draw() {
		var now = window.Date.now();

		if (lastUpdate) {
			var elapsed = (now - lastUpdate) / 1000;
			lastUpdate = now;

			totalTime += elapsed;

			var factor = totalTime * Math.PI;
			tweenMaxInstance = gsap.to(wave, {
				duration: settings.speed,
				attr: {
					d: drawPath(drawPoints(factor)),
					transform: settings.mirrored,
				},
				// ease: Power1.easeInOut
			});
		} else {
			lastUpdate = now;
		}

		animationInstance = window.requestAnimationFrame(draw);
	}

	//  Pure js debounce function to optimize resize method
	//
	//
	function debounce(func, wait, immediate) {
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	//  Redraw for resize with debounce
	//
	var redraw = debounce(function () {
		pause();
		points = [];
		totalTime = 0;
		width = document
			.querySelector(settings.container)
			.getBoundingClientRect().width;
		height = document
			.querySelector(settings.container)
			.getBoundingClientRect().height;
		lastUpdate = false;
		play();
	}, 250);

	function boot() {
		if (!animationInstance) {
			tweenMaxInstance = gsap.set(wave, {
				attr: {
					fill: settings.color,
					transform: settings.mirrored,
				},
			});
			play();
			window.addEventListener("resize", redraw);
		}
	}

	function reboot(options) {
		kill();
		if (typeof options !== undefined) {
			rebuilSettings(options);
		}
		tweenMaxInstance = gsap.set(wave, {
			attr: {
				fill: settings.color,
				transform: settings.mirrored,
			},
		});
		play();
		window.addEventListener("resize", redraw);
	}

	function play() {
		if (!animationInstance) {
			animationInstance = window.requestAnimationFrame(draw);
		}
	}

	function pause() {
		if (animationInstance) {
			window.cancelAnimationFrame(animationInstance);
			animationInstance = false;
		}
	}

	function updateColor(options) {
		if (typeof options.timing === undefined) {
			options.timing = 1;
		}
		if (typeof options.color === undefined) {
			options.color = settings.color;
		}
		tweenMaxInstance = gsap.to(wave, {
			duration: parseInt(options.timing),
			attr: {
				fill: options.color,
				transform: settings.mirrored,
			},
			onComplete: function () {
				if (
					typeof options.onComplete !== undefined &&
					{}.toString.call(options.onComplete) === "[object Function]"
				) {
					options.onComplete();
				}
			},
		});
	}

	function kill() {
		if (animationInstance) {
			pause();
			tweenMaxInstance.kill();
			tweenMaxInstance = gsap.set(wave, {
				x: 0,
				y: 0,
				rotation: 0,
				opacity: 0,
				clearProps: "all",
				attr: {
					d: "M0,0",
					fill: "",
					transform: settings.mirrored,
				},
			});
			window.removeEventListener("resize", redraw);
			animationInstance = false;
		}
	}

	//  Boot Wavify
	//
	boot();

	return {
		reboot: reboot,
		play: play,
		pause: pause,
		kill: kill,
		updateColor: updateColor,
	};
}
