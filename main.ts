import { Serie } from "./Serie.js";
import { series } from "./dataSeries.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const card: HTMLElement = document.getElementById('card')!;
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
    <td><button class="link" id = ${c.id} onClick = "changeCard(event)">${c.name}</button></td>
    <td>${c.channel}</td>
    <td>${c.seasons}</td>`
    seriesTbody.appendChild(trElement);
  });
  let i = average(series);
  let trElement = document.createElement("tr");
  trElement.innerHTML= `<td colspan="6">Seasons average: 
  ${i}</td>`;
  seriesTbody.appendChild(trElement);
}

series.forEach(serie => {
  let elem = document.getElementById(serie.id.toString());
  if (elem != null){
      elem.onclick = (event) => {
          changeCard(event);
      }
  }
})

function average(series: Serie[]): number {
  let sum = 0;
  series.forEach(c => {
    sum += c.seasons;
  });
  return Math.round((sum/series.length) * 100) / 100;
}

function changeCard(e: any): void {
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

function getSerie(id:string):Serie{
  let serie1!: Serie;
  series.forEach(c => {
    if(c.id.toString() == id){
      serie1 = c;
    }
  });
  return serie1;
}