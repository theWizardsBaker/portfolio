import React, { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop.js'
import Navbar from './components/Navbar.js'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import './App.sass';

// const HomePage = lazy(() => import('./components/HomePage'));
// const Artwork = lazy(() => import('./components/Artwork.js'));

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/',
          name: 'Home',
          component: lazy(() => import('./components/HomePage'))
        },
        {
          path: '/artwork',
          name: 'Artwork',
          component: lazy(() => import('./components/Artwork'))
        },
        {
          path: '/games',
          name: 'Games',
          component: lazy(() => import('./components/Games'))
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* component to scroll to top */}
          <ScrollToTop />
          <Navbar routes={this.state.routes} />
          <header className="hero is-dark is-medium">
            <div className="hero-body">
              <h1 className="title is-huge">Justin</h1>
              <h1 className="title is-huge">Le Tourneau</h1>
            </div>
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            {/*load our different pages*/}
            <Switch>
              {
                this.state.routes.map((route, index) => {
                    return  <Route key={index} path={route.path} exact component={route.component} />
                })
              }
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }

}
