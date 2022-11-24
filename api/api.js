class Api {

    static obtenerHora = _ => {
        const hora = new Date().getHours()
        return hora
    }
    static random = (min, max) => {
        let range = (max - min) + 1;
        return parseInt(Math.random() * range) + min;
    }

    static validarQuery = (num, op) => {

        if (num === undefined || op === undefined) {
            return false
        }
        return true
    }



}



export default Api