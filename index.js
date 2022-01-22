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
// What does this do?
// This is a function that is called when the server is started that will connect to the MongoDB database.
// What is MongoDB database?
// MongoDB is a database that is used to store data.
// Can you teach me code? 

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



// Hello! I'm Rosca Santigria! I am the gatekeeper of the server.
// I am the gatekeeper of the server.
// My job is to protect the server from malicious users.

// The gatekeeper will monitor the server for malicious users with a variety of web, mobile and blockchain security checks.
// Most of the system is automated and the gatekeeper will not be able to stop malicious users from accessing the server without the help of the developers and the community.

// This is Jon Senterfitt, and I am establishing the DAO in the codebase that will become our metaverses.

// Additional characters we will need to succeed in our jrouney of crushing quests and code challenges are
// The gatekeeper NPC
// The developer
// The designer
// The community
// The community manager
// The community member
// The avatar maker
// The code slinger
// The promoter
// The wallet maker
// The wallet stylist
// The wallet checker
// The bouncer
// The lawyer
// The architett


// There will also be fun characters that exist in this metaverse and throughout this code. 
// Thanks to AI (NPC and ML) we are able to create characters that will be able to interact with the server.

// This is what an NPC is in the codebase.

// A scene in the metaverse top down pixel game with the gatekeeper and the developer to build the metaverse.
// It should also be able to create characters and interact with the server.

// Create the gatekeeper NPC that will be able to protect the server from malicious users.
const gatekeeperNPC = (event,client, payload) => {
    console.log(`Client gatekeeperNPC: ${client.id}`);
    console.log('Authenticated as Rosca Santigria');

    // This will also load and reference an upgradeable smart contract on the Polygon and Ethereum blockchain.
    // The smart contract will be able to check if the user is a member of the community.

    // This is the gatekeeper's skill.
    // He has manu skills and skill sets.
    // this is the leveling system for the architect.
}

// A shared frontal lobe that allows all NPCs to communiticare from a centralized, distributed ledger of internal transaction nd mining logs on the network as source data for enhanced augemented artificaial intelligence training.
// This is the centralized ledger of internal transaction and mining logs on the network.

// The simple shared state: 

const NPC_NFT_TRADING_CARD_COLLECTION = {
    "cloud": {},
    "gatekeeper": {},
    "developer": {},
    "designer": {},
    "community": {},
    "communityManager": {},
    "communityMember": {},
    "avatarMaker": {},
    "codeSlinger": {},
    "promoter": {},
    "walletMaker": {},
    "walletStylist": {},
    "walletChecker": {},
    "bouncer": {},
    "lawyer": {},
    "architect": {},
    "npc": {},
    "ml": {},
    "server": {},
    "client": {},
    "github": {},
    "nft": {},
    "skills": {
        "totalAvailable": 0,
    },
    "levels": {},
    "transactions": {},
    "mining": {},
    "logs": {},
}

const floorTransactionPrice = 100;
const codeRoyalty = 0.1;

// NPC character skill set and stats
const GATEKEEPER = {
    "name": "gatekeeper",
    "level": 1,
    "skills": {
        "addMember": floorTransactionPrice * codeRoyalty,
        "removeMember": floorTransactionPrice * codeRoyalty,
        "addSkill": floorTransactionPrice * codeRoyalty,
        "removeSkill": floorTransactionPrice * codeRoyalty,
        "addLevel": floorTransactionPrice * codeRoyalty,
        "removeLevel": floorTransactionPrice * codeRoyalty,
        "addTransaction": floorTransactionPrice * codeRoyalty,
        "removeTransaction": floorTransactionPrice * codeRoyalty,
    },
    "royalties": {
        "0xAE034C930aA3E0cD2C7719fa7EF8Bb71cf3a7C42": {
            "identifier": "NeoDAO Public Wallet"
        },
    } 
}