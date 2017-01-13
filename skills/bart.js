
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'I understood this as ' + skill +
    ' but unfortunately my master has not connected me to the Bart API yet');
};
