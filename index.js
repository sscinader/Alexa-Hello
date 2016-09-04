var Alexa = require('alexa-sdk');

var handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello Sadie, you\'re learning to program!');
    }
 };

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


