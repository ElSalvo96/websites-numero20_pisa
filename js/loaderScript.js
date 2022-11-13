document.addEventListener('DOMContentLoaded', (event) => {
	setTimeout(() => {
		document.getElementById('content').classList.remove('invisible');
		document.getElementById('loader').remove();
		document.getElementById('loaderStylesheet').remove();
		document.getElementById('loaderScript').remove();
	}, 2000);
});
