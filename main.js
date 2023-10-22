"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSeries_js_1 = require("./dataSeries.js");
const seriesTbody = document.getElementById('series');
const card = document.getElementById('card');
renderSeriesInTable(dataSeries_js_1.series);
function renderSeriesInTable(series) {
    console.log(series);
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
    <td><button class="link" id = ${c.id} onClick = "changeCard(event)">${c.name}</button></td>
    <td>${c.channel}</td>
    <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
    let i = average(series);
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="6">Seasons average: 
  ${i}</td>`;
    seriesTbody.appendChild(trElement);
}
dataSeries_js_1.series.forEach(serie => {
    let elem = document.getElementById(serie.id.toString());
    if (elem != null) {
        elem.onclick = (event) => {
            changeCard(event);
        };
    }
});
function average(series) {
    let sum = 0;
    series.forEach(c => {
        sum += c.seasons;
    });
    return Math.round((sum / series.length) * 100) / 100;
}
function changeCard(e) {
    let id = e.target.id;
    let c = getSerie(id);
    let divElement = document.createElement("div");
    divElement.innerHTML = `<img class="card-img-top" src= ${c.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"> ${c.name} </h5>
    <p class="card-text">${c.description}.</p>
    <a href="#" class="card-link">${c.url}</a>
  </div>`;
    card.appendChild(divElement);
    card.replaceChild(divElement, card.childNodes[0]);
}
function getSerie(id) {
    let serie1;
    dataSeries_js_1.series.forEach(c => {
        if (c.id.toString() == id) {
            serie1 = c;
        }
    });
    return serie1;
}
