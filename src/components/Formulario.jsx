import React, { Component } from "react";


class Formulario extends Component {

    constructor(props) {  //Creo una instancia de la clase Formulario. Hago esto cuando recibe PROPS
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <div className="ed-grid">
                    <h1>Soy un formulario</h1>
                    <form>
                            <div className="form__item">
                                <label htmlFor="nombre"> Nombre Completo</label>
                                <input type="text" name="nombre"></input>
                            </div>
                            <div className="form__item">
                                <label htmlFor="email"> Correo Electronico</label>
                                <input type="email" name="email"></input>
                            </div>
                            <div className="form__item">
                                <input className="button full" type="submit" value="ENVIAR" />
                            </div>
                     </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Formulario;