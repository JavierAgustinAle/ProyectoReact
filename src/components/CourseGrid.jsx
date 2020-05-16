import React from 'react';
import '../assets/css/styles.scss';
import InfoCurso from './InfoCurso';

const cursos = [
    {
      "id": 1,
      "title": "React.js para principiantes",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
      "price": 30
    },
    {
      "id": 2,
      "title": "FireBase para principiantes",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/edbb2e26-eafa-4e9e-82eb-13b65714ae33.png",
      "price": 30
    },
    {
      "id": 3,
      "title": "React.js Intermedio",
      "image": "https://edteam-media.s3.amazonaws.com/blogs/original/4d73569d-ccdb-4e6d-8d94-ae8814c39764.jpg",
      "price": 40
    }
  ]


const CourseGrid = () => (

    <div className="ed-grid m-grid-3">
          {
            cursos.map(c => (
                <InfoCurso key = {c.id} 
                    id = {c.id} 
                    title={c.title} 
                    image={c.image} 
                    price={c.price} 
                />
            ))
            
              //Hago un map en cursos, cada array que recibo lo pongo en curso.Y de ahi con eso llamo el componente
          }
    </div>
)

export default CourseGrid;