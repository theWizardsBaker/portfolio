(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(4),s=n(5),i=n(7),r=n(6),o=n(8),l=n(0),c=n.n(l),m=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"level ".concat("small"===this.props.size?"is-mobile":"")},this.props.links.map((function(t,n){return c.a.createElement("div",{key:n,className:"level-item has-text-centered is-".concat(e.props.size)},c.a.createElement("a",{href:t.path,title:t.text,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("span",{className:"icon is-link is-spaced"},c.a.createElement("i",{className:"fa ".concat(t.icon," ").concat("large"===e.props.size?"fa-3x":"fa-small"),"aria-hidden":"true"})),c.a.createElement("div",null,e.props.showText?t.text:"")))})))}}]),t}(c.a.Component);m.defaultProps={links:[],size:"small",showText:!0}},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(20),r=n.n(i),o=(n(30),n(4)),l=n(5),c=n(7),m=n(6),u=n(8),d=n(10);function h(){var e=Object(d.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var p=n(13),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"navbar-end"},this.props.routes.map((function(e,t){return s.a.createElement(p.b,{key:t,to:e.path,activeClassName:"is-active",className:"navbar-item",exact:!0},e.name)}))))}}]),t}(s.a.Component);f.defaultProps={routes:[]};var b=n(23),g=n.n(b),_='\n#!/usr/bin/env ruby\nrequire \'artii\'\nrequire \'colorize\'\nrequire \'filesize\'\n\n# don\'t throw an error on exit\ntrap "SIGINT" do\n  puts "\n Quitting..."\n  exit 130\nend\n\nbegin\n  \n  # splash screen\n  artii = Artii::Base.new({})\n  puts artii.asciify(\'SBatch Generator\').blue\n  # directions\n  puts "Generate a #{"SLURM bash script ".yellow} to run jobs on the rnet research cluster\n\n"\n  # puts "Run this command with -h for a list of more options\n\n"\n  printf "Press "\n  printf "Ctrl + C ".red\n  puts "at any time to quit\n\n"\n\n  # create time element\n  t = Time.now \n  # get the script name\n  printf "Enter a new SBatch script #{"job name".green} ( leave blank for `sbatch_[date]` default ): "\n  job_name = gets.chomp\n  job_name = "sbatch_#{t.strftime("%Y_%m_%d")}" if job_name.empty?\n\n  # our list of nodes\n  nodes = []\n  # list of node header elements\n  node_header = []\n\n  # get all the cluster info\n  # contents = `sinfo -S partitionname -O partitionname,available,cpus,cpusstate,defaulttime,freemem,memory`\n  # for testing only \n  contents = `cat sinfo_output`\n  # put all the clusters into a selectable object\n  contents.split("\n").each_with_index do |line, index| \n    line = line.split("s")\n    # get our header rows\n    if index < 1\n      node_header = line \n      next\n    end\n    # create a node\n    nodes.push({\n      name: line[0],\n      available: line[1],\n      cpus: line[2].sub(\'+\', \'\').to_i,\n      cpus_state: line[3].split("/"),\n      time_limit: line[4],\n      free_memory: line[5].to_i,\n      total_memory: line[6].sub(\'+\', \'\').to_i\n    })\n  end\n  # list our nodes\n  nodes.each.with_index(1) do |node, index|  \n    puts "#{index}) #{node[:name]}".green\n    free = (node[:cpus_state][1].to_f / (node[:cpus_state][0].to_f.nonzero? || node[:cpus_state][1].to_f) ) * 100\n    puts "[ CPU => #{node[:cpus]} (#{free.to_i} % free), MEM => #{Filesize.from("#{node[:total_memory]} MB").to_s("GB")} (#{Filesize.from("#{node[:free_memory]} MB").to_s("GB")} free), TIME LIMIT => #{node[:time_limit]} ]".colorize((:red unless node[:available].eql? \'up\'))\n    puts "-----------------------------"\n  end\n\n  # get the cluster to use\n  # node_selection.is_a? Numeric and \n  node_selection = 0\n  until (1..nodes.size).include? node_selection\n    printf "\nSelect a cluster from the list above to run on (number): "\n    node_selection = gets.chomp.to_i\n  end\n\n  # get the node\n  selected_node = nodes[node_selection - 1]\n\n  # get cpu usage\n  cpus = 0\n  until (1..selected_node[:cpus]).include? cpus\n    puts "\nThe #{selected_node[:name]} node has #{selected_node[:cpus].to_s.green} total CPUs available."\n    printf "Number of CPUs to use: "\n    cpus = gets.chomp.to_i\n  end\n\n  # get the memory\n  memory = 0\n  until (1..selected_node[:total_memory]).include? memory.to_i and memory =~ /d*[M|G]/\n    # get memory size\n    mem_gb = Filesize.from(selected_node[:total_memory].to_s + "MB").to_s("GB")\n    # print memory\n    puts "\n#{"#{selected_node[:total_memory]} MB".green} (#{mem_gb.green}) total memory is available."\n    printf "Amount of Memory to use (suffix #{"M".green} for megabytes and #{"G".green} for gigabytes): "\n    memory = gets.chomp.upcase\n    memory = memory.gsub(/s/, \'\')\n  end\n\n  # figure out time\n  selected_node[:time_limit]\n  days = selected_node[:time_limit].slice!(/d*-/)\n  hours, minutes, seconds = selected_node[:time_limit].split(":")\n\n  time = ""\n  # make sure it\'s in a close enough format\n  until time =~ /(d-)?d{1,2}(:d{1,2})*/\n    printf "\nThe maximum time alloted is"\n    printf " #{days[/d*/]} days".green if days \n    printf " #{hours} hours".green if hours and hours != \'00\'\n    printf " #{minutes} minutes".green if minutes and minutes != \'00\'\n    printf " #{seconds} seconds".green if seconds and seconds != \'00\'\n    puts "."\n    puts "Time formats include:"\n    puts "minutes (20) \nminutes:seconds (20:15) \nhours:minutes:seconds (2:20:15)\ndays-hours (1-2)\ndays-hours:minutes (1-2:20) \ndays-hours:minutes:seconds (1-2:20:15)".yellow\n    printf  "Estimate job completion time: "\n    time = gets.chomp\n    time = time.gsub(/[A-z]/, \'\')\n    time = selected_node[:time_limit] if time.empty?\n  end\n\n\n  # check if notifications\n  printf "\nWould you like email notification for you job\'s status? (yes / no): "\n  updates = gets.chomp.downcase.match(/^y/)\n\n\n  email = ""\n  update_types = ""\n  if updates\n    until not email.empty? \n      printf "Enter your #{"email".green}: "\n      email = gets.chomp.downcase\n    end\n\n    until %w( BEGIN END FAIL ALL ).include? update_types\n      puts "Select the job status for notifications"\n      printf "select #{"BEGIN END FAIL".green} or #{"ALL".green}: "\n      update_types = gets.chomp.upcase\n    end\n  end\n\n\n  # get the output name\n  puts "\nEnter the #{"command".green} to execute."\n  puts "If you need to execute multiple lines, it is recommended to leave this blank and edit the #{"#{job_name}.sh".green} file after creation."\n  printf "Command: "\n  code_snip = gets.chomp\n\n  # get the output name\n  puts "\nThe results from the commands above will be placed in an output file."\n  printf "Enter an output file name ( leave blank for `#{job_name}_[job-id].out` default ): "\n  output_file = gets.chomp\n  output_file = "#{job_name}_%j.out" if output_file.empty?\n\n\n  File.open("#{job_name}.sh", \'w\') do |f|\n    f.write("#!/bin/bash")\n    f.write("\n## sbatch params:\n## more params found here https://slurm.schedmd.com/sbatch.html\n## ----------------------------\n#SBATCH --partition=#{selected_node[:name]}\n#SBATCH --time=#{time}\n#SBATCH --cpus-per-task=#{cpus} \n#SBATCH --mem=#{memory}\n#SBATCH --job-name=#{job_name}\n#SBATCH --output=#{output_file}")\n    if updates\n      f.write("\n#SBATCH --mail-type=#{update_types}\n#SBATCH --mail-user=#{email}")\n    end\n    f.write("       \n## place your code to run below:\n## ----------------------------\n## example: \n## echo \'Hello World!\'\n#{code_snip}\n      ")\n  end\n\n  puts "----------------------------"\n  puts "\n\nThe file #{"#{job_name}.sh".yellow} has been written to: #{Dir.pwd.yellow}"\n  puts "You may run this job with the command: #{"sbatch #{job_name}.sh".yellow}"\nrescue Exception => e\n  puts e\nend\n',y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"header-content"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-7-desktop is-8-tablet"},s.a.createElement("h1",{className:"title drop-shadow is-huge is-hidden-mobile"},"Justin"),s.a.createElement("h1",{className:"title drop-shadow is-huge is-hidden-mobile"},"Le Tourneau"),s.a.createElement("h1",{className:"subtitle drop-shadow is-3 is-spaced is-hidden-mobile has-text-gray"},"justin.letourn@gmail.com"),s.a.createElement("h3",{className:"subtitle drop-shadow is-4 is-hidden-mobile has-text-spaced has-text-gray"},this.props.children),s.a.createElement("h1",{className:"title is-2 is-hidden-tablet has-text-centered is-marginless"},"Justin"),s.a.createElement("h1",{className:"title is-2 is-hidden-tablet has-text-centered"},"Le Tourneau"),s.a.createElement("h1",{className:"subtitle drop-shadow is-5 is-spaced is-hidden-tablet has-text-gray has-text-centered"},"justin.letourn@gmail.com"),s.a.createElement("h3",{className:"subtitle is-5 is-hidden-tablet has-text-centered has-text-spaced has-text-gray"},this.props.children)),s.a.createElement("div",{className:"column is-hidden-mobile"},s.a.createElement("div",{className:"hero-right"},s.a.createElement("div",{className:"scroll-content-down"},s.a.createElement(g.a,{className:"code-snip",language:"CodeSnip.language"},_)))))))}}]),t}(s.a.Component);y.defaultProps={title:""};var E=n(15),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"hero"},s.a.createElement("div",{className:"columns is-mobile is-hidden-mobile"},s.a.createElement("div",{className:"column is-2-tablet is-4-mobile"},s.a.createElement(E.a,{links:this.props.links,showText:!1}))),s.a.createElement("div",null,s.a.createElement("div",{className:"is-hidden-tablet"},s.a.createElement(E.a,{links:this.props.links,showText:!1})),s.a.createElement("p",{className:"has-text-link"},"Site built using React, Bulma and Node.js",s.a.createElement("br",null),"Source Code Available ",s.a.createElement("a",{href:"https://github.com/theWizardsBaker/portfolio",target:"_blank",rel:"noopener noreferrer"},"Here")),s.a.createElement("p",{className:"has-text-link"},"\xa9 Justin Le Tourneau, 2020"))))}}]),t}(s.a.Component);w.defaultProps={links:[]};n(223);var j=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={routes:[{path:"/",name:"Programming",title:"{ Developer Administrator Co-Founder }",component:Object(a.lazy)((function(){return n.e(6).then(n.bind(null,227))}))},{path:"/artwork",name:"Artwork",title:"Scratchboards &bull; Portraits &bull; Digital Art",component:Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,228))}))},{path:"/projects",name:"Current Projects",title:"&lsaquo; Games Projects Testing &rsaquo;",component:Object(a.lazy)((function(){return n.e(5).then(n.bind(null,229))}))}],photos:[{src:"/artwork/vince.jpg",width:4,height:3},{src:"/artwork/bird2.jpg",width:4,height:3},{src:"/artwork/tiger2.jpg",width:4,height:3},{src:"/artwork/tiger.jpg",width:16,height:9},{src:"/artwork/lupe.jpg",width:16,height:9},{src:"/artwork/squirell.jpg",width:16,height:9},{src:"/artwork/rabbit.jpg",width:4,height:3},{src:"/artwork/bird.jpg",width:4,height:3},{src:"/artwork/dog.jpg",width:4,height:3},{src:"/artwork/wolf.jpg",width:4,height:3},{src:"/artwork/bird3.jpg",width:4,height:3},{src:"/artwork/duke.jpg",width:16,height:8},{src:"/artwork/lion.jpg",width:16,height:9},{src:"/artwork/bailey.jpg",width:16,height:9}],links:[{path:"letourneau_resume.pdf",icon:"fa-file-text",text:"Resume"},{path:"https://github.com/theWizardsBaker",icon:"fa-github",text:"Github"},{path:"mailto:justin.letourn@gmail.com",icon:"fa-envelope",text:"Email"}]},s}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(p.a,null,s.a.createElement(h,null),s.a.createElement("header",{className:"hero is-warning"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(f,{routes:this.state.routes})),s.a.createElement(y,null,this.state.routes.map((function(e,t){return s.a.createElement(d.a,{key:t,path:e.path,children:s.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.title}}),exact:!0})})))),s.a.createElement(a.Suspense,{fallback:s.a.createElement("div",{className:"hero is-small is-info"},s.a.createElement("div",{className:"hero-body has-text-centered"},s.a.createElement("div",{className:"lds-ellipsis"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))))},s.a.createElement(d.c,null,this.state.routes.map((function(t,n){var a=t.component;return s.a.createElement(d.a,{key:n,path:t.path,render:function(){return s.a.createElement(a,{photos:e.state.photos,title:"route.title",links:e.state.links})},exact:!0})}))))),s.a.createElement(w,{links:this.state.links}))}}]),t}(s.a.Component);r.a.render(s.a.createElement(j,null),document.getElementById("root"))},25:function(e,t,n){e.exports=n(224)},30:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.ab049c3f.chunk.js.map