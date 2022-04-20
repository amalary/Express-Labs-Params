const express = require('express'); 
const { parse } = require('path/posix');

const app = express();

const PORT = 4000; 

// Greetings 

// app.get('/greetings', (req,res) => {
//     res.send('<h1>Hello Stranger</h1>')
// })

// Refactored Greetings 

app.get('/greetings/:name', (req,res) => {
    res.send(`Hello ${req.params.name} how have you been ? It's been so long since we last spoke.`)
})


// Tip Calculator 

app.get('/tip/:total/:tipPercentage', (req,res) => {
    const tipTotal = parseInt(req.params.total) * parseFloat(req.params.tipPercentage)
    res.send(`The total for your bill is ${req.params.total} and the tip percentage is ${req.params.tipPercentage}. Your tip is ${tipTotal}`)
})









app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 