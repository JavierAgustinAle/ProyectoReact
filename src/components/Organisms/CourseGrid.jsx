import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'


const CourseGrid = ({courses}) => (
    <React.Fragment>
        <div className="ed-grid m-grid-3">
            { courses.length === 0 
            ? <h1 className="t3"> Cargando...</h1> 
            : courses.map(c => (              //Hago un map en cursos, cada array que recibo lo pongo en curso.Y de ahi con eso llamo el componente
                <CourseCard key = {c.id}        
                id = {c.id} 
                title={c.title} 
                image={c.image} 
                price={c.price} 
                />
            ))
            }
        </div>
    </React.Fragment>
)

export default withLoader(CourseGrid) ;


// Asi hago para invocar un componente de orden superior (HOC), agrego el nombre del componente en el export