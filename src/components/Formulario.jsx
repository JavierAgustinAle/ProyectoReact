import React, { Component } from "react";
import '../assets/css/styles.scss';


class Formulario extends Component {

    constructor(props) {  //Creo una instancia de la clase Formulario. Hago esto cuando recibe PROPS
        super(props)
        
        this.state = {
            nombre: "",
            correo: ""
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="ed-grid">
                    <h1>Formulario de Inscripcion</h1>
                    <form>
                        <div className="ed-grid m-grid-2">
                            
                                    <div className="form__item">
                                        <label htmlFor="nombre"> Nombre Completo</label>
                                        <input 
                                            type="text" 
                                            name="nombre" 
                                            onChange = { e => this.setState({  //Cuando cambie le asigo al state nombre el valor de e
                                                nombre: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="form__item">
                                        <label htmlFor="email"> Correo Electronico</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            onChange = {e => this.setState({
                                                correo: e.target.value
                                            })}
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
}

export default Formulario;

//Usando el onChange y dentro un callback para llamar al setState, puedo cambiar el valor de nombre o correo de forma dinamica,
    //asignandole el valor que va ingresando el usuario en los input