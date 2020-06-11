import React from 'react';
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = ({ courses }) => <CourseGrid courses={courses} />

const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
})

export default connect(mapStateToProps, {})(Courses);


// En este caso que no usamos el mapDispatchToProps, podemos pasarlo como {}
