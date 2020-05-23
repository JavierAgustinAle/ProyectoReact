import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'



class Users extends Component {

    constructor (props) {
        super(props)

        this.state = {
            users: []  //Iniciamos el array vacio, aca vamos a meter lo que trae la API
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
        .then(result => result.json())              // En muchos casos ya viene lo que queremos en esta promesa
        .then(response => {                     // En este caso debemos hacer el .json y ahi obtenemos el resultado querido
            this.setState({
                users: response                    //Obtenemos el response y actualizamos el value del state
            })
        })    
    }



    render() {
        const { users } = this.state
        return(
            <React.Fragment>
                <div className="ed-grid">
                    <h1>Usuarios</h1>
                    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                        {
                            users.map(u => ( 
                                <UserCard 
                                   key={u.id} 
                                   name={u.name} 
                                   username ={u.username} 
                                   email={u.email}/> 
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Users


// El componentDidMount hace un fetch('Url que llamamos', {method: 'get'})
// La url y el metodo que vamos a usar, ej GET, POST.

// Uso el then para tomar lo que recibo,( similar al suscribe)