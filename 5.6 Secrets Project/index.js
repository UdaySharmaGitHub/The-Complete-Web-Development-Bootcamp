// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();

// 3. Use the public folder for static files.
const port = 3000;

app.use(express.static("public"));
const API_URL = "https://secrets-api.appbrewery.com/random";


// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(API_URL);
        res.render("index.ejs",{
            user :result.data.user ,
            secret: result.data.secret,
        })
    }catch(error){
        res.render("index.js",{
            user :"Unable to fetch user" ,
            secret: "Unable to fetch secret",
        })
    }
})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});