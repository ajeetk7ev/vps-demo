import express from 'express';

const app = express();

app.get("/health", (req, res) => {
   res.json({
      success:true,
      message:"Server is running"
   });
})

app.listen(3000,"0.0.0.0",() => {
    console.log("Server is running at port 3000")
})
