import React, { Component } from "react";
import '../assets/css/styles.scss';


class Formulario extends Component {

    constructor(props) {  //Creo una instancia de la clase Formulario. Hago esto cuando recibe PROPS
        super(props)
        
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this) //Esto hay que hacerlo si o si!!
        this.cambiarMail = this.cambiarMail.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({                 //Cuando cambie le asigo al state nombre el valor de e
            nombre: e.target.value
        })
    }

    cambiarMail(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        return(
            <React.Fragment>
                <div className="ed-grid">
                <h1>Formulario {this.props.nameForm}</h1>
                <h4>Fecha Actual en Segundos: {Math.ceil(this.state.fecha / 1000)}</h4>
                    <form id="form">
                        <div className="ed-grid m-grid-2">
                            <div className="form__item">
                                <label htmlFor="nombre"> Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    onChange = { this.cambiarNombre} //Llamo al metodo que se encarga
                                />
                            </div>
                            <div className="form__item">
                                <label htmlFor="email"> Correo Electronico</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange = {this.cambiarMail}
                                />
                            </div>
                        </div>
                    </form>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu email es: ${this.state.correo}`}</span>
                </div>
                
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.intervaloFecha = setInterval(() =>{
            this.cambiarFecha()
        }, 1000)
    }  
        // Este metodo lo puedo usar para cuando quiero hacer algo luego de que ya se renderizo el DOM. 
        // Se pone despues del render()

//--------------------------------------------------------------------------------------------------------------

    // componentDidUpdate (prevProps, prevState) { 
    //     console.log(prevProps)
    //     console.log(prevState)
    //     console.log('---------------')
    // }
        //Metodo que se ejecuta al actualizar. 
        // Usando el prevProps y el prevState podemos ver el valor de ambos antes de que se actualice

//------------------------------------------------------------------------------------------------------------

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
        // Metodo que se ejecuta al desmontar el componente.
        // En este caso lo uso para matar el intervalo

}

export default Formulario;

//Usando el onChange y dentro un callback para llamar al setState, puedo cambiar el valor de nombre o correo de forma dinamica,
    //asignandole el valor que va ingresando el usuario en los input