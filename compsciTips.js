'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.fb968d65-df18-47bc-8ac1-63d0fb3bbae1"; 

var SKILL_NAME = "Computer Science tips";
var GET_FACT_MESSAGE = "Here's your tip: ";
var HELP_MESSAGE = "Ask me for a computer science tip";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";
var ERROR_MESSAGE = "ERROR!";

var data = [
    "Use comments to comment your code and help others understand what you wrote",
    "Don't forget semi-colons.",
    "Always name variables properly",
    "Save your code every few minutes.",
    "Don't capitalize the first letter in a method name in Java and C.",
    "Always proofread your code.",
    "Always cite any code not created by yourself.",
    "Always type your name at the top of each project.",
    "Test your program thorougly.",
    "Use tabs, not spaces.",
    "It is recommended to use Object Oriented design.",
    "Use github.",
    "Learn multiple languages.",
    "Java is a good beginner langauge.",
    "Repetition is key.",
    "Be patient.",
    "Do not sit and write code for multiple hours. Take a break after 1 hour of coding.",
    "Do not give up.",
    "Understand how things work and do not blindly copy.",
    "Learn to work with others.",
    "Keep learning something new everyday.",
    "Coding for fun is good practice.",
    "Try to create solutions to problems.",
    "Name programs effectively.",
    "It is recommended to write a text file that contains a brief summary of what your code does.",
    "Don't make things complicated.",
    "Collaborate with others to learn new things and develop new ideas.",
    "Learn how computers process code.",
    "Work on one task at a time.",
    "Learn to Google, but remember to cite code.",
    "Don't be afraid to ask for help.",
    "Understand fundamentals.",
    "Take breaks while debugging.",
    "If you get stressed coding, take a break.",
    "Write pseudocode."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewTipIntent');
    },
    'GetNewTipIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};