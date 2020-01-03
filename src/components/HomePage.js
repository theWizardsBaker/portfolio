import React from 'react';
import { debounce } from "debounce";

export default class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      circles: {}
    }
  }

	componentDidMount(state){
		if (window.CarrotSearchCircles.supported) {
		  this.setState({ 
		  	circles: new window.CarrotSearchCircles({
			    id: "visualization",
			    ringScaling: 1.4,
			    pixelRatio: 3,
      	  angleStart: 30,
      	  groupFontFamily: '"Assistant", sans-serif',
		      ringShape: (attrs) => {
				    if (attrs.group.depth == 0) {
				      attrs.r_inner += 40;
				      attrs.r_outer -= 80;
				    }
				    if (attrs.group.depth == 1) {
				      attrs.r_inner -= 80;
				      attrs.r_outer -= 160;
				    }
				    if (attrs.group.depth == 2) {
				      attrs.r_inner -= 160;
				      attrs.r_outer -= 160;
				    }
				    if (attrs.group.depth == 3) {
				      attrs.r_inner -= 160;
				      attrs.r_outer -= 130;
				    }
				    if (attrs.group.depth == 4) {
				      attrs.r_inner -= 130;
				      attrs.r_outer -= 30;
				    }
				    // return attrs
				  },
			    dataObject: {
			      groups: [
			        { label: "Administration",
			        	weight: 1,
			        	center: true,
			        	wedge: true,
			        	depth: 0,
			        	groups: [
			          { label: "DevOps",
			          	depth: 1,
			          	groups: [
			          	{ label: "Web Servers", 
			          	  depth: 2,
			          		groups: [
				          	{ label: "Apache", depth: 3 },
				          	{ label: "Nginx", depth: 3 },
				          	{ label: "Tomcat", depth: 3 },
			          	] },
			          	{ label: "Search",
			          		depth: 2,
			          		groups: [
				          	{ label: "Elasticsearch", depth: 3 },
				          	{ label: "Lucene", depth: 3 },
				          	{ label: "Solr", depth: 3 },
			          	] },
			          	{ label: "Tools",
			          		depth: 2,
			          		groups: [
				          	{ label: "Git", depth: 3 },
				          	{ label: "Docker", depth: 3 },
				          	{ label: "SLURM", depth: 3 },
				          	{ label: "Visualization",
				          		depth: 3,
				          		groups: [
					          	{ label: "KVM", depth: 4 },
					          	{ label: "VMWare", depth: 4 },
				          	] },
			          	] },
			          ] },
			          { label: "Databases",
			          	depth: 1,
			          	groups: [
				          { label: "SQL", 
				          	depth: 2,
				          	groups: [
					          { label: "PostgreSQL", depth: 3 },
					          { label: "SQLite", depth: 3 },
					          { label: "MySQL", depth: 3 },
				          ] },
				          { label: "NoSQL",
				          	depth: 2,
				          	groups: [
					          { label: "MongoDB", depth: 3 },
					          { label: "Neo4J", depth: 3 },
				          ] },
			          ]}
			        ]},
			        { label: "Development",
			        	weight: 2,
			        	center: true,
			        	depth: 0,
			        	groups: [
			          { label: "Mobile", 
			          	depth: 1,
			          	groups: [
			          	{ label: "Android", depth: 2 },
			          	{ label: "Flutter", depth: 2 },
			          ]},
			          { label: "Web Development",
			          	weight: 6,
			          	depth: 1,
			          	groups: [
			          	{ label: "Front-End", 
			          		depth: 2,
			          		groups: [
			          		{ label: "Javascript", 
			          			depth: 3,
			          			groups: [
				          		{ label: "Vue.js", depth: 4 },
				          		{ label: "React", depth: 4 },
				          		{ label: "jQuery", depth: 4 },
				          		{ label: "Chart.js", depth: 4 },
				          		{ label: "Handlebar.js", depth: 4 },
			          		] },
			          		{ label: "CSS", 
			          			depth: 3,
			          			groups: [
				          		{ label: "Bulma", depth: 4 },
				          		{ label: "Bootstrap", depth: 4 },
			          		] },
			          	]},
			          	{ label: "Back-End", 
			          		depth: 2,
			          		groups: [
			          		{ label: "Node.js", 
			          			depth: 3,
			          			groups: [
				          		{ label: "Express.js", depth: 4 },
				          		{ label: "Socket.io", depth: 4 },
				          		{ label: "JWT.io", depth: 4 },
				          		{ label: "Sequelize", depth: 4 },
			          		] },
			          		{ label: "Ruby on Rails", depth: 3 },
			          		{ label: "Django", depth: 3 },
			          		{ label: "Groovy", depth: 3 },
			          		{ label: "PHP", depth: 3 },
			          		{ label: "ColdFusion", depth: 3 },
			          	] },
			          	{ label: "Authentication", 
			          		depth: 2,
			          		groups: [
			          		{ label: "JWT", depth: 3 },
			          		{ label: "Shibboleth", depth: 3 },
			          	] },
			          	{ label: "Communication", 
			          		depth: 2,
			          		groups: [
				          		{ label: "REST Api", depth: 3 },
				          		{ label: "SOAP Api", depth: 3 },
				          		{ label: "AJAX", depth: 3 },
			          	] },
			          	{ label: "Tools", 
			          		depth: 2,
			          		groups: [
			          		{ label: "Webpack", depth: 3 },
			          		{ label: "Bable", depth: 3 },
			          		{ label: "Sass", depth: 3 },
			          	]}
			          ]},
			          { label: "Application", 
			          	weight: 3,
			          	depth: 1,
			          	groups: [
			          	{ label: "Ruby", depth: 2 },
			          	{ label: "Python", depth: 2 },
			          	{ label: "Java", 
			          		depth: 2,
			          		groups: [
			          		{ label: "Ant", depth: 3 },
			          		{ label: "Gradle", depth: 3 }
			          	]},
		          		{ label: "Perl", depth: 2 },
			          	{ label: "C++", 
			          		depth: 2,
			          		groups: [
				          	{ label: "WinForms", depth: 3 },
				          	{ label: "QT", depth: 3 },
			          	]},
			          ]},
			        ]},
			      ]
			    }
			  })
		  })

		  window.addEventListener("resize", debounce(() => {
		  	if(this.state){
		  		this.state.circles.resize()
		  	}
			}, 600, true))
		} else {
		  console.log("Visualization not supported.");
		}
	}

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
					      		I design, develop and deploy full-stack web, mobile and standard applications.
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
      				Skills
      			</div>
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
