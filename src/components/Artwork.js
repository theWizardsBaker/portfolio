import React from 'react';
import Gallery from 'react-photo-gallery';


export default class Artwork extends React.Component {

  render() {
    const pictures = [
        {
          src: process.env.PUBLIC_URL + 'lupe.jpg',
          width: 16,
          height: 9,
        },
        {
          src: process.env.PUBLIC_URL + 'bird2.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'tiger2.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'tiger.jpg',
          width: 16,
          height: 9,
        },
        {
          src: process.env.PUBLIC_URL + 'vince.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'rabbit.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'bird.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'dog.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'squirell.jpg',
          width: 16,
          height: 9,
        },
        {
          src: process.env.PUBLIC_URL + 'wolf.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'bird3.jpg',
          width: 4,
          height: 3,
        },
        {
          src: process.env.PUBLIC_URL + 'duke.jpg',
          width: 16,
          height: 8,
        },
        {
          src: process.env.PUBLIC_URL + 'lion.jpg',
          width: 16,
          height: 9,
        },
        {
          src: process.env.PUBLIC_URL + 'bailey.jpg',
          width: 16,
          height: 9,
        },
      ]

    return (
      <div>
        <div className="hero is-info">
          <div className="hero-body">
            <div>
              <h1 className="title is-2 has-text-centered  drop-shadow-light is-spaced">Artwork</h1>
              <div className="columns is-centered">
                <div className="column is-half-tablet">
                  <div className="section">
                    <div className="container is-fluid">
                      <p className="paragraph">
                        My artwork is primarily scratchboard art. Scratchboards are white clay boards rolled with black India ink.
                        The ink is removed by cutting or scratching with a knife. You can check out sample work below.
                        <br/>
                        <br/>
                        <br/>
                      </p>
                      <h3 className="title is-5 has-text-centered has-text-primary">
                        Available for pet portraits and other comissions
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero is-link">
          <div className="hero-body">
            <div className="artwork section">
              <div className="container is-fluid">
                <div className="columns is-centered">
                  <div className="column is-one-quarter">
                    <nav className="level is-mobile">
                  <div className="level-item has-text-centered">
                    <a href='https://www.instagram.com/awizardsbaker/' target="_blank" className="has-text-white">
                      <span className="icon is-link is-large is-spaced">
                        <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                      </span>
                      <div className="subtitle is-5">Instagram</div>
                    </a>
                  </div>
                  <div className="level-item has-text-centered">
                    <a href="https://photos.app.goo.gl/7jXetCKFWQFwymFR9" className="has-text-white">
                      <span className="icon is-link is-large is-spaced">
                        <i className="fa fa-book fa-3x" aria-hidden="true"></i>
                      </span>
                      <div className="subtitle is-5">Sample Work</div>
                    </a>
                  </div>
                    </nav>
                  </div>
                </div>
                <div className="content">
                  <Gallery photos={pictures}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
