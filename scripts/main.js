import { series } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var card = document.getElementById('card');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n    <td><button class=\"link\" id = ").concat(c.id, " onClick = \"changeCard(event)\">").concat(c.name, "</button></td>\n    <td>").concat(c.channel, "</td>\n    <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var i = average(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"6\">Seasons average: \n  ".concat(i, "</td>");
    seriesTbody.appendChild(trElement);
}
series.forEach(function (serie) {
    var elem = document.getElementById(serie.id.toString());
    if (elem != null) {
        elem.onclick = function (event) {
            changeCard(event);
        };
    }
});
function average(series) {
    var sum = 0;
    series.forEach(function (c) {
        sum += c.seasons;
    });
    return Math.round((sum / series.length) * 100) / 100;
}
function changeCard(e) {
    var id = e.target.id;
    var c = getSerie(id);
    var divElement = document.createElement("div");
    divElement.innerHTML = "<img class=\"card-img-top\" src= ".concat(c.image, " alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\"> ").concat(c.name, " </h5>\n    <p class=\"card-text\">").concat(c.description, ".</p>\n    <a href=\"#\" class=\"card-link\">").concat(c.url, "</a>\n  </div>");
    card.appendChild(divElement);
    card.replaceChild(divElement, card.childNodes[0]);
}
function getSerie(id) {
    var serie1;
    series.forEach(function (c) {
        if (c.id.toString() == id) {
            serie1 = c;
        }
    });
    return serie1;
}
