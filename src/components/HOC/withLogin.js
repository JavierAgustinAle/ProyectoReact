import React, { Component } from 'react'

const withLogin = (WrappedComponent) => {

    return class withLogin extends Component {
        
        constructor(props) {
            super(props)

            this.state = {
                logged: false
            }

            this.verifyUserLogin = this.verifyUserLogin.bind(this)  //Hacemos bind del state 
        }

        verifyUserLogin() {
            setTimeout (() => {
                //Creamos un numero random, 1 o 0 porque no tenemos back que nos diga si esta loggeado o no
                const logged = Math.round(Math.random())  

                this.setState({ logged: logged === 1}) // Si es 1 queda true, sino false
            })
        }

        componentDidMount() {       // Cuando se monte el componente llamo al verify
            this.verifyUserLogin()
        }
        render() { 
            //Lo que vamos a devolver
            return <WrappedComponent {...this.props}      //LE devuelvo las mismas props que ya tenia el componente      
                logged = {this.state.logged} />         //Devulevo una prop mas que es la que cree aca, logged
        }
    }
}

export default withLogin;