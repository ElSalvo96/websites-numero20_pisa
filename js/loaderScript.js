const startTime = new Date().getTime();
const minLoaderTimer = 3000;
window.addEventListener('load', (event) => {
	const doAction = () => {
		const loader = document.getElementById('loader');

		const elements = $('.invisible');
		elements.removeClass('invisible');
		document.body.classList.add('active-effects');

		loader.classList.remove('rotate-center');
		loader.classList.add('slide-out-fwd-center');
		$('.carousel').carousel({
			ride: true,
		});

		setTimeout(() => {
			loader.remove();
			document.getElementById('loaderStylesheet').remove();
			document.getElementById('loaderScript').remove();
			const elements = $('.animate');
			elements.removeClass('animate');
		}, 3000);
	};

	const endTime = new Date().getTime();
	const gap = endTime - startTime;
	if (gap < minLoaderTimer) setTimeout(doAction, minLoaderTimer - gap);
	else doAction();
});
