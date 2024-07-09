document.addEventListener("DOMContentLoaded", function () {
	gsap.set("nav", { y: -150 });

	const digit1 = document.querySelector(".digit-1");
	const digit2 = document.querySelector(".digit-2");
	const digit3 = document.querySelector(".digit-3");

	const splitTextIntoSpans = (selector) => {
		var element = document.querySelector(selector);
		if (element) {
			var text = element.innerText;
			var splitText = text
				.split("")
				.map((char) => `<span>${char}</span>`)
				.join("");
			element.innerHTML = splitText;
		}
	};
	splitTextIntoSpans(".header h1");

	const animateDigits = (digit, duration, delay = 0) => {
		const numHeight = digit.querySelector(".num").clientHeight;
		const totalDistance =
			(digit.querySelectorAll(".num").length - 1) * numHeight;
		gsap.to(digit, {
			y: -totalDistance,
			duration: duration,
			delay: delay,
			ease: "power2.inOut",
		});
	};

	animateDigits(digit3, 5);
	animateDigits(digit2, 6);
	animateDigits(digit1, 2, 6);

	gsap.to(".progress-bar", {
		width: "30%",
		duration: 2,
		ease: "power4.inOut",
		delay: 7,
	});

	gsap.to(".progress-bar", {
		width: "100%",
		opacity: 0,
		duration: 2,
		delay: 9,
		ease: "power3.out",
		onComplete: () => {
			gsap.set(".preloader", {
				display: "none",
			});
		},
	});

	gsap.to(".hero-images > img", {
		clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
		duration: 1,
		ease: "power4.inOut",
		stagger: 0.25,
		delay: 9,
	});

	gsap.to(".hero", {
		scale: 1.25,
		duration: 3,
		ease: "power3.inOut",
		delay: 9,
	});

	gsap.to("nav", {
		y: 0,
		duration: 1,
		ease: "power3.out",
		delay: 11,
	});

	gsap.to("h1 span", {
		top: "0px",
		stagger: 0.1,
		duration: 1,
		ease: "power3.out",
		delay: 11,
	});
});
