import express from "express";
//------------------------//
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
//------------------------//
// or we can use the 
// app.use(express.static("public"))

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html") //E:\UDAY SHARMA\Languages\MERN Stack\Node, Express and MongoDB\Udemy Web Dev Bootcamp\3.4.1 Middleware/public/index.html
  res.sendFile(__dirname + "/public/index.html"); // send the html file to the webpage
  // res.send(`${__dirname}`) // send the file name on the webpage
});

// using body - parser
app.post('/submit',(req,res)=>{
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
