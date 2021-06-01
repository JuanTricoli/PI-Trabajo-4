// index.js

const express  = require('express');
const mongoose = require('mongoose');

// agregamos esta linea
const cors     = require('cors');

const app = express()

// y esta otra
app.use(cors());
