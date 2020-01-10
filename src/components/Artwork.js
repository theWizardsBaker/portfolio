import React from 'react';
import Gallery from 'react-photo-gallery';
import LinkList from './LinkList.js'


export default class Artwork extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          path: "https://www.instagram.com/awizardsbaker/",
          icon: "fa-instagram",
          text: "Instagram"
        },
        {
          path: "https://www.facebook.com/justin.letourneau",
          icon: "fa-facebook",
          text: "Facebook"
        },
        {
          path: "https://photos.app.goo.gl/7jXetCKFWQFwymFR9",
          icon: "fa-book",
          text: "Sample Work"
        },
      ]
    }
  }

  static defaultProps = {
    photos: [],
    label: "Button Text"
  }

  render() {
    return (
      <div>
        <div className="hero is-info">
          <div className="hero-body">
            <div>
              <h1 className="title is-2 has-text-centered  drop-shadow-light is-spaced">Artwork</h1>
              <div className="columns is-centered">
                <div className="column is-half-desktop is-three-quarters-tablet is-fullwidth-mobile">
                  <div className="">
                    <div className="container is-fluid">
                      <p className="paragraph">
                        My artwork is primarily scratchboard art. A scratchboard is a white clay board rolled with black India ink.
                        The ink is removed by cutting or scratching with a knife. You can check out sample work below.
                        <br/>
                        <br/>
                        <br/>
                      </p>
                      <br/>
                      <h3 className="title is-4 has-text-centered">
                        Available for pet portraits and other commissions
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero is-link is-bold">
          <div className="hero-body">
            <div className="artwork section">
              <div className="container is-fluid">
                <div className="columns is-centered">
                  <div className="column is-one-quarter">
                    <LinkList links={this.state.links} size="large" />
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
