class Actividad {
    id
    titulo
    categoria
    descripcion
    tiempo
    prioridad
    estado = 1


    constructor(titulo, descripcion, categoria, tiempo, prioridad, estado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.prioridad = prioridad;
        this.estado = estado;
    }

    acabarAct() {
        if (this.tiempo <= 0) {
            this.estado = 0;
        };
    };

    editarActividad() {

    }
}