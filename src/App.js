import React from 'react';
import './assets/css/App.css';
import './assets/css/styles.scss';

//Importo un componente para poder usarlo aca.
import Formulario  from './components/Formulario';
import InfoCurso from './components/InfoCurso';

const cursos = [
  {
    "title": "React.js para principiantes",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price": 30
  },
  {
    "title": "FireBase para principiantes",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/edbb2e26-eafa-4e9e-82eb-13b65714ae33.png",
    "price": 30
  },
  {
    "title": "React.js Intermedio",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/original/4d73569d-ccdb-4e6d-8d94-ae8814c39764.jpg",
    "price": 40
  }
]

function App() {


  return (
    <div className="App">
        <div className="ed-grid m-grid-3">
          {
            cursos.map( cursoQueRecibo => 
              <InfoCurso title={cursoQueRecibo.title} image={ cursoQueRecibo.image} price={cursoQueRecibo.price} key={cursoQueRecibo.image}  />
            )
              //Hago un map en cursos, cada array que recibo lo pongo en curso.Y de ahi con eso llamo el componente
          }
        </div>
        <Formulario nameForm={"De Clase"}/>
    </div>
  );
}

export default App;


//REGLAS JSX

//1: Toda etiqueta debe cerrarse.
//2: Los componentes deben devolver un solo elemento padre.
//3: Apoyarse de los <React.Fragment> hijos </React.Fragment> cuando necesito devolver dos elementos.
//4: <img> siempre se cierra <img src=""></img>
//5: Para darle clase a las etiquetas HTML uso className="".
//6: A las img hay que ponerles un alt <img src="" alt="">