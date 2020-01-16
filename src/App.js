import React, { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop.js'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
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
          path: '/projects',
          name: 'Current Projects',
          title: '&lsaquo; Games Projects Testing &rsaquo;',
          component: lazy(() => import('./components/Games'))
        }
      ],
      photos: [
        {
          src: '/artwork/vince.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/bird2.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/tiger2.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/tiger.jpg',
          width: 16,
          height: 9,
        },
                {
          src: '/artwork/lupe.jpg',
          width: 16,
          height: 9,
        },
        {
          src: '/artwork/squirell.jpg',
          width: 16,
          height: 9,
        },
        {
          src: '/artwork/rabbit.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/bird.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/dog.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/wolf.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/bird3.jpg',
          width: 4,
          height: 3,
        },
        {
          src: '/artwork/duke.jpg',
          width: 16,
          height: 8,
        },
        {
          src: '/artwork/lion.jpg',
          width: 16,
          height: 9,
        },
        {
          src: '/artwork/bailey.jpg',
          width: 16,
          height: 9,
        },
      ],
      links: [
        {
          path: process.env.PUBLIC_URL + 'letourneau_resume.pdf',
          icon: "fa-file-text",
          text: "Resume"
        },
        {
          path: "https://github.com/theWizardsBaker",
          icon: "fa-github",
          text: "Github"
        },
        {
          path: "mailto:justin.letourn@gmail.com",
          icon: "fa-envelope",
          text: "Email"
        }
      ]
      // <span className="icon is-link is-small is-spaced">

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
            <Header>
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
            </Header>
          </header>
          <Suspense fallback={
            <div className="hero is-small is-info">
              <div className="hero-body has-text-centered">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              </div>
            </div>
          }>

            {/*load our different pages*/}
            <Switch>
              {
                this.state.routes.map((route, index) => {
                    let Component = route.component;
                    return  <Route key={index}
                                   path={route.path}
                                   render={() => <Component photos={this.state.photos} title="route.title" links={this.state.links} /> }
                                   exact
                                   />
                })
              }
            </Switch>
          </Suspense>
        </BrowserRouter>
        <Footer links={this.state.links} />
      </div>
    );
  }

}
