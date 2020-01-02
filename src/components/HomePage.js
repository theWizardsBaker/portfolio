import React from 'react';

export default class HomePage extends React.Component {

	componentDidMount(){
		if (window.CarrotSearchCircles.supported) {
		  const circles = new window.CarrotSearchCircles({
		    id: "visualization",
		    dataObject: {
		      groups: [
		        { label:"Development", groups: [
		          { label:"Group 1.1" },
		          { label:"Group 1.2" }
		        ]},
		        { label:"Administration", groups: [
		          { label:"Group 2.1" },
		          { label:"Group 2.2" }
		        ]}
		      ]
		    }
		  });
		} else {
		  console.log("Visualization not supported.");
		}
	}

  render() {
    return (
      <div className="homepage">
      	<div className="hero is-info">
      		<div className="hero-body">
      			<div className="section">
      				<div className="columns vertical-align">
      					<div className="column is-6-tablet">
					      	<h1 className="title is-2 has-text-centered is-marginless drop-shadow-light">Software Development</h1>
					      	<hr className="small-divider drop-shadow-light" />
					      	<h1 className="title is-2 has-text-centered drop-shadow-light">Administration</h1>
					      </div>
					      <div className="column is-hidden-tablet">
					      	<br/>
				      	</div>
					      <div className="column">
					      	<p className="paragraph drop-shadow-light">
					      		<span className="first-word">Hello there</span>, 
					      		I'm Justin. I am a software developer and linux admin with over 8 years of professional experience.
					      		I design, develop and deploy full-stack web applications, server software and mobile applications.
					      		I administrate and deploy a variety of Debian and Redhat Linux systems for an evolutionary biology lab
					      		where I also write and contribute to bioinfomatics software.
					      		I am CTO and sole developer for Quetza LLC, a company dedicated to developing agricultural educational software.
				      		</p>
				      		<div className="container">
				      			<br/>
				      			<br/>
					      		<nav className="level is-mobile">
										  <div className="level-item has-text-centered">
										  </div>
										  <div className="level-item has-text-centered">
										  	<a href="https://github.com/theWizardsBaker" className="has-text-white">
								      		<span className="icon is-link is-large">
									      		<i className="fa fa-github fa-3x" aria-hidden="true"></i>
								      		</span>
							      		</a>
										  </div>
										  <div className="level-item has-text-centered">
											  <a href="mailto:justin.letourn@gmail.com" className="has-text-white">
								      		<span className="icon is-link is-large">
									      		<i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
								      		</span>
								      	</a>
										  </div>
										  <div className="level-item has-text-centered">
											  <a href="https://www.facebook.com/justin.letourneau" className="has-text-white">
								      		<span className="icon is-link is-large">
									      		<i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
								      		</span>
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
      	<div className="hero is-link">
      		<div className="hero-body">
      			<div>
      				<div id="visualization">
      				</div>
						{/*
      			<h3 className="title is-2 has-text-centered is-marginless drop-shadow-light">
      				Development
      			</h3>
      			*/}
      			Web Development
	      			Front End
		      			(color javascript)
		      			Frameworks	
			      			Vue.js
			      			React.js
			      			jQuery

		      			CSS
			      			Bulma
			      			Bootstrap

		      			Build Tools
			      			Bable
			      			Webpack
			      			Sass

      			Back End
	      			Node.js
	      			Ruby on Rails
	      			PHP
	      			Groovy
	      			Django
	      			ColdFusion

      			Web Services
	      			REST Api
	      			Socket.io
	      			SOAP

	      		Databases
	      			SQL
	      				PostgreSQL
	      				MySQL
	      				SQLite
	      			NoSQL
	      				MongoDB
	      				Neo4J

	      		Storage
	      			Sequelize



      			Authentication
	      			JWT
	      			Shibboleth





      			mobile
      				Android
      				Flutter


      			desktop
      				WinForms
      				Qt
      			{/*
      			<h3 className="title is-2 has-text-centered is-marginless drop-shadow-light">
      				Administration
      			</h3>
	      		*/}
      				</div>
      		</div>
      	</div>
      </div>
    );
  }

}
