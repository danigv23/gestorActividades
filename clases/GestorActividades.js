import { Actividad } from "./Actividad.js";
import * as fs from 'node:fs';

export class GestorActividades {
    #actividades = [];
    #proxID = 1;

    constructor() {
        console.log("fahsdf")
        this.primeras6Act()
    }

    newAct(act) {
        const actividad = new Actividad(this.#proxID, act.tit, act.cat, act.time, act.prio, act.est);
        this.#actividades.push(actividad);
        this.#proxID++;
    };

    get actividades() {
        return this.#actividades
    }

    obActID(id) {
        // Devuelve la actividad segun el id
    }

    modificar(id, datos) {

    }

    eliminar(id) {

    }

    cambiarEstado(id) {

    }

    // SEGUN CLAUDE ESTO DEBERIA ESTAR AQUI
    // consultar(texto, estado, orden): devuelve una lista nueva con las 
    // actividades que cumplen la búsqueda por título y el filtro de estado 
    // a la vez, ordenada por duración ascendente o descendente. No modifica
    //  el array original. Puedes ponerlo aquí o en el archivo del DOM, pero 
    // ponerlo en el gestor cuenta para “consulta sobre el modelo” en la rúbrica.

    calcResumen() {

    }

    primeras6Act() {
        const buffer = fs.readFileSync("../primeras6.csv");
        let contenido = buffer.toString();

        let filas = contenido.split("\n")
        for (const fila of filas) {
            this.newAct(fila);

        }
    }
}