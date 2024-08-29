import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// using morgan
// Send the request to the console using the morgan (i am using postman)
// 1) Using Combined morgan
app.use(morgan("combined")); // ::1 - - [19/Aug/2024:14:11:58 +0000] "GET / HTTP/1.1" 200 14 "-" "PostmanRuntime/7.41.1"

// 2) Using comman morgan
app.use(morgan("common")) //::1 - - [19/Aug/2024:14:15:37 +0000] "GET / HTTP/1.1" 200 14

// 3) Using short morgan
app.use(morgan("short")) //::1 - GET / HTTP/1.1 200 14 - 4.011 ms

// 2) Using tiny morgan
app.use(morgan("tiny")) // GET / 200 14 - 4.011 ms

// 2) Using dev morgan
app.use(morgan("dev")) // GET / 200 4.011 ms - 14



app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
