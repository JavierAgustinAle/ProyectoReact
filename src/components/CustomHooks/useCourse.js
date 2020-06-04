import { useState, useEffect } from 'react'
import axios from 'axios';

const useCourse = id => {               //Recibo un id


    //El estado    //Funcion que estado
    const [stateCourse, setStateCourse] = useState({})

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses/${id}`)
            .then((result) => setStateCourse(result.data));
    }, [id])  // Con esta regal [] le indicamos que se ejecute una sola vez(copiando el componentDidMount)

    return stateCourse  //  Devolvemos en stateCouse lo que es el result de la consulta a la api

}

export default useCourse;