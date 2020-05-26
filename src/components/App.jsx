import React from 'react';
import '../assets/css/App.css';
import '../assets/css/styles.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Importo un componente para poder usarlo aca.
import Form  from './Pages/Form';
import Courses from './Pages/Courses';
import Curso from './Pages/Curso';
import MainMenu from './Organisms/MainMenu';
import Home from './Pages/Home';
import Users from './Pages/Users';


function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component = { Home} />

        <Route path="/cursos/:id" exact component = { Curso } />
        <Route path="/cursos" exact component = { Courses } />

        <Route path="/usuarios" exact component ={ Users } /> 
        
        <Route path="/inscripcion" exact component ={() => <Form nameForm={"de Log In"} />} />

        <Route>
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada.</span>
          </div>
        </Route> 

      </Switch>
    </Router>
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

//ROUTE 
  // path es la URL que aparece,  y luego nombro el componente.
  // El Route que no lleva path, ahi pongo un componente o 
  // lo que quiero mostrar cuando se ingresa una url que no existe en la pagina. Es la por defecto.

//SWITCH
  // Para que no se quede pegado el route por defecto cuando cambio.

// Mandar Parametros con Route, es path="cursos/:id" id es el nombre que le damos al parametro que vamos a mandar.
  // La ruta que tiene parametros va primero que la misma que no tiene, porque usamos el shwitch y es el primero que coincide.