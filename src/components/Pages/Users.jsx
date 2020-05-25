import React, { Component } from 'react'
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid'



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
        return <UsersGrid users={users} />  // Retornamos el componente UserGrid, le mandamos el array con los users que trae la api
    }
}

export default Users


// El componentDidMount usamos axios.get('Url a llamar')