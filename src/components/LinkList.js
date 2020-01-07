import React from 'react';

export default class LinkList extends React.Component {

	static defaultProps = {
		links: [],
		size: 'small',
    showText: true
	};

  render() {
    return (
        <div className={`level ${this.props.size === 'small' ? 'is-mobile' : ''}`}>
          	{
          		this.props.links.map((link, index) => {
                return <div key={index} className={`level-item has-text-centered is-${this.props.size}`}>
			                   <a href={link.path} title={link.text} target="_blank" rel="noopener noreferrer">
			                     <span className="icon is-link is-spaced">
			                       <i className={`fa ${link.icon} ${this.props.size === 'large' ? 'fa-3x' : 'fa-small'}`} aria-hidden="true"></i>
			                     </span>
                           <div>{this.props.showText ? link.text : ''}</div>
			                   </a>
			                 </div>
              })
          	}
        </div>
    );
  }

}
