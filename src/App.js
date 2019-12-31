import React, { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop.js'
import Navbar from './components/Navbar.js'
import thisFile from '!raw-loader!../public/index.html'
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
          name: 'Programming',
          title: 'Developer / Administrator / Researcher',
          component: lazy(() => import('./components/HomePage'))
        },
        {
          path: '/artwork',
          name: 'Artwork',
          title: 'Scratchboards / Portraits / Digital Art',
          component: lazy(() => import('./components/Artwork'))
        },
        {
          path: '/games',
          name: 'Games',
          title: 'Games / Projects / Other',
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
          <header className="hero is-dark is-bolded">
            <div className="hero-head">
              {/* show navbar */}
              <Navbar routes={this.state.routes} />
            </div>
            {/* page headder */}
            <div className="hero-body">
              <div className="section">
                <h1 className="title is-huge">Justin</h1>
                <h1 className="title is-huge is-spaced">Le Tourneau</h1>
                <h3 className="subtitle is-4 has-text-spaced">
                  {
                    this.state.routes.map((route, index) => {
                      return <Route
                        key={index}
                        path={route.path}
                        children={route.title}
                        exact
                      />
                    })
                  }
                </h3>
              </div>
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
