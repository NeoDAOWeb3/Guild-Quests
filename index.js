// Load & Initialize all the things
console.log('Welcome to the console!');

// So, without further ado. Let's get started!

// Load the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Load the user character config file which will hold all dynamic information about the environment, the meta verse that they are visiting and the code they intend to bring in. This is a safety mechanism and a strong gamified experience.

const config = require('./config'); // Load the config file and assign it to the state variable config on the server hosted on the server.
// Servers can be embedded in other servers.
// This is a complex concept.
// The server can be embedded in another server.
// It is simple, yet, it is powerful.
// iFrame embedding is a powerful concept.
// It is similar to a window into another metaverse if you reference two different servers in the right iFrame strategy.

// To learn more about iFrame embedding, visit https://www.youtube.com/watch?v=Q_X_Q_X_Q_X <---- Not a real link (We need to make an NFT collection of ASCII Art too).

console.log('Enabling codesharing and community coding session on the server.');

console.log('Tunnel connected for the server to be accessed by the client.');

console.log('Client discovery started');

console.log('Logging for internal teams on network traffic.'); // Share your network traffic with your team in the Github Project link here: [Github Project Link]

const clientConnected = (event,client) => {
    console.log(`Client connected: ${client.id}`);
};

const securityCheck = (event,client) => {
    console.log(`Client security check: ${client.id}`);
};

const createTransaction = (event,client, payload) => {
    console.log(`Client transaction: ${client.id}`);
};

const gatekeeperNPC = (event,client, payload) => {
    console.log(`Client gatekeeperNPC: ${client.id}`);
    // embed additional functions for the gatekeeperNPC here so that he can protect the server from malicious users.
    // One function that would be helpful is to check if the user is a member of the community by looking for an ERC20 token that was sold on OpenSea.
    // If the user is a member of the community, then he can access the server.
    // If the user is not a member of the community, then he can not access the server.
    
};

const checkWallet = (client,wallet) => {
    console.log(`Client wallet check: ${client.id}`);
    // Ensure the wallet has the correct token in it.
    // If the wallet has the token, then the user is a member of the community.
    // There is no further need for security checks.
    // If the wallet does not have the token, then the user is not a member of the community.
    // Redirect them to the community website to join the community.
}

// Event listener for socket connection on the server to run when a client connects to the server or disconnects
const clientDisconnected = (event,client) => {
    console.log(`Client disconnected: ${client.id}`);
};


console.log('Client connected, starting the server.');
console.log('server started');


// Load the routes
const routes = require('./routes');

// Load the models
const models = require('./models');

// Load the middleware
const middleware = require('./middleware');

// Load the services
const services = require('./services');

// Load the utils
const utils = require('./utils');

// Load the constants
const constants = require('./constants');
