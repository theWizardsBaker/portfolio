import React from 'react'
import LinkList from './LinkList.js'

export default class Footer extends React.Component {

	static defaultProps = {
		links: [],
	};

  render() {
    return (
        <div className="footer">
          <div className="hero">
            <div className="columns is-mobile is-hidden-mobile">
              <div className="column is-2-tablet is-4-mobile">
              	<LinkList links={this.props.links} showText={false}/>
              </div>
            </div>
            <div>
              <div className="is-hidden-tablet">
                <LinkList links={this.props.links} showText={false}/>
              </div>
              <p className="has-text-link">
                Site built using React, Bulma and Node.js
                <br/>
                Source Code Available <a href="https://github.com/theWizardsBaker/portfolio" target="_blank" rel="noopener noreferrer">Here</a>
              </p>
              <p className="has-text-link">
                &copy; Justin Le Tourneau, 2020
              </p>
            </div>
          </div>
        </div>
    );
  }

}
