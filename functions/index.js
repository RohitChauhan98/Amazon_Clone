const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase/functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NVTKUSIPnLGVNrcr224RLmVt6sZLWGHNRewg2RYLHMVcVIPLttWbOmDU1dZ9VjOadwMYTxgTzkewb806BEGe5T4007qByo6Bu")

//APi

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//APi routes
app.get('/', (request, response) => response.status(200).send('hello word'))

exports.api = functions.https.onRequest(app)

//Listen command
// http://127.0.0.1:4000/functions