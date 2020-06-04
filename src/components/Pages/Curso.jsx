import React, { useState } from 'react'

import useCourse from '../CustomHooks/useCourse';
import useCounter from '../CustomHooks/useCounter'


const Curso = ({ match }) => {


  const [stateComment, setCommentState] = useState('Sin Datos')  //Aca no recibe un objeto sino un string asi que le puedo dar valor inicial

  const course = useCourse(match.params.id)   // Llamo al hook y lo que devuelve lo pongo en una const(este hook devuelve array)

  const counterHook = useCounter()  //En esta constante pongo toda la logica del hook(tanto la variable como las function)

  const setComment = e => {
    setCommentState(e.target.value)
  }

  return (
    <React.Fragment>
      {
        course ?
          (
            <div className="ed-grid">
              <div className="l-block">
                <h1 className="m-cols-3">{course.title}</h1>
                <img className="m-cols-1" src={course.image} alt={course.title}></img><br /><br />
                <p className="m-cols-2">{`Precio: ${course.price} USD`}</p>
                <p className="ed-grid">{`Dictado por: ${course.profesor}`}</p>
              </div>
              <div>
                <h2>Escribe tu comentario</h2>
                <input type="text" placeholder="Escribe..." onChange={setComment.bind(this)} /><br />
                <p> {stateComment} </p>
                <p>{`El puntaje del curso es ${counterHook.count} estrellas`}</p><br></br>
                <button onClick={counterHook.increase} >Subir puntaje</button> | |
                <button onClick={counterHook.decrease} >Disminuir puntaje</button>

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

/*Todo esto no lo uso mas porque estoy usando el custom hooks useCourse.js

 const [stateCourse, setStateCourse] = useState({})   // Puedo iniciar el estado vacio
useEffect(() => {
  axios.get(`http://my-json-server.typicode.com/JavierAgustinAle/json-db/courses/${match.params.id}`)
    .then((result) => setStateCourse(result.data));
}, [match.params.id])  // Con esta regal [] le indicamos que se ejecute una sola vez(copiando el componentDidMount)
*/