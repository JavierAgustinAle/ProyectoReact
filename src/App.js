import React from 'react';
import './assets/css/App.css';
import './assets/css/styles.scss';

//Importo un componente para poder usarlo aca.
import TarjetaCurso from './components/TarjetaCurso';
import InfoCurso from './components/InfoCurso';



function App() {


  return (
    <div className="App">
        <div className="ed-grid m-grid-3">
          <TarjetaCurso />
          <TarjetaCurso />
          <TarjetaCurso />
          <InfoCurso 
              title="Curso React" 
              image="https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png"
              price="50 USD" 
          />
          <InfoCurso 
              title="FireBase con Android" 
              image="https://edteam-media.s3.amazonaws.com/courses/original/edbb2e26-eafa-4e9e-82eb-13b65714ae33.png"
              price="15 USD" 
          />
          <InfoCurso 
              title="Trabajo Remoto" 
              image="https://edteam-media.s3.amazonaws.com/courses/original/8ab1c233-9f8d-4f75-b0a8-5bd57a528aa0.png"
              price="25 USD" 
          />
          
      </div>
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