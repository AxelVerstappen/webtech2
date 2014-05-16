# Webtech 2: notes
In this document you will find notes on what I have learned during my webdevelopment courses this year. 
In general I will write down the basics of each subject I have learned and then document on how each assignment works.

## Navigation
[1. Working with Git](#git)

[2. Advanced Javascript](#advancedjs)

[3. Animating with CSS](#cssanimations)

[4. Realtime apps with node.js and socket.io](#nodejs)

[5. SASS](#sass)

## 1. Working with Git<a name="git"></a>
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




## 2. Advanced Javascript<a name="advancedjs"></a>
During these lessons we focused on more advanced usage of Javascript, where we would learn to make our own prototype functions and framework and learn to work with the concept of DRY (Don't Repeat Yourself).

### prototypes
Prototypes enable us to make our own little 'framework' with Javascript which enable us to create the exact functions we need without having to load the entire JQuery framework into the application (this decreases the loadtime, especially for mobile applications).

### event handling
An HTML event can be something the browser does, or something a user does, like: a button being clicked, a page being loaded, etc. When an event happens, we can write Javascript to 'do something' when a certain event is detected.

### objects
Almost everything in JavaScript can be an Object: Strings, Functions, Arrays, Dates... Objects are just data, with added properties and methods.

### inheritance
Inheritance in Javascript basically means merging two objects into one. It is done with the .prototype function which takes all the properties from another Object so it can use it in the newly created Object.

### namespacing
In many programming languages, namespacing is a technique employed to avoid collisions with other objects or variables in the global namespace. They're also extremely useful for helping organize blocks of functionality in your application into easily manageable groups that can be uniquely identified.
In JavaScript, namespacing at an enterprise level is critical as it's important to safeguard your code from breaking in the event of another script on the page using the same variable or method names as you are.

### closures
Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. 
```
function init() {
	var name = "Mozilla"; // name is a local variable created by init
	function displayName() { // displayName() is the inner function, a closure
	    alert (name); // displayName() uses variable declared in the parent function    
	}
	displayName();    
}
init();
```

### geolocation
Browsers can get the current location of a user with one line of Javascript.
`navigator.geolocation.getCurrentPosition(success, error);`

### localstorage
Localstorage allows us to save data locally, cookies also work but can contain much less data and are transmitted to the server with every request, we don’t want that overhead. It's perfect for e.g. caching API calls! Localstorage is client-side only and can store up to 5MB at a time.
```
localstorage.setItem("weather", response); 
var weather = localstorage.getItem("weather"); 
```

### Assignment (Opdracht3, Opdracht4 & Opdracht5)

#### Opdracht 3

What I learned during this chapter is how to build your own little 'framework' like JQuery without having to import the JQuery library. In short, I created my own Color and AddClass function by creating prototypes of the Javascript library to make a little To Do List.

#### Opdracht 4

In this one, I used the newly learned techniques of importing the Forecast API, combining it with the current geolocation and storing it in localstorage. After storing it into localstorage, I used some of the data from the API and read it out in the HTML.
There wasn't too much time for this assignment so I only completed the functionalities, not the CSS.

#### Opdracht 5

This assignment had to be done in groups of 2 students so together with Kim Janssens, I made a working weather app. We used the same techniques as in the previous assignment, together with CSS3 animations depending on the temperature etc. We also used some prototype functions but not as much as in the first assignment.



## 3. Animating with CSS<a name="cssanimations"></a>
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

### Assignment (Opdracht1 & Opdracht2)

#### Opdracht 1

In this assignment, I started out with 3 colored balloons floating on top of eachother. When the stack was being clicked, it automatically assigned different classes to each balloon using JQuery. When the class is set, the balloons execute a specified animation for each class.

#### Opdracht 2

In this exercise, I made an interface that's full of animations, most of them onload. For example: the header flips in and after it has, the header text appears sliding in from the left.




## 4. Realtime apps with node.js and socket.io<a name="nodejs"></a>

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

```
script(src="http://code.jquery.com/jquery-latest.min.js")
script(src="/faye/browser/faye-browser.js")
script(src="/faye/client.js")
```
   
* Next, you can start out by creating a Faye client in any jade file you desire by adding this code. 

`var client = new Faye.Client("http://localhost:8000/");`

* After this, you can subscribe to a channel to get messages published to a certain path (in this case the path name is /messages)

```
client.subscribe("/messages", function(message) {
    	alert("Got a message: " + message.text);
});
```
   
* As a last step, you still have to publish messages to that given path and we do this by publishing something, for example:

```
client.publish("/messages", {
	text: "Hello world"
});
```
   
####nodemon
Nodemon is a utility that will look for any changes in the source code of your application and will refresh the app whenever something changes. You can also restart your application yourself by just typing `rs` in the command prompt.
You can install nodemon by using the command: `npm install -g nodemon`

### A little more advanced

#### using MongoDB
I learned about MongoDB all by myself, at home. Firstly you obviously have to install the dependencies for it (I chose to work with Monk instead of the popular Mongoose because the guides I used all used Monk). The first thing that's important to know about MongoDB is that you don't have a visualisation of your own database like in SQL unless you install a program like Robomongo.
Second, there is no such thing as a relationhip between tables (called collections), there are embedded documents.
The last important thing is that you don't really have to create a collection before being able to store something in it. MongoDB dynamiccaly creates collections of the moment something is stored in one through scripts. It also consists entirely out of JSON so you can read the data like you would read data from an API.

### Assignment (Timder)

#### Timder

This was my final project for these lessons, I made a 'Tinder' app for our school in which students can create an account and upload 3 pictures in which they would display their best works so far in Design or Development. 
The main screen is only seen by companies who would like to quickly browse through the best work of everyone in our school and maybe have a chat with them. The only thing they have to do is enter their name & choose if they only want to see Designers, Developers or both. 
AFter this, they are redirected to the 'tinder page' where they get to see the images and have to swipe using a [Leapmotion device](https://www.leapmotion.com/). Swiping left means disliking and swiping right means liking a profile.
The results are posted to a scoreboard page on which all incoming data is displayed realtime.

The app is made with Node.js in the Express framework, working with Jade (template language), Faye (send and receive realtime data from the tinder app to the scoreboard page) and MongoDb (storing users, companies & likes and reading it all in the admin page to remove profiles or companies to prevent database overflowing). The CSS has been done using SASS for easier development & I have also added Gulp into the mix just to test what it does and how it worked.

## 5. SASS<a name="sass"></a>

### What is SASS?
SASS is a CSS preprocessor like Less and Stylus. A CSS preprocessor comes in handy because you have to write less code, you can use variables (like in Javascript etc), you can use mixins, and it gives you easy, manageable CSS files (unlike the 1287-line code you used to have).
Also nice to know is that it requires Ruby to install.

What a SASS stylesheets directory looks like:
```
/css 
 style.css 
/scss 
 /partials 
 _nav.scss 
 _footer.scss 
 style.scss 
 _base.scss
```

#### Compiling SCSS to CSS
There are several commands to compile SCSS files into one CSS file.

Manually:
`sass style.scss ../css/style.css`

Automatically:
`sass --watch style.scss:../css/style.css`

Automatically compressed:
`sass --watch style.scss:../css/style.css --style compressed`

#### Imports
Using imports, you can divide all your stylesheets for easier maintenance and still compress them into one afterwards. 

```
@import 'base'; 
@import 'partials/nav'; 
@import 'partials/footer';
```

#### Variables
You can use variables like you use them in Javascript or PHP. It is strongly recommended to use them for colors, font-sizes, etc. for when you have to change a website's colors quickly.

```
$color-primary: #e74c3c; 
h1 
{ 
 color: $color-primary; 
} 
!
a 
{ 
 color: lighten($color-primary, 50%); 
}
```

#### Nesting
You can also nest CSS code inside elements like this:
```
#container 
{ 
 p 
 { 
 strong 
 { 
 } 
!
 em 
 { 
 } 
 } 
}
```


#### Mixins
Mixins are super-handy when it comes to more complex CSS, for example CSS that requires vendor preﬁxes like:
```
@mixin border-radius($radius) { 
 -webkit-border-radius: $radius; 
 -moz-border-radius: $radius; 
 -ms-border-radius: $radius; 
 border-radius: $radius; 
}
```

Then you could use it in the CSS like this:
```
nav 
{ 
 @include border-radius(10px); 
}
```

