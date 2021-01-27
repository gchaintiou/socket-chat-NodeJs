class Usuarios {
    constructor() {
        this.personas = [];
    }
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;

    }
    getPersona(id) {
        // la función filter regresa un sub-arreglo con los elementos que cumplen la condición de filtrado (persona.id === id)
        // como el arreglo resultante tendrá 1 sólo elemento (si es que lo encuentra), por eso tomo la posición [0]
        /*
        let persona = this.personas.filter(persona =>{
            // la siguiente es la condición de filtrado
            return persona.id === id
        })[0];
        */
        // la función anterior se puede resumir de la siguiente manera:
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasxSala(sala) {
        // Obtener las personas que están en una sala de chat
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        // sobrescribo el arreglo personas por el resultado de filtrar todos los que tienen id distinto al parámetro
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }
}
module.exports = {
    Usuarios
}