const startTime = new Date().getTime();
const minLoaderTimer = 3000;
document.addEventListener('DOMContentLoaded', (event) => {
	const doAction = () => {
		document.getElementById('content').classList.remove('invisible');
		document.getElementById('loader').remove();
		document.getElementById('loaderStylesheet').remove();
		document.getElementById('loaderScript').remove();
	};

	const endTime = new Date().getTime();
	const gap = endTime - startTime;
	if (gap < minLoaderTimer) setTimeout(doAction, gap);
	else doAction();
});
