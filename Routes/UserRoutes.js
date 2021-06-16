const router = require('express').Router();

router.get('/nameList', (req, res) => {
    res.json(['shakil','babu','torikus', 'fahim morshed'])
})

router.get('/details', (req, res) => {
    res.json([
        {
            name:'Shakil Babu',
            age:20,
            dep:'Computer'
        },
        {
            name:'Torikus sadik raihan',
            age:21,
            dep:'Computer'
        },
        {
            name:'Fahim Morshed',
            age:22,
            dep:'Computer'
        }
    ])
})

module.exports = router ;