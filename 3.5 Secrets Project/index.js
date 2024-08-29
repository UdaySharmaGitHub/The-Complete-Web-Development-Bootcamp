//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();
const port = 3000;

// Variable to check the user is userIsAuthorised
let userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

const passwordCheck = (req,res,next)=>{
    console.log(req.body);
    const password = req.body["password"];
    if(password === "ILoveProgramming") userIsAuthorised = true;
    next();
}

// Setting up the middleware
app.use(passwordCheck)

// Home file
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})
app.post("/check",(req,res)=>{
   if(userIsAuthorised)  res.sendFile(__dirname+'/public/secret.html');
   else  res.sendFile(__dirname+'/public/index.html');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });