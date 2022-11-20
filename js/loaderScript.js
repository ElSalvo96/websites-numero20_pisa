const startTime = new Date().getTime();
const minLoaderTimer = 3000;

window.addEventListener('load', (event) => {
	const doAction = () => {
		document.body.classList.remove('loading');

		const loader = document.getElementById('loader');
		loader.classList.remove('rotate-center');
		loader.classList.add('rotate-out-center');
		$('.carousel').carousel({
			ride: true,
		});

		document.body.classList.remove('overflow-hidden');

		setTimeout(() => {
			loader.remove();
			document.getElementById('loaderStylesheet').remove();
			document.getElementById('loaderScript').remove();
			const elements = $('.animate');
			elements.removeClass('animate');
		}, 1500);
	};

	const endTime = new Date().getTime();
	const gap = endTime - startTime;
	if (gap < minLoaderTimer) setTimeout(doAction, minLoaderTimer - gap);
	else doAction();
});
