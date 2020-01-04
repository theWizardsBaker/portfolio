import React from 'react';


export default class Games extends React.Component {

  render() {
    return (
      <div className="games">
        <div className="hero is-link">
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
        <div className="hero is-primary">
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
					      		<nav className="level is-mobile">
										  <div className="level-item has-text-centered">
										  </div>
										  <div className="level-item has-text-centered">
										  	<a href="https://kvm.justin-letourneau.dev" target="_blank" className="has-text-white">
								      		<span className="icon is-link is-large is-spaced">
									      		<i className="fa fa-gamepad fa-3x" aria-hidden="true"></i>
								      		</span>
								      		<div className="subtitle is-5">Game</div>
							      		</a>
										  </div>
										  <div className="level-item has-text-centered">
										  	<a href="https://github.com/theWizardsBaker/avalon" className="has-text-white">
								      		<span className="icon is-link is-large is-spaced">
									      		<i className="fa fa-github fa-3x" aria-hidden="true"></i>
								      		</span>
								      		<div className="subtitle is-5">Source Code</div>
							      		</a>
										  </div>
										  <div className="level-item has-text-centered">
										  </div>
										</nav>
									</div>
								</div>
                <div className="section">
                  <div className="container is-fluid has-text-centered">
                  	<h3 className="title drop-shadow-light">HotSeat</h3>
                  	<p>
                  		A companion app for playing the card game HotSeat. Testing
                  	</p>
                  	<br/>
					      		<nav className="level is-mobile">
										  <div className="level-item has-text-centered">
										  </div>
										  <div className="level-item has-text-centered">
										  	<a href="https://hotseat.justin-letourneau.dev" target="_blank" className="has-text-white">
								      		<span className="icon is-link is-large is-spaced">
									      		<i className="fa fa-gamepad fa-3x" aria-hidden="true"></i>
								      		</span>
								      		<div className="subtitle is-5">Game</div>
							      		</a>
										  </div>
										  <div className="level-item has-text-centered">
										  	<a href="https://github.com/theWizardsBaker/hotseat_companion" className="has-text-white">
								      		<span className="icon is-link is-large is-spaced">
									      		<i className="fa fa-github fa-3x" aria-hidden="true"></i>
								      		</span>
								      		<div className="subtitle is-5">Source Code</div>
							      		</a>
										  </div>
										  <div className="level-item has-text-centered">
										  </div>
										</nav>
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
