const events = require('events');
const userEvents = new events.EventEmitter();

/**
 * 
 * @param {object} user 
 * @param {string} user.name 
 */
function createUserStoreland(user) {
  // TODO créer l'utilisateur dans la base Oracle par exemple
  userEvents.emit('created', user);
}





/// Dans un projet A
// on aimerait créer l'utilisateur et lui envoyer un SMS
userEvents.on('created', (user) => {
  console.log('envoi de sms à ' + user.name);
});


/// Dans un projet B
// on aimerait créer l'utilisateur et lui envoyer un email
userEvents.on('created', (user) => {
  console.log('envoi de email à ' + user.name);
});

createUserStoreland({name: 'Romain'});