//Global Vars
const Discord = require('discord.js');
const client = new Discord.Client();
const configuration = require("./configuration.json");

client.login(configuration.token);

client.on("ready", () => {
  client.user.setStatus("available");
  client.user.setActivity("tetris poorly"); });

const commands = { //list of message for be sent to the user
  "ping": "Pong!",
  "hello": "world",
  "github": "github.com/tubbyyyy"}

client.on("message", (message) => {
  if(message.author.bot){return;} //if its a bot - disregard
  if(message.content[0] !== configuration.prefix){return;} //if its not a command by the user - disregard

  message.content = message.content.substring(1).toLocaleLowerCase();
    //used to deal with messages
    if(commands[message.content]){message.reply(commands[message.content]);}
    //used to deal with commands
    if(message.content === "name"){message.reply("Your username is " + message.author.username);}

    if(message.content === "help"){
      let reply = "The commands are \n";
      for(command in commands){reply += command + "\n";}
      message.reply(reply);} });