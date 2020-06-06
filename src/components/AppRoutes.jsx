import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importo componentes para poder usarlos aca.
import Form from './Pages/Form';
import Courses from './Pages/Courses';
import Curso from './Pages/Curso';
import MainMenu from './Organisms/MainMenu';
import Home from './Pages/Home';
import Users from './Pages/Users';

const AppRoutes = () => (

    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/cursos/:id" exact component={Curso} />
            <Route path="/cursos" exact component={Courses} />

            <Route path="/usuarios" exact component={Users} />

            <Route path="/inscripcion" exact component={() => <Form nameForm={"de Log In"} />} />

            <Route>
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Pagina no encontrada.</span>
                </div>
            </Route>

        </Switch>
    </Router>
)

export default AppRoutes;