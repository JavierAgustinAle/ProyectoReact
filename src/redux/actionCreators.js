import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions"
import Axios from 'axios'


// El id es lo que recibiria esta function.Devuelve un objeto
const addToCart = id => ({
    type: ADD_TO_CART,
    data: id
})

const deleteFromCart = id => ({
    type: DELETE_FROM_CART,
    data: id
})

const getCourseList = () => dispatch => {                                               // Creamos esta accion, en vez de retornar un objeto 
    Axios.get('https://my-json-server.typicode.com/JavierAgustinAle/json-db/courses')   // directamente, primero tenemos que hacer la peticion al 
        .then(result => {                                                               // servidor y dsps retornar el objeto
            return dispatch({                                                               // MIDDLEWARE
                type: GET_COURSE_LIST,
                data: result.data               // El result.data nos trae el listado de cursos
            })
        })
}




export { addToCart, deleteFromCart, getCourseList }