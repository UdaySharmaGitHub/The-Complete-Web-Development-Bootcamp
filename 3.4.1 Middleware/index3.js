import express from "express";

const app = express();
const port = 3000;

const logger =(req,res,next) =>{
  console.log( `1st Middleware the request method ${req.method}`); // the method is "GET"
  console.log( `1st Middleware the request url ${req.url}`); // And the requset URL is  "/" 
  next(); // it jump on the next middleware if exist or jump on other requests
}
// iF WE DIDN'T use the next its doesn't goes to next handler
// Second custom middle ware
const logger2 =(req,res,next) =>{
  console.log( `2nd Middleware the request method ${req.method}`); // the method is "GET"
  console.log( `2nd Middleware the request url ${req.url}`); // And the requset URL is  "/" 
  next(); 
}
//  custom middleware using the function using the logger
app.use(logger);
app.use(logger2)

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
