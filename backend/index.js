import express from 'express';

const app = express();

app.get("/health", (req, res) => {
   res.json({
      success:true,
      message:"Server is running"
   });
});

app.post("/api/users",(req, res) => {
   console.log("This is api for user creation");
})

app.get("/api/users, (req, res) => {
        console.log("This is the api for get users);
})

app.listen(3000,"0.0.0.0",() => {
    console.log("Server is running at port 3000")
})
