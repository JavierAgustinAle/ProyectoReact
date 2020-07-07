import React from 'react';
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

//import CoursesContext from '../Context/CoursesContext';
//import { useContext } from 'react'


const Courses = ({ courses }) => <CourseGrid courses={courses} />

const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
})

export default connect(mapStateToProps, {})(Courses);


// En este caso que no usamos el mapDispatchToProps, podemos pasarlo como {}


//              USANDO CONTEXT API


/*
    const CoursesConContext = () => {

        const { courses } = useContext(CoursesContext)

        return (
            <CourseGrid courses={courses} />
        )

    }

    export default CoursesConContext;
*/


// Este fragmento comentado es para ver como se haria usando Context Api y no Redux(como usa la parte sin comentar)
// Con la costante que creamos y el Hook useContext, ponemos el valor que tiene CoursesContext dentro de la const.
    // Como destructuramos nosotros solo tomamos el valor de los Courses del context