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
            <div className="columns is-mobile">
              <div className="column is-2-tablet is-4-mobile">
              	<LinkList links={this.props.links} showText={false}/>
              </div>
            </div>
            <div>
              <p className="has-text-link">
                Site built using React, Bulma and Node.js
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
