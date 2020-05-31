import React, { Component } from 'react';
import '../../assets/css/styles.scss';
import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid';

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses')
            .then((result) =>
                this.setState({
                    courses: result.data,
                })
            );
    }

    render() {
        const { courses } = this.state;

        return <CourseGrid courses={courses} />; // Enviamos el array que viene de la API
    }
}

export default Courses;
