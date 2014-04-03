# Webtech 2: notes
In this document you will find notes on what I have learned during my webdevelopment courses this year. 
In general I will write down the basics of each subject I have learned and then document on how each assignment works.

## Working with Git
### What is git?
Git is a version control system or VCS. Another famous version control system is SVN or Subversion. A version control system makes it easier to collaborate on projects in teams, especially when a project consists of source code like PHP, HTML, .. 

Git is a distributed VCS while Subversion is a centralized VCS. When using a distributed VCS like Git, you commit your changes locally on your machine until your are ready to push your changes to an online repository. In a centralized VCS like Subversion, commits are done on a central server.

A possible issue with systems like SVN is that when the online repository/server goes down, you can't commit your work until the server comes back online. With Git, that problem goes away as all commits are done locally first. Git also allows us to use multiple repositories and synchronize work between them if we wanted to. This creates greater freedom when it comes to setting up development workflows.

Without a good VCS it would be a lot harder to collaborate on projects and safely deploy them to staging and production servers. More on deployment later.

### git core concepts

#### clone
You can *clone* a repository in order to get the most recent copy of the repository. This will be your 'own version' of this repository in which you can develop on your own machine.

#### fetch
The *fetch* command gets the latest version of your files from the remote repository. The difference with the pull request is that fetching only gets your files, without merging them with your own local copy.

#### pull
Similar to the fetch command, the *pull* command fetches the latest version of the files from a repository and subsequently merges these files with your local copies.

#### push
After a commit, always follows a *push* command. This will push all the recent commits to the repository, ready to be fetched or pulled by others.

#### commit
Committing files temporarily stores the changes you have made but doesn't push them right into the repository yet. 

A *commit* should be a container for small and related changes. Fixing two bugs for example should produce two separate commits. 

#### branch
When you start off with a new repository, you will only have one branch: the *master* branch. The master branch will contain a history of commits directly towards it but you master branch is also the code anyone will be able to pull or fetch. This is where a problem occurs: if someone wants to pull the latest version of your repository while you're still fixing bugs in the master branch, they will get a version that won't work. This is a big problem when you're coding together in a team and a teammember needs the latest version.

This is why it is a popular convention to use the master branch as a clean and stable copy of the software and create other branches to fix minor bugs or add features before deploying them to the master branch. After you are 100% sure that the code on the other branch works, you can *merge* the small branch with the master branch and it'll be safe to fetch from again.

#### merge
Like I've already said in the branch section: after you've finished developing in the branch you created for the new feature, you'll want to *merge* the master with the new feature branch. 

Merging takes 'snapshots' of the branches and merges them together.

### github.com
[GitHub.com](GitHub.com) is a commercial business that provides a hosting platform for Git repositories. It's especially known for hosting open source projects (which is free on GitHub) and for facilitating social coding with others. Private repositories aren't free.

GitHub is not the only provider of Git hosting, but it's one of the most famous ones, if not the most famous. Another popular Git hosting provider is [Bitbucket](https://bitbucket.org). Bitbucket offers private repositories for free to small teams which can be interesting.

#### Forking
*Forking* creates a copy of an existing repository on your GitHub account. To start working in that copy, you need to clone it to your local machine first. This way, you can contribute to an existing project or start a new one based on the forked project.

#### pull requests
*Pull requests* notify users about changes you pushed to a repository. After you initiate a pull request on GitHub, your changes can be reviewed and people can comment on your work. Once approved, the owner of the forked repository can decide to merge your changes into the repository so that anyone can pull in your changes. 

