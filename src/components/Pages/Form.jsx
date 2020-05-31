import React, { Component } from 'react';
import '../../assets/css/styles.scss';
import withLogin from '../HOC/withLogin';

class Form extends Component {
    constructor(props) {
        //Creo una instancia de la clase Formulario. Hago esto cuando recibe PROPS
        super(props);

        this.state = {
            name: '',
            mail: '',
            //date: new Date()
        };

        this.changeName = this.changeName.bind(this); //Esto hay que hacerlo si o si!!
        this.changeMail = this.changeMail.bind(this);
        //this.changeDate = this.changeDate.bind(this)
    }

    changeName(e) {
        this.setState({
            //Cuando cambie le asigo al state nombre el valor de e
            name: e.target.value,
        });
    }

    changeMail(e) {
        this.setState({
            mail: e.target.value,
        });
    }

    /*changeDate() {
        this.setState({
            date: new Date()
        })
    }*/

    render() {
        return (
            <React.Fragment>
                <div className='ed-grid'>
                    {this.props.logged ? (
                        <div>
                            <h1>Ya se encuentra conectado</h1>
                        </div>
                    ) : (
                        <div>
                            <h1>Formulario {this.props.nameForm}</h1>
                            <form id='form'>
                                <div className='ed-grid m-grid-2'>
                                    <div className='form__item'>
                                        <label htmlFor='nombre'>
                                            {' '}
                                            Nombre Completo
                                        </label>
                                        <input
                                            type='text'
                                            name='nombre'
                                            onChange={this.changeName} //Llamo al metodo que se encarga
                                        />
                                    </div>
                                    <div className='form__item'>
                                        <label htmlFor='email'>
                                            {' '}
                                            Correo Electronico
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={this.changeMail}
                                        />
                                    </div>
                                </div>
                            </form>
                            <h2>{`Hola ${this.state.name}`}</h2>
                            <span>{`Tu email es: ${this.state.mail}`}</span>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }

    /*componentDidMount() {
        this.intervaloFecha = setInterval(() =>{
            this.changeDate()
        }, 1000)
    }  */
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

    /*componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }*/
    // Metodo que se ejecuta al desmontar el componente.
    // En este caso lo uso para matar el intervalo
}

export default withLogin(Form);

//Usando el onChange y dentro un callback para llamar al setState, puedo cambiar el valor de nombre o correo de forma dinamica,
//asignandole el valor que va ingresando el usuario en los input
