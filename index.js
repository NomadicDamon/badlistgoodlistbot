require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

  //json stuff
  const fs = require('fs');
  let rawbaddata = fs.readFileSync('badlist.json');
  savedbadlist = JSON.parse(rawbaddata);
  global.badlist = savedbadlist;
  console.log(badlist);
  let rawgooddata = fs.readFileSync('goodlist.json');
  savedgoodlist = JSON.parse(rawgooddata);
  global.goodlist = savedgoodlist;
  console.log(goodlist);
  //end json stuff

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
