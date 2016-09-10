var Alexa = require('alexa-sdk');
var appId = 'amzn1.ask.skill.11f10bc1-334a-44a9-ba47-2b15fe106258';

var handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello Sadie, you\'re learning to program!');
    },
    'DadsSmellyIntent': function () {
        this.emit(':tell', 'Yes, he is!');
    },
    'FavoriteFoodIntent': function () {
        this.emit(':tell', 'Spaghetti and meat sauce, of course.');
    }
 };

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


