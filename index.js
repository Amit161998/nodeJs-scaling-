const express = require('express')
const app = express();

const port = parseInt(process.argv[2]) || process.env.PORT || 3000;
const options = [
    "Got for it !",
    "May be sleep",
    "Do some exercise",
    "I dont know",
    "I would not"
]
app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * options.length)

    res.json({
        port,
        processId: process.pid,
        advice: options[randomIndex]
    })
})
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})