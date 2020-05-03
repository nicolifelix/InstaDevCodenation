import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

//importando os componentes criados
import Topbar from './components/Topbar';
import Feed from './routes/Feed';
import Users from './routes/Users';
import NewUser from './routes/NewUser';
import Profile from './routes/Profile';

//pensar nos estados
//pegar a lista de usuarios
//guardar a lista de usuarios no estado de APP
//iterar sobre a lsta de usuários pegando os ids e fazer requisiçoes do post de cada um
//guardar s lista de usuarios no estado dE APP

class App extends React.Component{ //component classe pai
  render(){ //metodo da classe component


    return (
      <BrowserRouter>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

         <Route path="/users/:username"> 
            <Profile />
          </Route> 

          <Route path="/newuser">
            <NewUser />
          </Route>
        </Switch>
        
      </BrowserRouter>
      
    )
  }
}

export default App;