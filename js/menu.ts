const maxNumber = 4;
type objImageSource = {
	source: string;
	alt: string;
	description: string;
};
function getConfig(): Promise<objImageSource[]> {
	return fetch(`resources/menu.json`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	})
		.then((response) => response.json())
		.catch((err) => {
			console.error(err);
			return [];
		});
}

const start = async () => {
	const CocktailListMenu = document.getElementById('CocktailListMenu');
	if (!CocktailListMenu) {
		return;
	}
	const menu = await getConfig();
	let rowNumber = 0;
	let colNumber = 0;
	let row: ReturnType<typeof createRow> = createRow(rowNumber);
	CocktailListMenu.appendChild(row);

	menu.forEach((item) => {
		colNumber += 1;
		if (maxNumber < colNumber) {
			rowNumber += 1;
			row = createRow(rowNumber);
			CocktailListMenu.appendChild(row);
			colNumber = 1; // start from 1 because this is already a new row
		}
		const col = createCol(item, rowNumber, colNumber);
		row.appendChild(col);
	});

	CocktailListMenu.parentNode.appendChild(createDownloadButton(false));
	document
		.getElementById('CocktailList')
		.appendChild(createDownloadButton(true));
};

const createDownloadButton = (isMobile: boolean) => {
	const col = document.createElement('div');
	col.className = `col-12 d-flex justify-content-center ${
		isMobile ? 'only-mobile' : 'not-mobile'
	}`;

	const a = document.createElement('a');
	a.className = `text-center text-white border p-2 border-primary rounded downloadTag mt-sm-2`;
	a.href = '/resources/menu-numeroventi.pdf';
	a.target = '_blank';

	const span = document.createElement('span');
	span.className = `ml-2`;
	span.textContent = `Download menu in PDF`;

	const liquid = document.createElement('liquid');
	liquid.className = `liquid`;

	col.appendChild(a);
	a.appendChild(span);
	a.appendChild(liquid);

	return col;
};

const createRow = (rowNumber: number) => {
	const row = document.createElement('div');
	row.className = `row`;
	return row;
};
const createCol = (
	item: objImageSource,
	rowNumber: number,
	colNumber: number
) => {
	const col = document.createElement('div');
	col.className = `col-12 col-md-6 col-xl-3 menuContainer py-1 px-1`;

	const img = document.createElement('img');
	img.className = 'image';
	img.src = `resources/menu/${item.source}`;
	img.alt = `${item.alt}`;
	img.loading = 'lazy';

	const textDiv = document.createElement('div');
	textDiv.className = 'middle';

	const p = document.createElement('p');
	p.className = 'text';
	//setting this css style solving problem with new line in textContent
	//add \r\n in text everywhere You want for line-break (new line)
	p.setAttribute('style', 'white-space: pre;');
	p.textContent = item.description;
	textDiv.appendChild(p);

	col.appendChild(img);
	col.appendChild(textDiv);
	return col;
};

start();
