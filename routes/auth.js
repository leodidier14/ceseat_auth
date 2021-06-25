//Load required elements
const router = require('express').Router()
// const bcrypt = require('bcryptjs')
const path = require('path')
const express = require('express')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

//Load validation functions
const {logincontroller} = require('../controller/routeController')
const {logoutcontroller} = require('../controller/routeController')
const {accesstokencontroller} = require('../controller/routeController')

//Use json parser
router.use(express.json());

//Routes
router.post('/login', function(req, res){
    logincontroller(req, res)
});
router.post('/logout', function(req, res){
    logoutcontroller(req, res)
});
router.post('/accesstoken', function(req, res){
    accesstokencontroller(req, res)
});

module.exports = router;