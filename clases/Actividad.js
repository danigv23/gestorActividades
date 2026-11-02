class Actividad {
    id
    titulo
    categoria
    descripcion
    tiempo
    prioridad
    estado = 1


    constructor(titulo, categoria, descripcion, tiempo, prioridad) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.prioridad = prioridad;
    }

    acabarAct() {
        if (this.tiempo <= 0) {
            this.estado = 0;
        }
    }

    editarActividad() {

    }
}