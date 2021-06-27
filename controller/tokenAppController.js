//Load required elements
const jwt = require('jsonwebtoken');

const verifTokenAppController = async (tokenapp) =>{
    try {
        const verifytoken = await jwt.verify(tokenapp, 'bu5f4EGg8x3XYe3rU7MK59hkK2TjpY24')
        tokenContent = verifytoken.id
        if (verifytoken.id == 27062021) {return tokenContent}
        else {return null}
    } catch (error) {
        return null 
     }
}

module.exports.verifTokenAppController = verifTokenAppController;