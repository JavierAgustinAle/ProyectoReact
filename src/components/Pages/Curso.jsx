import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Curso = ({ match }) => {

  const [stateCourse, setStateCourse] = useState({})   // Puedo iniciar el estado vacio
  const [stateComment, setCommentState] = useState('Sin Datos')  //Aca no recibe un objeto sino un string asi que le puedo dar valor inicial

  useEffect(() => {
    axios.get(`http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses/${match.params.id}`)
      .then((result) => setStateCourse(result.data));
  }, [match.params.id])  // Con esta regal [] le indicamos que se ejecute una sola vez(copiando el componentDidMount)

  const setComment = e => {
    setCommentState(e.target.value)
  }

  return (
    <React.Fragment>
      {
        stateCourse ?
          (
            <div className="ed-grid">
              <div className="l-block">
                <h1 className="m-cols-3">{stateCourse.title}</h1>
                <img className="m-cols-1" src={stateCourse.image} alt={stateCourse.title}></img><br /><br />
                <p className="m-cols-2">{`Precio: ${stateCourse.price} USD`}</p>
                <p className="ed-grid">{`Dictado por: ${stateCourse.profesor}`}</p>
              </div>
              <div>
                <h2>Escribe tu comentario</h2>
                <input type="text" placeholder="Escribe..." onChange={setComment.bind(this)} /><br />
                <p> {stateComment} </p>
              </div>
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