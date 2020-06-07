import { ADD_TO_CART } from "./actions"


// El id es lo que recibiria esta function.Devuelve un objeto
const addToCart = id => ({
    type: ADD_TO_CART,
    data: id
})




export { addToCart }