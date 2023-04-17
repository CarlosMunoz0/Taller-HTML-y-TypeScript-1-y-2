import{ Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let seasonsAverage: HTMLElement = document.getElementById("seasons-average")!;

mostrarSeries(series);

seasonsAverage.innerHTML = `Seasons average: ${promedioTemporadas(series)}`;

function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let index:number =0;
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td> 
        <td>${serie.name}</td> 
        <td>${serie.channel}</td> 
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        index++;
    }
    seriesTable.appendChild(seriesTbody);
}

function promedioTemporadas(series: Serie[]): number {
    let totalTemporadas:number = 0;
    let promedio:number = 0;
    for(let serie of series){
        totalTemporadas += serie.seasons;
    }
    promedio = totalTemporadas/series.length;
    return promedio;
}