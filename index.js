const express = require('express');
const app = express();
const port = 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');


app.get('/',(req, res) => {
    const data = [
        {name:'Shakil Babu', dep:'Computer'},
        {name:'Tarek Rahman', dep:'Computer'},
        {name:'Rabbi Khan', dep:'Computer'},
        {name:'Torikus Sadik Raihan', dep:'Computer'},
        {name:'Shakil Babu', dep:'Computer'},
        {name:'Shakil Babu', dep:'Computer'},
        {name:'Shakil Babu', dep:'Computer'}
    ]
    res.render('pages/home.ejs',{title:'Our classroom title', isShow:false, data})
})

app.get('/about', (req, res) => {
    res.render('pages/about.ejs',{title:'About - Our classroom title'})
})

app.get('/details', (req, res) => {
    res.render('pages/details.ejs', {title:'Details - Our classroom title'})
})


app.listen(port, () => {
    console.log(`${port} is running...`);
})