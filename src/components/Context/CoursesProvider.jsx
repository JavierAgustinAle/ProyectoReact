import React from 'react'
import { Component } from 'react';
import CoursesContext from './CoursesContext';
import Axios from 'axios';


class CoursesProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        Axios.get('http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses')
            .then(result => this.setState({
                courses: result.data
            }))
    }

    render() {
        return (
            // Retorna el provedor del context

            <CoursesContext.Provider value={this.state}>
                {this.props.children}
            </CoursesContext.Provider>


        )
    }

}

export default CoursesProvider;

// Dentro del provider renderizo los hijos, que usaran la data que provee el provider.

// En value recibe el estado inicial que esta definido en el Context (puede que se haya dejado estado inicial vacio)