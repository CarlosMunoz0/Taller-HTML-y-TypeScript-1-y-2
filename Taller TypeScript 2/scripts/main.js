import { series } from './data.js';
var seriesTable = document.getElementById("series");
var seasonsAverage = document.getElementById("seasons-average");
var card = document.getElementById("miCard");
var elementosClickeables = document.querySelectorAll(".clickable");
elementosClickeables.forEach(function (elemento) {
    elemento.addEventListener('click', function (event) {
        var serieName = elemento.textContent;
        var serieBuscada = series.filter(function (serie) { return serie.name === serieName; });
        mostrarInfo(serieBuscada[0]);
    });
});
mostrarSeries(series);
seasonsAverage.innerHTML = "Seasons average: ".concat(promedioTemporadas(series));
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n        <td class=\"clickable\" style=\"color: blue;\">").concat(serie.name, "</td> \n        <td>").concat(serie.channel, "</td> \n        <td>").concat(serie.seasons, "</td>");
        var nombreSerieTd = trElement.querySelector('.clickable');
        nombreSerieTd.addEventListener('click', function () {
            var serieBuscada = series.filter(function (s) { return s.name === serie.name; });
            mostrarInfo(serieBuscada[0]);
        });
        seriesTbody.appendChild(trElement);
        index++;
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
function promedioTemporadas(series) {
    var totalTemporadas = 0;
    var promedio = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.seasons;
    }
    promedio = totalTemporadas / series.length;
    return promedio;
}
function mostrarInfo(serie) {
    card.innerHTML = "<img src=\"".concat(serie.image, "\" class=\"card-img-top\">\n    <div class=\"card-body\"><h1 class=\"card-title\">").concat(serie.name, "</h1>\n    <p class=\"card-text\">").concat(serie.synopsis, "</p>\n    <a href=\"").concat(serie.link, "\"> ").concat(serie.link, " /a> </div>");
}
