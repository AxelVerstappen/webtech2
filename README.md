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
