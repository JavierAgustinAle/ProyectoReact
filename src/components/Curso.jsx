import React from 'react'


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
      "image": "https://edteam-media.s3.amazonaws.com/specialities/original/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
      "price": 40
    }
  ]


const Curso = ({ match }) => {

    const cursoElegido = cursos.filter(c => c.id === parseInt(match.params.id))[0] //Recivo un string, lo paso a int en este caso
    
    return(
        <React.Fragment>
            {
                cursoElegido ? 
                    (
                        <div className="ed-grid">
                            <h1 className="m-cols-3">{cursoElegido.title}</h1>
                            <img className="m-cols-2" src={cursoElegido.image} alt={cursoElegido.title}></img><br/><br/>
                            <p className="ed-grid">{`Precio: ${cursoElegido.price} USD`}</p>
                        </div>
                    ) :
                    <h1 className="ed-grid">ERROR: El curso elegido no existe.</h1>
            }
        </React.Fragment>
    )
}


export default Curso;


//  En una variable( cursoElegido), filtro array cursos y veo si alguno tiene atributo id igual al que se recibio por parametros.
    // Como en la const se va a gurdar el array que coincida, le guardo la posicion [0]