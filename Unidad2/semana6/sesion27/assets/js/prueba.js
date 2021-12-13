
import {estadoEstudiante} from './modulo.js';

let nota;
do{
nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota);   
}while(nota < 0 ||  Number.isInteger(nota)==false); 