const config = require('config');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = config.get('apiToken');

let bot;

function setBot() {
  // Create a bot that uses 'polling' to fetch new updates
  bot = new TelegramBot(token, {polling: true});
  return bot;
}

function getBot() {
  return bot;
}

module.exports = {
  getBot,
  setBot
}
