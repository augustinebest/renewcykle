const express = require('express')
const router = express.Router()
 
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('pages/login')
})

router.get('/signup', (req, res) => {
    res.render('pages/signup')
})
 
router.get('/team', (req, res) => {
    res.render('pages/team')
})

router.get('/gallery', (req, res) => {
    res.render('pages/gallery')
})

router.get('/howwework', (req, res) => {
    res.render('pages/howwework')
})

router.get('/about', (req, res) => {
    res.render('pages/about')
})
 
module.exports = router;