import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'



class Users extends Component {

    constructor (props) {
        super(props)

        this.state = {
            users: []  //Iniciamos el array vacio, aca vamos a meter lo que trae la API
        }
    }

    /* componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
        .then(result => result.json())              // En muchos casos ya viene lo que queremos en esta promesa
        .then(response => {                     // En este caso debemos hacer el .json y ahi obtenemos el resultado querido
            this.setState({
                users: response                    
            })
        })    
    } */

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {                                           // Con axios no hacen falta las dos promesas, lo que queremos esta en
            this.setState({                                             // axios.data
                users: result.data                              //Obtenemos el result y actualizamos el value del state a result.state
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


// El componentDidMount usamos axios.get('Url a llamar')