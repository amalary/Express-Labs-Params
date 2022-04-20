const express = require('express'); 

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










app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 