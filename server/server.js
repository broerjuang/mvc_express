'use strict'

// -----------------------------------------------------------------------------
// NODE MODULES
// -----------------------------------------------------------------------------


// Configuration
require('dotenv').config();

// Express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const cors = require('cors');

// JSON Web Tokens
const jwt = require('jsonwebtoken');
const ejwt = require('express-jwt');
const guard = require('express-jwt-permissions')();
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Initate Express
const app = express();
const router = express.Router();

// Data and Modeling
const mongoose = require('mongoose');

// Authentication
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GitHubStrategy = require('passport-github').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
