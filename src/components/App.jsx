import React from 'react';
import '../assets/css/App.css';
import '../assets/css/styles.scss';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from '../redux/store'

const App = () => (
  <Provider store={store} >
    <AppRoutes />
  </Provider>

)

export default App;


//REGLAS JSX

//1: Toda etiqueta debe cerrarse.
//2: Los componentes deben devolver un solo elemento padre.
//3: Apoyarse de los <React.Fragment> hijos </React.Fragment> cuando necesito devolver dos elementos.
//4: <img> siempre se cierra <img src=""></img>
//5: Para darle clase a las etiquetas HTML uso className="".
//6: A las img hay que ponerles un alt <img src="" alt="">

//ROUTE 
  // path es la URL que aparece,  y luego nombro el componente.
  // El Route que no lleva path, ahi pongo un componente o 
  // lo que quiero mostrar cuando se ingresa una url que no existe en la pagina. Es la por defecto.

//SWITCH
  // Para que no se quede pegado el route por defecto cuando cambio.

// Mandar Parametros con Route, es path="cursos/:id" id es el nombre que le damos al parametro que vamos a mandar.
  // La ruta que tiene parametros va primero que la misma que no tiene, porque usamos el shwitch y es el primero que coincide.