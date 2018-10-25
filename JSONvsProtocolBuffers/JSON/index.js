import express from "express";
const app = express()
const port = 3333

app.get('/', (req, res) => res.send(
    {
        "1":1234,
        "2":"helloworldstring",
        "3":Date(),
        "4":"1234567890",
        "5":true
    }
    ))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
