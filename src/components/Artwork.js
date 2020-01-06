import React from 'react';
import Gallery from 'react-photo-gallery';


export default class Artwork extends React.Component {

  static defaultProps = {
    photos: [],
    label: "Button Text"
  }

  render() {
    console.log(this.props, "stuff")
    return (
      <div>
        <div className="hero is-info">
          <div className="hero-body">
            <div>
              <h1 className="title is-2 has-text-centered  drop-shadow-light is-spaced">Artwork</h1>
              <div className="columns is-centered">
                <div className="column is-half-desktop is-three-quarters-tablet is-fullwidth-mobile">
                  <div className="section">
                    <div className="container is-fluid">
                      <p className="paragraph">
                        My artwork is primarily scratchboard art. A scratchboard is a white clay board rolled with black India ink.
                        The ink is removed by cutting or scratching with a knife. You can check out sample work below.
                        <br/>
                        <br/>
                        <br/>
                      </p>
                      <h3 className="title is-4 has-text-centered">
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
                  <Gallery photos={this.props.photos}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
