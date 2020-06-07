import { createStore } from 'redux'
import { ADD_TO_CART } from './actions';


const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, action) => {

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


    return state
}

export default createStore(rootReducer);

// Creamos el REDUCER, en caso de que el state sea undifined le colocamos el valor del initialStore.

// Exportamos la funcion que importamos (createStore) y le pasamos el reducer.
// Esto significa que el store que estamos creando se va a crear con el state que le estamos pasando.