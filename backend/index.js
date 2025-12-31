import express from 'express';

const app = express();

app.get("/health", (req, res) => {
   res.send("I am working fine")
})

app.listen(3000,"0.0.0.0",() => {
    console.log("Server is running at port 3000")
})