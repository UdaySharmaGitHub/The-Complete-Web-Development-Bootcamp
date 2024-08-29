import express from "express";
const app = express();
const port = 3000;

//  using time module
app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "Its Weekend";
  let adv = "it's time to work hard";
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

//   sending the data to solution.ejs 
  res.render("solution.ejs", { dayType: type, advice: adv });
});
app.listen(port, () => {
  console.log(`Listining on the port ${port}`);
});