## Advanced Javascript
During these lessons we focused on more advanced usage of Javascript, where we would learn to make our own prototype functions and framework and learn to work with the concept of DRY (Don't Repeat Yourself).

### prototypes
Prototypes enable us to make our own little 'framework' with Javascript which enable us to create the exact functions we need without having to load the entire JQuery framework into the application (this decreases the loadtime, especially for mobile applications).

### event handling
### objects
### inheritance
### namespacing
### closures
### module pattern
### bower

## Animating with CSS
### Transitions
A transition in CSS3 is an animation between changes. These transitions are often being triggered by the class' pseude-selectors like :hover. 

A transition in code consists of 4 elements: property duration timing-function delay;
In code this would look like: `transition: background-color 5s linear 1s;`

This will trigger the given class to change to the given background-color in the :hover pseudo-selecter over 5s with a linear timing-function with 1s steps.

### Transforms
Transforming an element means to physically change the look of an element, like change it's size, angle or position.

Transformations are often used together with a transition to add a certain duration for the transformation.

#### 2D Transforms
* translate()
The translate method can make elements move over the screen without messing with your layout of the other elements. *translateX* moves an element from left to right or from right to left, while *translateY* moves the elements from top to bottom or vice versa.

* rotate()
The rotate function can make elements rotate a certain amount of degrees.

* scale()
The scale method can make elements grow or shrink according to the parameter you give with the function. The parameter is a decimal number (i.e. 2.1 or 3.5) and will make your element multiply it's size by whatever number you set.

* skew()
The skew method will turn an element in a given angle, depending on the parameters given for the X-axis and Y-axis.

* matrix()
The matrix method combines all of the 2D transform methods into one.

The matrix method take six parameters, containing mathematic functions, which allows you to: rotate, scale, move (translate), and skew elements.

#### 3D Transforms
* rotateX
With the rotateX method, the element rotates around its X-axis at a given degree.

* rotateY
With the rotateY method, the element rotates around its Y-axis at a given degree.

* perspective
The perspective method sets the angle of the view on an element. 

	The higher the value, the further you are away from the element.
	The lower the value, the closer you are to the element.

### Animations
In a way, animations and transitions are the same, they can both change the appearance of an element but there are some differences between them: 
* An animation consists of keyframes which divide the duration of the animation into %'s, while a transition executes the order in even steps over the given time.
* An animation can start whenever you want it to and keep on looping, but a transition has to be triggered by something (i.e. a button click).

## CSS Pre-processors

* sass, less & stylus
* compass & bourbon 

## Realtime apps with node.js and socket.io

####what is node.js
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

####non-blocking IO
Also known as asynchronous IO is short for the non-blocking input/output of a system. It basically means that while an input or output is being processed, other processing still contintues before transmission is finished.

####synchronous vs. asynchronous
Non-blocking IO is the contrary of synchronous IO, in which a system has to finish processing the current input/output before being able to process the next. This means that the progress of a program would be blocked when communication is in progress.

####single-threaded
Single-threaded means that only one command of code can be executed at a time, and it has to finish each given task in sequence before being able to start another.

####typical use-cases
It is most commonly used for real-time applications with push capability. For example: a system to exchange data fast like a chat system, massively multiplayer online games, ...

####web sockets
Node.js and Websockets are the perfect combination to write very fast, lag free applications which can send data to a huge number of clients. 

####sockets.io and faye
Both of these are types of websockets which can be installed with node.js packages. The main difference is that Faye enforces a publish-subscriber pattern/protocol of communication. In Socket.IO, you don’t have to, so it’s a simpler abstraction. Faye could be built on top of Socket.IO.

### Building a simple node.js app

####install node.js globally
Download Node.js from the website: http://nodejs.org/. Start the setup and follow the instructions, make sure you install npm with it (it's in the default options).

####install express globally
To install express globally, you have to open the command prompt and type the command: `npm install express -g`.

####generate an express app
The first thing you have to do is creating a directory somewhere on the machine using the following command: `mkdir hello-world`. Hello-world can be any name you want. Then use the command: `npm install`. This will install all the dependencies necessary to run your Express app for the first time.

####the package.json file
The package.json file will contain all of the data which will be necessary to run your application. For example, it contains the name of the application and it's dependencies in the current version(like Express, Faye, MongoDB, ...). 

####installing dependencies with npm
Npm stands for node package manager and is used to install every dependency you need for your application. Basically just add the name of the dependency to your package.json file and use the install command.
Every command starts with: `npm install` (followed by the name of the dependency to install it locally) or `npm install -g` (followed by the name of the dependency to install it globally).

####jade
Jade is a node.js template engine and is the default template engine when you use Express. It replaces basic html by using the same tags as html but without end tags. A thing to note is that you can use tabs OR spaces to indent, not both in one file.

####the MVC structure of an express app
The MVC structure consists out of three layers. To state it simply:
* You start out on the app.js layer which was created by the Express app which contains all the basics to establish a port connection and basic data for your routes.
* Immediately when you start the app, you get the route you want from the app.js file and jump to the routes folder where you pick up the right path.
* The routes folder then renders the right jade template file which is the presentation layer the user will see.

####adding Faye to the mix
Faye is a type of websocket and it is used to easily create an application to publish and subscribe to messages. To add it to your project: add it to your package.json file and install it through npm. Then you have to initialize the Faye & bayeux client in the app.js file.
* The first step to do this is by requiring faye in your variable list. 

	`var faye = require("faye");`

* Then we create a variable bayeux in which we mount it to the path "/faye" to connect and talk to the server and a timeout to give a maximum time to hold a connection open before returning a response. 

	```var bayeux = new faye.NodeAdapter({
	  mount:    "/faye",
	  timeout:  45
	});```

* Next, we can attach bayeux to an existing server by adding this code. 

	`bayeux.attach(server);`

####subscribing to and publishing events with Faye
Now that we have Faye running on the connection we already established, we can publish and subscribe to messages from within the application. 
* First you'll have to open up the layout.jade file and add the latest JQuery file and Faye file links to your head (the Faye map and files will be created at runtime so you don't have to worry about them)
   
	`script(src="http://code.jquery.com/jquery-latest.min.js")`
	
	`script(src="/faye/browser/faye-browser.js")`
	
	`script(src="/faye/client.js")`
   
* Next, you can start out by creating a Faye client in any jade file you desire by adding this code. 

	`var client = new Faye.Client("http://localhost:8000/");`

* After this, you can subscribe to a channel to get messages published to a certain path (in this case the path name is /messages)

	```client.subscribe("/messages", function(message) {
    	alert("Got a message: " + message.text);
   	});```
   
* As a last step, you still have to publish messages to that given path and we do this by publishing something, for example:

	```client.publish("/messages", {
		text: "Hello world"
	});```
   
####nodemon
Nodemon is a utility that will look for any changes in the source code of your application and will refresh the app whenever something changes. You can also restart your application yourself by just typing `rs` in the command prompt.
You can install nodemon by using the command: `npm install -g nodemon`
