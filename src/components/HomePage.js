import React from 'react';

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
			    zoomTime: 0.5,
			    expandTime: 0.5,
			    pixelRatio: 3,
      	  angleStart: 30,
      	  groupFontFamily: '"Assistant", sans-serif',
		      ringShape: (attrs) => {
		      	let widthMod = window.innerWidth > 1200 ? 40 : 5
				    if (attrs.group.depth === 0) {
				    	console.log(window.innerWidth)
				      attrs.r_inner = (attrs.r_inner + widthMod) > 0 ? (attrs.r_inner + widthMod) : 1;
				      attrs.r_outer = (attrs.r_outer - widthMod * 2) > 0 ? (attrs.r_outer - widthMod * 2) : 1;
				    }
				    if (attrs.group.depth === 1) {
				      attrs.r_inner = (attrs.r_inner - widthMod * 2) > 0 ? (attrs.r_inner - widthMod * 2) : 1;
				      attrs.r_outer = (attrs.r_outer - widthMod * 4) > 0 ? (attrs.r_outer - widthMod * 4) : 1;
				    }
				    if (attrs.group.depth === 2) {
				      attrs.r_inner = (attrs.r_inner - widthMod * 4) > 0 ? (attrs.r_inner - widthMod * 4) : 1;
				      attrs.r_outer = (attrs.r_outer - widthMod * 4) > 0 ? (attrs.r_outer - widthMod * 4) : 1;
				    }
				    if (attrs.group.depth === 3) {
				      attrs.r_inner = (attrs.r_inner - widthMod * 4) > 0 ? (attrs.r_inner - widthMod * 4) : 1;
				      attrs.r_outer = (attrs.r_outer - widthMod * 3) > 0 ? (attrs.r_outer - widthMod * 3) : 1;
				    }
				    if (attrs.group.depth === 4) {
				      attrs.r_inner = (attrs.r_inner - widthMod * 3) > 0 ? (attrs.r_inner - widthMod * 3) : 1;
				      attrs.r_outer = (attrs.r_outer - widthMod) > 0 ? (attrs.r_outer - widthMod) : 1;
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

		  window.addEventListener("resize", () => {
		  	if(this.state){
		  		this.state.circles.resize()
		  	}
			})
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
      			<div className="columns is-3 vertical-align">
	      			<div className="column is-8-tablet">
		    				<div id="visualization">
		    				</div>
		    			</div>
	      			<div className="column is-4-tablet">
		      			<h1 className="title is-2 has-text-centered  drop-shadow-light is-spaced">Skills & Proficiencies</h1>
		      			<h3 className="title is-5 has-text-centered  drop-shadow-light is-spaced">
		      				double click to expand selections
	      				</h3>
	      			</div>
		    		</div>
      			<div className="content">

	      			<h3 className="title is-4 drop-shadow-light">
	      				Development
	      			</h3>

			        <ul>
			         	<li>Mobile</li>
			         	<li>
			         		<ul>
				          	<li>Android</li>
				          	<li>Flutter</li>
				          </ul>
				        </li>
			          <li>Web Development</li>
			         	<li>
			         		<ul>
				          	<li>Front-End</li>
				          		<li>Javascript</li>
					          		<li>Vue.js</li>
					          		<li>React</li>
					          		<li>jQuery</li>
					          		<li>Chart.js</li>
					          		<li>Handlebar.js</li>
				          		<li>CSS</li>
					          		<li>Bulma</li>
					          		<li>Bootstrap</li>
					        </ul>
					      </li>
				      </ul>
				        <ul>
			          	<li>Back-End</li>
			          		<li>Node.js</li>
				          		<li>Express.js</li>
				          		<li>Socket.io</li>
				          		<li>JWT.io</li>
				          		<li>Sequelize</li>
			          		<li>Ruby on Rails</li>
			          		<li>Django</li>
			          		<li>Groovy</li>
			          		<li>PHP</li>
			          		<li>ColdFusion</li>
			          	<li>Authentication</li>
			          		<li>JWT</li>
			          		<li>Shibboleth</li>
			          	<li>Communication</li>
				          		<li>REST Api</li>
				          		<li>SOAP Api</li>
				          		<li>AJAX</li>
			          	<li>Tools</li>
			          		<li>Webpack</li>
			          		<li>Bable</li>
			          		<li>Sass</li>
			          </ul>
			          Application
			          	Ruby
			          	Python
			          	Java
			          		Ant
			          		Gradle
		          		Perl
			          	C++
				          	WinForms
				          	QT

			        Administration

			        	DevOps
			          	Web Servers
				          	Apache
				          	Nginx
				          	Tomcat
			          	Search
				          	Elasticsearch
				          	Lucene
				          	Solr
			          	Tools
				          	Git
				          	Docker
				          	SLURM
				          	Visualization
					          	KVM
					          	VMWare
			          Databases
				          SQL
					          PostgreSQL
					          SQLite
					          MySQL
				          NoSQL
					          MongoDB
					          Neo4J
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
