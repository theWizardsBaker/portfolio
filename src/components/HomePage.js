import React from 'react';
import LinkList from './LinkList.js';

export default class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      circles: {},
      chart: {}
    }
  }

  static defaultProps = {
    links: []
  }

	componentDidMount(state){
		if (window.CarrotSearchCircles && window.CarrotSearchCircles.supported) {
		  this.setState({ 
		  	circles: new window.CarrotSearchCircles({
			    id: "visualization",
			    ringScaling: 1.4,
			    zoomTime: 0.5,
			    expandTime: 0.5,
			    pixelRatio: 3,
      	  angleStart: 30,
      	  groupOutlineColor: "#141217",
      	  labelDarkColor: "#141217",
      	  zoomDecorationFillColor: "#6d6a757a",
      	  zoomDecorationStrokeColor: "#6d6a757a",
      	  expanderOutlineColor: "#fff",
      	  expanderColor: "#fff",
      	  groupSelectionOutlineColor: "#fff",
      	  groupFontFamily: '"Assistant", sans-serif',
      	  // rainbowStartColor: "#fff",
      	  rainbowStartColor: "#1480bf",
      	  rainbowEndColor: "#1d9ce6",
				  // rainbowEndColor:   "rgba(82, 72, 156, 1)",
		      ringShape: (attrs) => {
		      	let widthMod = window.innerWidth > 1200 ? 40 : 5
				    if (attrs.group.depth === 0) {
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
			          	{ label: "*Flutter", depth: 2 },
			          ]},
			          { label: "Web Development",
			          	weight: 6,
			          	depth: 1,
			          	groups: [
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
			          	{ label: "Java", 
			          		depth: 2,
			          		groups: [
			          		{ label: "Ant", depth: 3 },
			          		{ label: "Gradle", depth: 3 }
			          	]},
			          	{ label: "Ruby", depth: 2 },
			          	{ label: "Python", depth: 2 },
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

  render() {
    return (
      <div className="homepage">
      	<div className="hero is-info">
      		<div className="hero-body">
      			<div className="">
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
					      	<div className="section">
						      	<p className="paragraph drop-shadow-light">
						      		<span className="first-word">Hello there</span>,
						      		I'm Justin. I am a software developer and linux admin with over 8 years of professional experience.
						      		I design, develop and deploy full-stack web, mobile and standard applications.
						      		I administer and deploy a variety of Debian and Redhat Linux systems for an <a href="https://elsiklab.missouri.edu/" target="_blank" rel="noopener noreferrer">evolutionary biology lab </a> 
						      		where I also write and contribute to bioinformatics software.
						      		I am CTO and sole developer for <a href="https://www.seegenetics.com" target="_blank" rel="noopener noreferrer">Quetza LLC</a>, a company dedicated to developing agricultural educational software.
					      		</p>
					      		<div className="container has-text-white">
					      			<br/>
					      			<br/>
					      			<LinkList links={this.props.links} size="large"/>
										</div>
									</div>
				      	</div>
					    </div>
		      	</div>
	      	</div>
      	</div>
      	<div className="hero is-link is-bold">
      		<div className="hero-body">
      			<div className="columns is-8 vertical-align">
	      			<div className="column is-8-tablet">
	    					<div className="cover">
	    						<div className="cover-image"></div>
			    				<div id="visualization">
			    				</div>
	    					</div>
		    			</div>
	      			<div className="column is-4-tablet">
		      			<h1 className="title is-2 has-text-centered drop-shadow-light is-spaced">Skills & Proficiencies</h1>
		      			<h3 className="title is-5 has-text-centered drop-shadow-light is-spaced is-hidden-mobile">
		      				double click to expand selections
	      				</h3>
	      			</div>
		    		</div>
      		</div>
      	</div>
      	<div className="hero is-warning">
      		<div className="hero-body">
      			<h3 className="subtitle is-6 has-text-centered"><i>*Learning / Exploring</i></h3>
      			<div>
	      			<div className="columns is-multiline is-mobile is-8 is-variable">
						    <div className="column is-12-mobile is-7-tablet is-8-desktop">
						    	<h1 className="title is-4 drop-shadow-light">Web Development</h1>
						    	<div className="columns is-multiline is-mobile is-8 is-variable">
						    		<div className="column is-narrow">
				          		<ul>
						          	<li>
						          		<b>Front-End</b>
						          		<ul>
							          		<li>
							          			Javascript
							          			<ul>
									          		<li>Vue.js</li>
									          		<li>React</li>
									          		<li>jQuery</li>
									          		<li>Chart.js</li>
									          		<li>Handlebar.js</li>
									          	</ul>
									          </li>
							          		<li>
							          			CSS
							          			<ul>
									          		<li>Bulma</li>
									          		<li>Bootstrap</li>
									          	</ul>
									          </li>
									        </ul>
									      </li>
							        </ul>
							      </div>
							      <div className="column is-narrow">
					          	<ul>
					          		<li>
					          			<b>Back-End</b>
						          		<ul>
							          		<li>
							          			Node.js
							          			<ul>
									          		<li>Express.js</li>
									          		<li>Socket.io</li>
									          		<li>JWT.io</li>
									          		<li>Sequelize</li>
									          	</ul>
									          </li>
							          		<li>Ruby on Rails</li>
							          		<li>Django</li>
							          		<li>Groovy</li>
							          		<li>PHP</li>
							          		<li>ColdFusion</li>
							          	</ul>
							         	</li>
							        </ul>
							      </div>
							      <div className="column is-narrow">
					          	<ul>
					          		<li>
					          			<b>Authentication</b>
						          		<ul>
							          		<li>JWT</li>
							          		<li>Shibboleth</li>
							          	</ul>
							         	</li>
							        </ul>
							      </div>
							      <div className="column is-narrow">
					          	<ul>
					          		<li>
					          			<b>Communication</b>
						          		<ul>
							          		<li>REST Api</li>
							          		<li>SOAP Api</li>
							          		<li>AJAX</li>
							          	</ul>
							          </li>
							        </ul>
							      </div>
							      <div className="column is-narrow">
					          	<ul>
					          		<li>
					          			<b>Tools</b>
						          		<ul>
							          		<li>Webpack</li>
							          		<li>Bable</li>
							          		<li>Sass</li>
							          	</ul>
							          </li>
							        </ul>
					          </div>
						      </div>
						    </div>
						    <div className="column is-narrow">
				        	<h1 className="title is-4 drop-shadow-light">Application Development</h1>
						    	<div className="columns is-mobile">
						    		<div className="column is-narrow">
				        			<ul>
				        				<li>
				        					<b>Languages</b>
					        				<ul>
								          	<li>Ruby</li>
								          	<li>Python</li>
								          	<li>
								          		Java
								          		<ul>
									          		<li>Ant</li>
									          		<li>Gradle</li>
									          	</ul>
									          </li>
							          		<li>Perl</li>
								          	<li>
								          		C++
								          		<ul>
										          	<li>WinForms</li>
										          	<li>QT</li>
										         	</ul>
										        </li>
										      </ul>
										    </li>
										  </ul>
							      </div>
						    		<div className="column is-narrow">
				        			<ul>
				        				<li>
				         					<b>Mobile</b>
							         		<ul>
								          	<li>Android</li>
								          	<li>*Flutter</li>
								          </ul>
										    </li>
										  </ul>
							      </div>
						      </div>
							  </div>
	      				<div className="column">
						    	<h1 className="title is-4 drop-shadow-light">DevOps</h1>
			      			<div className="columns is-multiline is-mobile is-8 is-variable">
								    <div className="column is-narrow">
					        		<ul>
							          <li>
							          	<b>Web Servers</b>
							          	<ul>
								          	<li>Apache</li>
								          	<li>Nginx</li>
								          	<li>Tomcat</li>
								          </ul>
								        </li>
								     	</ul>
								    </div>
								    <div className="column is-narrow">
								     	<ul>
							          <li>
							          	<b>Search</b>
							          	<ul>
								          	<li>Elasticsearch</li>
								          	<li>Lucene</li>
								          	<li>Solr</li>
								          </ul>
							          </li>
								     	</ul>
								    </div>
								    <div className="column is-narrow">
								     	<ul>
							          <li>
							          	<b>Tools</b>
							          	<ul>
								          	<li>Git</li>
								          	<li>Docker</li>
								          	<li>SLURM</li>
								          	<li>Visualization</li>
								          	<li>
								          		<ul>
										          	<li>KVM</li>
										          	<li>VMWare</li>
										         	</ul>
										        </li>
									        </ul>
									      </li>
								      </ul>
								    </div>
								    <div className="column is-narrow">
								    	<ul>
							          <li>
							          	<b>Databases</b>
							          	<ul>
									          <li>
										          SQL
									          	<ul>
											          <li>PostgreSQL</li>
											          <li>SQLite</li>
											          <li>MySQL</li>
											        </ul>
											      </li>
									          <li>
									          	NoSQL
										          	<ul>
												          <li>MongoDB</li>
												          <li>Neo4J</li>
												        </ul>
											      </li>
											    </ul>
										    </li>
								      </ul>
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
