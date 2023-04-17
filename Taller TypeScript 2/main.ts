import{ Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let seasonsAverage: HTMLElement = document.getElementById("seasons-average")!;
let card: HTMLElement = document.getElementById("miCard")!;
let elementosClickeables = document.querySelectorAll(".clickable");

elementosClickeables.forEach(elemento => {
    elemento.addEventListener('click', (event) => {
        let serieName = elemento.textContent;
        let serieBuscada: Serie[] = series.filter(serie => serie.name === serieName);
        mostrarInfo(serieBuscada[0]);
    });
  });

mostrarSeries(series);

seasonsAverage.innerHTML = `Seasons average: ${promedioTemporadas(series)}`;

function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let index:number =0;
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td> 
        <td class="clickable" style="color: blue;">${serie.name}</td> 
        <td>${serie.channel}</td> 
        <td>${serie.seasons}</td>`;

        let nombreSerieTd: HTMLElement = trElement.querySelector('.clickable')!;
        nombreSerieTd.addEventListener('click', () => {
            let serieBuscada: Serie[] = series.filter(s => s.name === serie.name);
            mostrarInfo(serieBuscada[0]);
        });


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



function mostrarInfo(serie: Serie): void{
    card.innerHTML = `<img src="${serie.image}" class="card-img-top">
    <div class="card-body"><h1 class="card-title">${serie.name}</h1>
    <p class="card-text">${serie.synopsis}</p>
    <a href="${serie.link}"> ${serie.link} /a> </div>`;
}