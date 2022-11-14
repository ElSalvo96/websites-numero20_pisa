const startTime = new Date().getTime();
const minLoaderTimer = 3000;
window.addEventListener('load', (event) => {
	const doAction = () => {
		document.getElementById('content').classList.remove('invisible');
		document.getElementById('loader').remove();
		document.getElementById('loaderStylesheet').remove();
		document.getElementById('loaderScript').remove();
	};

	const endTime = new Date().getTime();
	const gap = endTime - startTime;
	console.log(gap, minLoaderTimer, gap < minLoaderTimer, minLoaderTimer - gap);
	if (gap < minLoaderTimer) setTimeout(doAction, minLoaderTimer - gap);
	else doAction();
});
