//Load required elements
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const path = require('path')
const express = require('express')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const jwt = require('jsonwebtoken');

//Load user model
const Dev = require('../model/dev')

//Load validation functions
const { loginValidation } = require('../validation')

//Use json parser
router.use(express.json());


//Connect user
const logindevcontroller = async (req, res) => {

    //Check if data format is OK
    const { error } = loginValidation(req.body);
    console.log(error)
    if (error) return res.status(200).send(error.details[0].message)
    console.log(req.body)

    //Checking if the email exists 
    const reponse = await Dev.findOne({ where: { email: req.body.email } });
    if (!reponse) return res.status(200).send("L'utilisateur n'existe pas !");

    //Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, reponse.dataValues.password);
    if (!validPass) return res.status(200).send('Mauvais mot de passe')

    var refreshtoken = {
        userId: reponse.dataValues.id,
        token: jwt.sign(
            { userId: reponse.dataValues.id },
            'uc6wJq35CyAUV25aLn5pfarU8W9X86kNYK258bSpaVCmgez3722SmW7E3twAfxssV5V3MiU9Aq242Fjur8ji33L8NVeHjgXBDQ5m3PbB88573w6YP56chi5n8z3Y8jgiE24uW33SN8A3VsdEy2w3mS8mD58iq4V8LUiFDeJ2DZ8249AuSQLXP4ZTz8VgBi82u5G884gmj925553Y23K2FTRNLk7zK9qw4Zjy3Kd96veATFWvWM9Y8QK89t8v7sCF6rm27z7kuuUmBLq5dsjv5F57Zv44NvwGebGUW9ca227379N2JCWw8tcwvGD3qHK6q4239hNrSS35s2tc8feN232AR6aLMc6e55NW6CtYNePh6D5J2yHRB6797w4446qkJbQGA2kNF63U6vuK7jZ5kzK542e6y9y3ALTBqBmjsCLv5h6YY5iN6X34wBf3ghqpiJtN4Za5SE6medjimdrX2xFGe4g8DQQh3Rh83RhGDz3rr5byXB8KNcf3QaKNP9Xh',
            { expiresIn: '24h' }
        )
    }
    if (refreshtoken) { await Dev.update({ refreshtoken: refreshtoken.token }, { where: { email: req.body.email } }) };

    var accesstoken = {
        userId: reponse.dataValues.id,
        token: jwt.sign(
            { userId: reponse.dataValues.id },
            'spvDLMU678yZu635T32TKfc8pQj4jJ4f',
            { expiresIn: '72h' }
        )
    }
    res.status(200).send({ token: accesstoken.token, id: reponse.dataValues.id });
};
//logout user
const logoutdevcontroller = async (req, res) => {

    const fromaccesstoken = req.headers['authorization'];
    try {
        const verifytoken = await jwt.verify(fromaccesstoken, 'spvDLMU678yZu635T32TKfc8pQj4jJ4f')
        try {
            const finduser = await Dev.findOne({ where: { id: verifytoken.userId } })
            if (finduser.refreshtoken != null) {
                try {
                    await Dev.update({ refreshtoken: null }, { where: { id: verifytoken.userId } })
                    res.status(200).send("Déconnecté")
                } catch (error) {
                    res.status(200).send("Erreur lors de la déconnexion")
                }
            }
            else { res.status(200).send("L'utilisateur est déjà déconnecté") }
        } catch (error) {
            res.status(200).send("L'utilisateur n'existe pas");
        }
    } catch (error) {
        res.status(200).send("Le token n'est pas valide");
    }
};
//Check access
const accesstokendevcontroller = async (req, res) => {

    const fromaccesstoken = req.headers['authorization'];
    try {
        const verifytoken = await jwt.verify(fromaccesstoken, 'spvDLMU678yZu635T32TKfc8pQj4jJ4f')
        try {
            const finduser = await Dev.findOne({ where: { id: verifytoken.userId } })
            var accesstoken = {
                userId: finduser.dataValues.id,
                token: jwt.sign(
                    { userId: finduser.dataValues.id },
                    'spvDLMU678yZu635T32TKfc8pQj4jJ4f',
                    { expiresIn: '15m' }
                )
            }
            if (finduser.refreshtoken) {
                try {
                    const verifyrefreshtoken = await jwt.verify(finduser.refreshtoken, 'uc6wJq35CyAUV25aLn5pfarU8W9X86kNYK258bSpaVCmgez3722SmW7E3twAfxssV5V3MiU9Aq242Fjur8ji33L8NVeHjgXBDQ5m3PbB88573w6YP56chi5n8z3Y8jgiE24uW33SN8A3VsdEy2w3mS8mD58iq4V8LUiFDeJ2DZ8249AuSQLXP4ZTz8VgBi82u5G884gmj925553Y23K2FTRNLk7zK9qw4Zjy3Kd96veATFWvWM9Y8QK89t8v7sCF6rm27z7kuuUmBLq5dsjv5F57Zv44NvwGebGUW9ca227379N2JCWw8tcwvGD3qHK6q4239hNrSS35s2tc8feN232AR6aLMc6e55NW6CtYNePh6D5J2yHRB6797w4446qkJbQGA2kNF63U6vuK7jZ5kzK542e6y9y3ALTBqBmjsCLv5h6YY5iN6X34wBf3ghqpiJtN4Za5SE6medjimdrX2xFGe4g8DQQh3Rh83RhGDz3rr5byXB8KNcf3QaKNP9Xh')
                    res.status(200).send(accesstoken.token);
                } catch (error) {
                    res.status(200).send("Vous devez vous reconnecter");
                }

            }
            else { res.status(200).send("false"); }
        } catch (error) {
            res.status(200).send("false");
        }
    } catch (error) {
        res.status(200).send("false");
    }
};

module.exports.logindevcontroller = logindevcontroller;
module.exports.logoutdevcontroller = logoutdevcontroller;
module.exports.accesstokendevcontroller = accesstokendevcontroller;