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

{"success":true,"data":{"success":false,"reason":"no_devices"}}%         
{"success":true,"data":{"success":false,"reason":"no_devices"}}%         

app.listen(3000,"0.0.0.0",() => {
    console.log("Server is running at port 3000")
})
