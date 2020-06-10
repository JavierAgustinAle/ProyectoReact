import React from 'react'
import { connect } from 'react-redux'

// Pongo como las props que recibo la variable que lleno en mapStateToProps
const CartCounter = ({ cartLength }) => (
    <li>
        <button className="button tiny ghost">
            {`Carrito ${cartLength.length}`}
        </button>
    </li>
)

const mapStateToProps = state => (
    {
        cartLength: state.cart   //En cartLenght guardo el valor que tiene el store cart(Esste caso es un array )
    }
)



export default connect(mapStateToProps)(CartCounter);

// mapStateToProps --> Trae el state global y lo convertimos a props para usarlo en este componente
// esta const recibe el state global de la app y lo convierte a props, asi este componente lo puede leer