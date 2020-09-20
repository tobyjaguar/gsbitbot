const config = require('config');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = config.get('apiToken');

function resetBot() {
  // Create a bot that uses 'polling' to fetch new updates
  let bot = new TelegramBot(token, {polling: true});
  return bot;
}

module.exports = {
  resetBot
}
