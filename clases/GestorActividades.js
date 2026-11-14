class GestorActividades {
    #actividades = [];
    #proxID = 1;

    constructor() {
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

        //Creamos las 6 primeras actividades
    }




}