"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const maxNumber = 4;
function getConfig() {
    return fetch(`menu.json`, {
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
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const CocktailListMenu = document.getElementById('CocktailListMenu');
    if (!CocktailListMenu) {
        return;
    }
    const menu = yield getConfig();
    let rowNumber = 0;
    let colNumber = 0;
    let row = createRow(rowNumber);
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
});
const createRow = (rowNumber) => {
    const row = document.createElement('div');
    row.className = `row`;
    return row;
};
const createCol = (item, rowNumber, colNumber) => {
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
