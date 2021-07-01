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

//Load validation functions
const {logindevcontroller} = require('../controller/routeDevController')
const {logoutdevcontroller} = require('../controller/routeDevController')
const {accesstokendevcontroller} = require('../controller/routeDevController')

//Use json parser
router.use(express.json());

//Routes user
router.post('/login', async function(req, res){
    logincontroller(req, res)
});

router.get('/available', function(req, res) {
    res.send(true)
});

router.post('/logout', async function(req, res){
    logoutcontroller(req, res)
});
router.post('/accesstoken', async function(req, res){
    accesstokencontroller(req, res)
});

//Routes dev
router.post('/dev/login', async function(req, res){
    logindevcontroller(req, res)
});
router.post('/dev/logout', async function(req, res){
    logoutdevcontroller(req, res)
});
router.post('/dev/accesstoken', async function(req, res){
    accesstokendevcontroller(req, res)
});

module.exports = router;