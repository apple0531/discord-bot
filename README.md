<img src="https://cdn-images-1.medium.com/max/2000/1*55023Q0DHGutevORRQh-pA.png" width=1000 height=300>

## Deploying a discord bot using node.js ##
This is the default source code for a bare-bones discord server running on node.js. This code was written for the proposes of providing a basic template to allow simple plug & play usage and easy scaleability for adding multiple commands for routing requests. This code will be changed for various reasons including but not limited to adding/deleting files, modules, etc.

* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
  * Install Node.js
  * Install NPM
  * Add Discord bot to Server
* [Installation](#installation)
* [Built With](#built-with)
  * Discord
  * Nodemon
* [License](#license)

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. These instructions will help you deploy your code to use on a discord bot. See prerequisites & installation for notes on how to deploy the project on a live bot.
* Main Bot File: bot.js

### Prerequisites ###
* Install Node.js - You must have [Node.js](https://nodejs.org/en/download/) installed on your local system. Download the Node.js source code or a pre-built installer for your operating system.
* Install NPM
  * Download the [Package Manager](https://www.npmjs.com/get-npm)
  * Double click on the package and follow steps to install.
* Add Discord bot to Server
  * Have "Manage Server" privileges - Contact your server owner to verify/request premissions to continue.
  * Authorize the bot - 
    * Copy the client id from your specific bot from the [Developer Portal](https://discordapp.com/developers/applications/) and paste it in the proper position in the following link: https://discordapp.com/oauth2/authorize?client_id={ClientId}&permissions=8&scope=bot
    * Select the desired server to add the bot to.
    * Click Authorize

### Installation ###
* Open terminal and ```cd``` into the root folder of the project.
* Copy the token of your bot and add it into the configuration file. This token can be found in your [Developer Portal](https://discordapp.com/developers/applications/).
* Run ```npm install``` to install all of the node modules(project dependencies) that are needed.
* Testing and Debugging
  * [Local Development Server](https://nodejs.org/en/docs/guides/getting-started-guide/)
    * run the `npm run dev` command from the directory that contains the main bot file.

### Built With ###
* [Discord](https://discord.js.org/#/) - Node module to communicate with the DiscordAPI
* [Nodemon](https://www.npmjs.com/package/nodemon) - Automatically restarts the bot when file changes in the directory are detected.

### License ###
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
- - - -
_a project by [Gurvinder Singh](https://github.com/gurvinder)_
