import { useState, useEffect } from 'react'
import axios from 'axios';


const useGetCourses = () => {
    const [courses, setCourses] = useState({})

    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses')
            .then((result) => {
                setCourses(result.data)
            })
    })

    return courses
}

export default useGetCourses;