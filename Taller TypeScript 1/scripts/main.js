import { series } from './data.js';
var seriesTable = document.getElementById("series");
var seasonsAverage = document.getElementById("seasons-average");
mostrarSeries(series);
seasonsAverage.innerHTML = "Seasons average: ".concat(promedioTemporadas(series));
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n        <td>").concat(serie.name, "</td> \n        <td>").concat(serie.channel, "</td> \n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        index++;
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
