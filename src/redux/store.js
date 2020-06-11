import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const initialStore = {
    cart: []
}
const initialCourse = {
    courses: []
}

const cartReducer = (state = initialStore, action) => {

    if (action.type === ADD_TO_CART) {                      // Si nos llega esta accion realizamos esto,retornamos lo que ya tenga el state
        if (state.cart.find(a => a === action.data)) {      // mas el nuevo dato que llega en data, lo concatenamos a lo que ya hay en cart
            return state                                   // si el id que llega, ya esta en el state, no hace nada.
        } else {
            return {
                ...state,
                cart: state.cart.concat(action.data)
            }
        }
    }
    if (action.type === DELETE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== action.data)
        }
    }

    return state
}

const coursesReducer = (state = initialCourse, action) => {             // Conviene hacer distintos Reducer para distintos temas
    if (action.type === GET_COURSE_LIST) {                         // (uno para cursos, otro para el carrito)
        return {
            ...state,
            courses: action.data
        }
    }
    return state
}


export default createStore(combineReducers({ cartReducer, coursesReducer }), composeWithDevTools(applyMiddleware(thunk)));




// Creamos el REDUCER, en caso de que el state sea undifined le colocamos el valor del initialStore.

// Exportamos la funcion que importamos (createStore) y le pasamos el reducer.
// Esto significa que el store que estamos creando se va a crear con el state que le estamos pasando.


// Como para cada tema hacemos un reducer distinto, a la hora de exportar el createStore, tengo que usar
    // el combineReducers() adentro paso todos los reducers creados, rootReducer y coursesReducer