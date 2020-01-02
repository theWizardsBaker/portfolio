import React, { Suspense, lazy } from 'react';
import Highlight from 'react-highlight'
import ScrollToTop from './components/ScrollToTop.js'
import Navbar from './components/Navbar.js'
import CodeSnip from './components/CodeSnip.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.sass';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/',
          name: 'Programming',
          title: "\{ Developer Administrator Co-Founder \}",
          component: lazy(() => import('./components/HomePage'))
        },
        {
          path: '/artwork',
          name: 'Artwork',
          title: 'Scratchboards &bull; Portraits &bull; Digital Art',
          component: lazy(() => import('./components/Artwork'))
        },
        {
          path: '/games',
          name: 'Games',
          title: '&lsaquo; Games Projects Testing &rsaquo;',
          component: lazy(() => import('./components/Games'))
        }
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* component to scroll to top */}
          <ScrollToTop />
          <header className="hero is-warning">
            <div className="hero-head">
              {/* show navbar */}
              <Navbar routes={this.state.routes} />
            </div>
            {/* page headder */}
            <div className="hero-body">
              <div className="header-content">
                <div className="columns">
                  <div className="column is-7-desktop is-8-tablet">
                    <h1 className="title drop-shadow is-huge is-hidden-mobile">Justin</h1>
                    <h1 className="title drop-shadow is-huge is-spaced is-hidden-mobile">Le Tourneau</h1>
                    <h3 className="subtitle drop-shadow is-4 is-hidden-mobile has-text-spaced">
                      {
                        this.state.routes.map((route, index) => {
                          return <Route key={index}
                                        path={route.path}
                                        children={
                                         <span dangerouslySetInnerHTML={{__html:route.title}} />
                                        }
                                        exact
                                        />
                        })
                      }
                    </h3>

                    <h1 className="title is-1 is-hidden-tablet has-text-centered is-marginless">Justin</h1>
                    <h1 className="title is-1 is-spaced is-hidden-tablet has-text-centered">Le Tourneau</h1>
                    <h3 className="subtitle is-5 is-hidden-tablet has-text-centered has-text-spaced">
                      {
                        this.state.routes.map((route, index) => {
                          return <Route key={index}
                                        path={route.path}
                                        children={route.title}
                                        exact
                                        />
                        })
                      }
                    </h3>
                  </div>
                  <div className="column is-hidden-mobile">
                    <div className="hero-right">
                      <div className="scroll-content-down">
                        <Highlight className="code-snip" language='CodeSnip.language'>
                          {CodeSnip.code}
                        </Highlight>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            {/*load our different pages*/}
            <Switch>
              {
                this.state.routes.map((route, index) => {
                    return  <Route key={index}
                                   path={route.path}
                                   component={route.component}
                                   exact
                                   />
                })
              }
            </Switch>
          </Suspense>
        </BrowserRouter>
        <div className="footer">
          <div className="hero">
            Justin Le Tourneau
            justin.letourn@gmail.com
            &copy; Justin Le Tourneau, 2020
          </div>
        </div>
      </div>
    );
  }

}
