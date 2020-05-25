import React, { Component } from "react"

const withLoader = (WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;

//Creamos una constante que recibe un componente, y luego devuelve otro componente, por eso
// creamos el return + clase