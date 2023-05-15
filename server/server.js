const express = require('express')
const app = express()

app.get("/api", (rep, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.listen(3000, () => { console.log("Server started on port 3000") })