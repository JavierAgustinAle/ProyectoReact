import React, { Component } from 'react';
import '../../assets/css/styles.scss';
import CourseGrid from '../Organisms/CourseGrid'
import axios from 'axios'

class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []  //Iniciamos el array vacio, aca vamos a meter lo que trae la API
        }
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses')
            .then((result) => {
                this.setState({
                    courses: result.data
                })
            })
    }

    render() {
        const { courses } = this.state;
        return (
            <div>
                <CourseGrid courses={courses} />
            </div>
        )
    }

}

export default Courses;
