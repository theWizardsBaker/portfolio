import React from 'react';
import Highlight from 'react-highlight'
import CodeSnip from './CodeSnip.js'

export default class Header extends React.Component {

	static defaultProps = {
		title: ''
	};

  render() {
    return (
	    <div className="hero-body">
	      <div className="header-content">
	        <div className="columns">
	          <div className="column is-7-desktop is-8-tablet">
	            <h1 className="title drop-shadow is-huge is-hidden-mobile">Justin</h1>
	            <h1 className="title drop-shadow is-huge is-hidden-mobile">Le Tourneau</h1>
	            <h1 className="subtitle drop-shadow is-3 is-spaced is-hidden-mobile has-text-gray">justin.letourn@gmail.com</h1>
	            <h3 className="subtitle drop-shadow is-4 is-hidden-mobile has-text-spaced has-text-gray">
	            	{this.props.children}
	            </h3>

	            <h1 className="title is-2 is-hidden-tablet has-text-centered is-marginless">Justin</h1>
	            <h1 className="title is-2 is-hidden-tablet has-text-centered">Le Tourneau</h1>
	            <h1 className="subtitle drop-shadow is-5 is-spaced is-hidden-tablet has-text-gray has-text-centered">justin.letourn@gmail.com</h1>
	            <h3 className="subtitle is-5 is-hidden-tablet has-text-centered has-text-spaced has-text-gray">
	            	{this.props.children}
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
    );
  }

}
