# What is this repo?
I find it much better to build websites when I have a good workflow for my local server. This even includes basic stuff like installing git so that anyone can do this. (as long as you have a mac  (sorry windows homies))


# Instructions
Getting this set up should be rather straight forward if you have all the software installed already.

## Install Git
install git. If you're on a mac, just open terminal and type git. You get a sweet dialog like this:

```xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.```

Then click yes. Takes a few minutes to download and you're good to go. You now have git!
![Screenshot](https://i.imgur.com/tuV6it5.png =50)


## Install node.js with npm
We can install this a few ways, but homebrew is by far the easiest. Here is the command to install homebrew.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will prompt you a few times and then take a few minutes to download. Now you have homebrew! Use it to install node

```
brew install node
node -v
```

The latest Node version is  8.0.0 as of writing this. It's very helpful to know what version of node you have installed. This also installs npm!


## Download code
Open terminal and navigate to a folder where it makes sense to save code. I just got a new mac so I'm going to try keeping everything in a folder called code at ~/Documents


```
cd ~/Documents/code
git clone https://github.com/kevando/grunt.git
```

## Start your local server
Navigate to your directory and run 

```
npm install
node app.js
```

The first command does runs through package.json and installs some dependancies. The second command starts your local webserver!

Navige to `http://127.0.0.1` in your browser and you should see this"

![Screenshot](https://i.imgur.com/lSQolfd.png.png =50)


## Grunt
Install it 

```
npm install -g grunt-cli
```

-g means to install this npm package globally, now run it:


```
grunt local
```

I will get into the configuration later, but this takes styles.scss and compiles it into a css file that you can use. Now refresh your web server and you should see the beautiful styling applied :)

![ss](https://i.imgur.com/f9M0gkm.png)


# Conclusion
This repo works well for an express boilerplate also.

