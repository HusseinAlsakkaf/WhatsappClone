//importing
import express from "express";
//app config
const app = express();
const port = process.env.PORT || 9000;
//midleware
//DB config
//???
//api routes
app.get("/",(req,res)=> res.status(200).send('I am alive!!!'));
//listening
app.listen(port,()=>console.log(`Listening on port: ${port}`));