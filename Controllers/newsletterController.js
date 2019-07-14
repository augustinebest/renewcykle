const service = require('../Services/newsletterServices');
const validate = require('../Factories/Validate');

exports.subscribe = async (req, res) => {
    const email = req.body.email;
    const validateEmail = await validate('email', email);
    if(validateEmail == true) {
        console.log('This is valid')
    } else {
        console.log('This is not valid')
    }
    console.log(validateEmail)
}