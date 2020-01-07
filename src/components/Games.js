import React from 'react';


export default class Games extends React.Component {

  render() {
    return (
      <div className="games">
        <div className="hero is-info">
        	<div className="hero-body">
		      	<h1 className="title is-2 has-text-centered is-marginless drop-shadow-light">Personal Projects</h1>
            <div className="columns is-centered">
              <div className="column is-half-tablet">
                <div className="section">
                  <div className="container is-fluid">
                    <p className="paragraph">
                    	Just a little section to put some personal projects or projects I'm currently testing.
                    	Things are bound to change and will likely not work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        	</div>
        </div>
        <div className="hero is-link is-bold">
        	<div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <div className="section">
                  <div className="container is-fluid has-text-centered">
                  	<h3 className="title drop-shadow-light">Knights vs Minions</h3>
                  	<p>
                  		A little hidden loyalty type game. Testing Socket.io implementation
                  	</p>
                  	<br/>
                  	<div className="columns is-centered">
                  		<div className="column is-half-tablet">
							      		<nav className="level">
												  <div className="level-item has-text-centered">
												  	<a href="https://kvm.justin-letourneau.dev" target="_blank" rel="noopener noreferrer" className="has-text-white">
										      		<span className="icon is-link is-large is-spaced">
											      		<i className="fa fa-gamepad fa-3x" aria-hidden="true"></i>
										      		</span>
										      		<div className="subtitle is-5">Game</div>
									      		</a>
												  </div>
												  <div className="level-item has-text-centered">
												  	<a href="https://github.com/theWizardsBaker/knightsvsminions" target="_blank" rel="noopener noreferrer" className="has-text-white">
										      		<span className="icon is-link is-large is-spaced">
											      		<i className="fa fa-github fa-3x" aria-hidden="true"></i>
										      		</span>
										      		<div className="subtitle is-5">Source Code</div>
									      		</a>
												  </div>
												</nav>
											</div>
										</div>
									</div>
								</div>
                <div className="section">
                  <div className="container is-fluid has-text-centered">
                  	<h3 className="title drop-shadow-light">HotSeat</h3>
                  	<p>
                  		A companion app for playing the card game HotSeat. Testing
                  	</p>
                  	<br/>
                  	<div className="columns is-centered">
                  		<div className="column is-half-tablet">
							      		<nav className="level">
												  <div className="level-item has-text-centered">
												  	<a href="https://hotseat.justin-letourneau.dev" target="_blank" rel="noopener noreferrer" className="has-text-white">
										      		<span className="icon is-link is-large is-spaced">
											      		<i className="fa fa-gamepad fa-3x" aria-hidden="true"></i>
										      		</span>
										      		<div className="subtitle is-5">Game</div>
									      		</a>
												  </div>
												  <div className="level-item has-text-centered">
												  	<a href="https://github.com/theWizardsBaker/hotseat_companion" target="_blank" rel="noopener noreferrer" className="has-text-white">
										      		<span className="icon is-link is-large is-spaced">
											      		<i className="fa fa-github fa-3x" aria-hidden="true"></i>
										      		</span>
										      		<div className="subtitle is-5">Source Code</div>
									      		</a>
												  </div>
												</nav>
											</div>
										</div>
                  </div>
                </div>
              </div>
            </div>
        	</div>
        </div>
      </div>
    );
  }

}
