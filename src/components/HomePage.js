import React from 'react';
import LinkList from './LinkList.js';
import { NavLink } from "react-router-dom";

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
			          	{ label: "React Native", depth: 2 },
			          	{ label: "Android", depth: 2 },
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
						      		I design, develop and deploy full-stack web, mobile and desktop applications.
						      		I administer and deploy on a variety of Debian and Redhat Linux systems.
						      		I have worked as a freelancer, software engineer and system admin. 
						      		Check out my experience and qualifications below.
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
      	<div className="hero is-link is-bold is-medium">
      		<div className="hero-body">
      			<h1 className="title is-2 has-text-centered drop-shadow-light">Projects & Experience</h1>
      			<div className="subtitle is-6 has-text-centered drop-shadow-ligh is-spaced">
      				personal projects <NavLink to='/projects' className="link" exact>here</NavLink>
      			</div>
      			<br/>
      			<br/>
      			<div className="container">
	      			<div className="columns is-multiline">
		      			<div className="column is-6-tablet">
		      				<div className="box">
			      				<h3 className="title is-3">Quetza LLC</h3>
			      				<h3 className="subtitle is-5">CTO</h3>
			      				<div className="field is-grouped is-grouped-multiline has-text-weight-bold is-hidden-mobile">
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Front End</span>
					      					<span className="tag is-info">Vue.js Vuex OAuth Axios Bulma</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Back End</span>
					      					<span className="tag is-info">Node.js API JWT Sequelize</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Databases</span>
						      				<span className="tag is-info">PostgreSQL</span>
					      				</div>
					      			</div>
				      			</div>
			      				<div className="has-text-weight-bold is-hidden-tablet">
			      					<div className="tags">
				      					<span className="tag is-success">Front End</span>
				      					<span className="tag is-info">Vue.js Vuex OAuth Axios Bulma</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Back End</span>
				      					<span className="tag is-info">Node.js API JWT Sequelize</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Databases</span>
					      				<span className="tag is-info">PostgreSQL</span>
					      			</div>
				      			</div>
				      			<br/>
				      			<div className="container">
					      			<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">About</h2>
					      				<p>
						      				In 2018 I co-founded an educational software company, Quetza, with a friend, basing it around her PHD research project.
						      				I am the sole programmer and game designer. My business partner is responsible for the educational content.
						      				Initially titled "the Cow Game", our simulation, <a href="https://www.seebeefgenetics.com/" target="_blank" rel="noopener noreferrer">SeeBeefGenetics</a>, is an online cattle
						      				breeding simulation. The program teaches high school and undergraduate students how to use genetics in the real world with beef cattle as a model.
						      				We are currently in beta testing with over 36 institutions worldwide providing us feedback.
						      				We're working to expand the <a href="https://www.seegenetics.com" target="_blank" rel="noopener noreferrer">SeeGenetics</a> brand to
						      				offer simulations in other species, such as swine, goat and dog.
						      			</p>
						      			<p>
						      				We were winners in both the 2018 <a href="https://www.columbiamissourian.com/news/local/women-bosses-share-startups-at-pitch-contest/article_8bf665ec-49bb-11e8-9f9b-9b79050c0cd9.html" target="_blank" rel="noopener noreferrer">Women Owned Business Startup Pitch</a> and the <a href="https://business.missouri.edu/about/news/tiger-cage-pitch-competition-awards-18000-seed-funding" target="_blank" rel="noopener noreferrer">Mizzou Tiger Cage Startup Pitch</a>.
					      				</p>
					      			</div>
					      			<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">Technical</h2>
					      				<p>
					      					The simulation is a single page web app built using Vue.js. It incorporates Vuex for state management and Axios for
					      					AJAX communication. I wrote a decision tree based AI that observes and comments on student's progress; a key feature in the game.
					      					The student's AI companion 'Vince the Extension Agent' offers advice, guidance and provides quizzes to the students
					      					as a way to reinforce the learning objectives.
					      					<br/>
					      					On the backend, I'm using Node.js with Express.js to serve the API.
					      					I built an OAuth authentication server that uses JSON Web Tokens for managing state.
					      					Our Postgres database is accessed via Sequelize.
					      				</p>
					      			</div>
					      		</div>
				      		</div>
		      			</div>
		      			<div className="column is-6-tablet">
		      				<div className="box">
			      				<h3 className="title is-3">University of Missouri</h3>
			      				<h3 className="subtitle is-5">Research Linux Administrator, Programmer</h3>
			      				<div className="field is-grouped is-grouped-multiline has-text-weight-bold is-hidden-mobile">
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Programming</span>
					      					<span className="tag is-info">Java Python Ruby Perl C++ PHP Bash</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Front End</span>
					      					<span className="tag is-info">Vue.js React.js Drupal</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Back End</span>
					      					<span className="tag is-info">Node.js API Groovy Django</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Databases</span>
						      				<span className="tag is-info">PostgreSQL MongoDB ArangoDB</span>
					      				</div>
					      			</div>
				      			</div>
			      				<div className="has-text-weight-bold is-hidden-tablet">
				      				<div className="tags">
				      					<span className="tag is-success">Programming</span>
				      					<span className="tag is-info">Java Python Ruby Perl C++ PHP Bash</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Front End</span>
				      					<span className="tag is-info">Vue.js React.js Drupal</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Back End</span>
				      					<span className="tag is-info">Node.js API Groovy Django</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Databases</span>
					      				<span className="tag is-info">PostgreSQL MongoDB ArangoDB</span>
				      				</div>
				      			</div>
				      			<br/>
				      			<div className="container">
					      			<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">About</h2>
					      				<p>
					      					I am currently a researcher in an <a href="https://elsiklab.missouri.edu/" target="_blank" rel="noopener noreferrer">evolutionary biology lab </a>
					      					at the University of Missouri. My responsibilities are developing and maintaining software as well as administering our (10)
					      					servers and switches. I was part of the <a href="https://missouriepscor.org/" target="_blank" rel="noopener noreferrer">Missouri EPSCoR</a> project,
					      					where I developed ancillary <a href="https://modirt.missouriepscor.org/" target="_blank" rel="noopener noreferrer">websites</a>
					      					, <a href="http://radar.missouriepscor.org/">tools</a>, <a href="http://128.206.234.21:3000/#/" target="_blank" rel="noopener noreferrer">demos</a> and a <a href="https://data.missouriepscor.org/" target="_blank" rel="noopener noreferrer">dataportal</a>.
					      					I was in charge of data management policy, storage and archiving. I helped researchers comply with <a href="https://www.dataone.org/">DataOne</a> policies and architect their <a href="https://github.com/theWizardsBaker/ckan_privatedataset">data storage</a>.
					      					I've written packages to help them navigate and <a href="https://github.com/theWizardsBaker/ckan_inotify">use</a> the research computing servers.
					      				</p>
					      				<p>
											  	Currently I write and contribute to <a href="https://github.com/elsiklab">bioinformatics software</a>. Our <a href="http://maizemine.rnet.missouri.edu:8080/maizemine/begin.do">intermine software</a> is used for data mining and our <a href="http://128.206.116.5:8080/apollo-lsaa/2236/jbrowse/index.html?loc=1%3A62958895..94439600&tracks=DNA%2CAnnotations&highlight=">jBrowse Apollo</a> is used for gene annotation.
											  	I collaborate with other labs on <a href="https://github.com/theWizardsBaker/PED_file_generator/blob/master/ped_generator.py" target="_blank" rel="noopener noreferrer">genomic pipelines</a> and <a href="https://github.com/theWizardsBaker/vcf_prep"  target="_blank" rel="noopener noreferrer">data processing</a>. I help students with projects and running statistics in R and MatLab.
											  	I keep our servers secured and up to date. I deploy a lot of virtual machines using KVM and keep all of our infrastructure running.
											  	Sometimes I just write fun things, like this <a href="https://github.com/theWizardsBaker/sbatch_gen">SLURM generator</a> and <a href="https://github.com/theWizardsBaker/HPC-Dashboard" target="_blank" rel="noopener noreferrer">HPC Job Submission tool</a>.
					      				</p>
					      			</div>
					      			<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">Technical</h2>
					      				<p>
					      					Our pipelines are written in Ruby, Python, Perl, C++, Shell and Java.
					      					Our databases are huge (12tb each &#128556;) PostgreSQL databases. We've also been working on storing variants (VCF files) in NoSQL / Graph databases.
					      					Web projects use Django, Groovy, Drupal (PHP), Node.js, Vue.js and React.js. Really, we just use whatever tool is right for the job.
					      				</p>
					      			</div>
					      		</div>
					      	</div>
		    				</div>
			      		<div className="column is-6-tablet">
				      		<div className="box">
			      				<h3 className="title is-3">University of Missouri</h3>
			      				<h3 className="subtitle is-5">Programmer Analyst, Finance</h3>
			      				<div className="field is-grouped is-grouped-multiline has-text-weight-bold is-hidden-mobile">
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Front End</span>
					      					<span className="tag is-info">Javascript jQuery</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Back End</span>
					      					<span className="tag is-info">ColdFusion Peoplesoft</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Databases</span>
						      				<span className="tag is-info">OracleDB</span>
					      				</div>
					      			</div>
				      			</div>
			      				<div className="has-text-weight-bold is-hidden-tablet">
				      				<div className="tags">
				      					<span className="tag is-success">Front End</span>
				      					<span className="tag is-info">Javascript jQuery</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Back End</span>
				      					<span className="tag is-info">ColdFusion Peoplesoft</span>
				      				</div>
				      				<div className="tags">
				      					<span className="tag is-success">Databases</span>
					      				<span className="tag is-info">OracleDB</span>
				      				</div>
				      			</div>
				      			<br/>
				      			<div className="container">
				      				<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">About</h2>
					      				<p>
					      					I worked in the financial department of the University of Missouri writing <a href="https://webapps.umsystem.edu/">applications</a> for the controllers and accountants.
					      					Our programs were used on campus by staff and faculty. I worked closely with the head controllers to make custom applications
					      					that subverted Peoplesoft's limitations.
					      					I ended up re-writing the entire code base and created a web framework that would create reports based on JSON template files.
					      				</p>
					      			</div>
					      			<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">Technical</h2>
					      				<p>
					      					I wrote web applications in Javascript and Adobe's ColdFusion. I introduced jQuery and Git version control to the team.
					      				</p>
					      			</div>
					      		</div>
					      	</div>
			      		</div>
			      		<div className="column is-6-tablet">
			      			<div className="box">
			      				<h3 className="title is-3">Freelance</h3>
			      				<h3 className="subtitle is-5">Everything</h3>
			      				<div className="field is-grouped is-grouped-multiline has-text-weight-bold is-hidden-mobile">
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Front End</span>
					      					<span className="tag is-info">Javascript</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Back End</span>
					      					<span className="tag is-info">PHP Ruby on Rails</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Databases</span>
						      				<span className="tag is-info">MySQL SQLite</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Mobile</span>
						      				<span className="tag is-info">Android</span>
					      				</div>
					      			</div>
				      				<div className="control">
					      				<div className="tags has-addons">
					      					<span className="tag is-success">Desktop</span>
						      				<span className="tag is-info">C++ QT</span>
					      				</div>
					      			</div>
				      			</div>
			      				<div className="has-text-weight-bold is-hidden-tablet">
					      				<div className="tags">
					      					<span className="tag is-success">Front End</span>
					      					<span className="tag is-info">Javascript</span>
					      				</div>
					      				<div className="tags">
					      					<span className="tag is-success">Back End</span>
					      					<span className="tag is-info">PHP Ruby on Rails</span>
					      				</div>
					      				<div className="tags">
					      					<span className="tag is-success">Databases</span>
						      				<span className="tag is-info">MySQL SQLite</span>
					      				</div>
					      				<div className="tags">
					      					<span className="tag is-success">Mobile</span>
						      				<span className="tag is-info">Android</span>
					      				</div>
					      				<div className="tags">
					      					<span className="tag is-success">Desktop</span>
						      				<span className="tag is-info">C++ QT</span>
					      				</div>
				      			</div>
				      			<br/>
				      			<div className="container">
				      				<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">About</h2>
					      				<p>
					      					I've worked on many projects as a freelancer. I've built phone, desktop and web applications. A few examples include: 
					      					working on Android applications for <a href="http://crallomeatmarket.com/index.php">C. Rallo Meat Company</a> in O'Fallon Missouri as well as a C++ application to control pricing and operation of
					      					meat scales. Another being, developing the <a href="http://slwoa.com/">St. Louis Wrestling Official Association</a> website to enable online scheduling of officials to 
					      					area wrestling meets.
					      				</p>
					      			</div>
				      				<div className="content">
					      				<h2 className="title is-5 is-marginless has-text-primary is-spaced heading">Technical</h2>
					      				<p>
					      					I wrote the Android applications in Java and used PHP and Ruby on Rails for web development.
					      				</p>
					      			</div>
					      		</div>
					      	</div>
			      		</div>
			      	</div>
			      </div>
	      	</div>
      	</div>
      	<div className="hero is-warning">
      		<div className="hero-body">
  					<div className="cover">
  						<div className="cover-image"></div>
	    				<div id="visualization">
	    				</div>
  					</div>
      		</div>
      		<div className="hero-body">
	      		<h1 className="title is-2 has-text-centered drop-shadow-light is-spaced">Skills & Proficiencies</h1>
	    			{/*<h3 className="title is-5 has-text-centered drop-shadow-light is-spaced is-hidden-mobile">
	    				double click to expand selections
	  				</h3>*/}
      			<div>
	      			<div className="columns is-multiline is-mobile is-variable">
						    <div className="column is-12-mobile is-8-tablet is-narrow">
						    	<h1 className="title is-4 drop-shadow-light">Web Development</h1>
						    	<div className="columns is-multiline is-mobile is-variable">
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
						    <div className="column is-12-mobile is-4-tablet is-narrow">
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
									          <li>React Native</li>
									          <li>Android</li>
									        </ul>
										</li>
									</ul>
							      </div>
						      </div>
							  </div>
	      				<div className="column is-12-mobile is-12-tablet is-narrow">
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
