# CONTRIBUTION RULES 🙌👩‍💻

### 1. Give this Project a Star :

It takes less than five seconds and help us to reach as many people as we can in the opensource community 


### 2. Fork the repo :

You can get your own fork/copy of this project [Task Manager](https://github.com/emepuchades/task-manager) by using the <kbd><b>Fork</b></kbd></a> button or clicking [this](https://github.com/emepuchades/task-manager).


### 3. Ready, Steady, Go... :

Once you have completed these steps, you are ready to start contributing
by checking our [issues tab](https://github.com/emepuchades/task-manager/issues) and creating [pull requests](https://github.com/emepuchades/task-manager/pulls).

# Steps to make changes and contribute using GIT!
⚠️ Before you proceed make sure you have these installed : 
- [NodeJS](https://nodejs.org/) version 16+ 
- [NPM](https://npmjs.com/) version 8+

To make your own local copy of the repository you would like to contribute to, let’s first open up a terminal window.

We’ll use the `git clone` command along with the URL that points to your fork of the repository.

This URL will be similar to the URL above, except now it will end with `.git` . The URL will look like this:

https://github.com/emepuchades/task-manager.git

You can alternatively copy the URL by using the green "Clone or download" button from your repository page that you just forked from the original repository page. Once you click the button, you’ll be able to copy the URL by clicking the binder button next to the URL:

Once we have the URL, we’re ready to clone the repository. To do this, we’ll combine the `git clone` command with the repository URL from the command line in a terminal window:

```
git clone https://github.com/emepuchades/task-manager.git
```

### 4. Create a New Branch

To create your branch, from your terminal window, change your directory so that you are working in the directory of the repository. Be sure to use the actual name of the repository (i.e. task-manager) to change into that directory.

```
cd task-manager
```

Now, we'll create our new branch with the `git branch` command. Make sure you name it descriptively so that others working on the project understand what you are working on.

```
git branch my-branch
```

Now that our new branch is created, we can switch to make sure that we are working on that branch by using the git checkout command:

```
git checkout my-branch
```

Once you enter the git checkout command, you will receive the following output:

```
Output:
Switched to branch 'my-branch'
```

At this point, you can now modify existing files or add new files to the project on your own branch.

### 5. Use commitizen to give proper format to your commits

After you add your files to staging, before making a conventional ```git commit```, just write ```git cz``` and you will prompted to fill in any required fields. Your commit messages will be formatted according to the standards defined.

### 5. Follow the Pull Request template of the project

Make sure to add a brief description of your changes, screenshots and how-to-test steps
