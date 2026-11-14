class Actividad {
    id
    titulo
    categoria
    tiempo
    prioridad
    estado = 1

    constructor(id, titulo, categoria, tiempo, prioridad, estado) {
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.tiempo = tiempo;
        this.prioridad = prioridad;
        this.estado = estado;
    }

    cambiarEstado() {
        // Modifica de pendiente a acabas
    };

    completada() {
        // Devuelve true o false en funcion de si esta completada o no
    }

    actualizarDatos() {
        // Permite cambiar los datos de la actividad (TODOS LOS DATOS MENOS EL ID)
    }

    validarDatos() {
        // DEBERIA DE SER UN METODO ESTATICO
        // Nos permite valdiar los datos antes de crear una instancia de ACTIVIDAD
    }

}