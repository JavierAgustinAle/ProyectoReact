import React, { Component } from "react"

//                 Value custom     Componente
const withLoader = (propsValue) => (WrappedComponent) => {

    return class WithLoader extends Component {

        render() {
            return  this.props[propsValue].length === 0             // PropsValue es un string con el nombre del atributo del componente
            ? <h1 className="t3"> Cargando...</h1>                  // Son las props del componente que recibe.
            :  <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;

//Creamos una constante que recibe un componente, y luego devuelve otro componente, por eso
// creamos el return + clase