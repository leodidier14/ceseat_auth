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

//Load tokenapp controller
const {verifTokenAppController} = require('../controller/tokenAppController')

//Use json parser
router.use(express.json());

//Routes user
router.post('/login', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    logincontroller(req, res)
});
router.post('/logout', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    logoutcontroller(req, res)
});
router.post('/accesstoken', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    accesstokencontroller(req, res)
});

//Routes dev
router.post('/dev/login', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    logindevcontroller(req, res)
});
router.post('/dev/logout', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    logoutdevcontroller(req, res)
});
router.post('/dev/accesstoken', async function(req, res){
    const tokenapp = req.headers['tokenapp'];
    checkTokenApp = await verifTokenAppController(tokenapp)
    if (checkTokenApp == null) return res.status(200).send("La requête ne peux venir que de la gateway")

    accesstokendevcontroller(req, res)
});
module.exports = router;