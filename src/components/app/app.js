import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context'
import VehiclePage from '../pages/vehicles-page'
import PlanetPage from '../pages/planets-page'
import PeoplePage from '../pages/people-page'
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import VehicleDetails from '../sw-components/vehicle-details';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';
import 'animate.css/animate.css'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Fader = styled.div`animation: 6s ${keyframes`${fadeIn}`}`;

export default class App extends Component {
  state = {
isLoggedIn : false
  }
  onLogin = () => {
    this.setState({
      isLoggedIn : true
    })
  }

  swapiService = new SwapiService();

  render() {
    const {isLoggedIn} = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              
              <Route path='/' render={() => <h2 className='jumbotron text-center'><Fader>Welcome on board</Fader></h2>} exact />
              
              
              <Route path='/people/:id?' component={PeoplePage} />
              
              
              <Route path='/planets' component={PlanetPage} />
              
              
              <Route path='/vehicles' exact component={VehiclePage} />
              {
                /*отдельная рисовка страницы с деталями
              создаю новый путь юрл
              дальше рендер функция получает роутер метод мач
              забирает айди из мач.парамс (палится в консоли при экспекте страницы, суть тот же ид)
            возвращает страницу с деталями по ид (который из мач.парамс)  
            */
              }
              <Route path='/vehicles/:id'
                render={({ match }) => {
                  const { id } = match.params;
                  return <VehicleDetails itemId={id} />
                }}
              />

              <Route path='/login'
              render ={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)}/>

              <Route path='/secret-page'
              render ={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}/>


            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
