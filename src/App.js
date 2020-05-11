import React from 'react';
import './assets/css/App.css';
import './assets/css/styles.scss';

//Importo un componente para poder usarlo aca.
import TarjetaCurso from './components/TarjetaCurso';



function App() {


  return (
    <div className="App">
      <div className="ed-grid m-grid-3">
          <TarjetaCurso />
          <TarjetaCurso />
          <TarjetaCurso />
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