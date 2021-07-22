const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// setting up bodyparser and ejs for use
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// global variables Here
let items=['Pratik','Mihir'];


app.get('/', function(req, res) {

  let date = new Date();
  // let dayno = date.getDay();
  // let dateno
  // let day = "";
  // if (dayno == 0) {
  //   day = "Sunday";
  // } else if (dayno == 1) {
  //   day = "Monday";
  // } else if (dayno == 2) {
  //   day = "Tuesday";
  // } else if (dayno == 3) {
  //   day = "Wednesday";
  // } else if (dayno == 4) {
  //   day = "Thursday";
  // } else if (dayno == 5) {
  //   day = "Friday";
  // } else {
  //   day = "Saturday";
  // }
  let options = {
    weekday:'long',
    day:'numeric',
    month:'long'
  };
  var dates=date.toLocaleDateString("en-US",options);

  res.render('list', {
    todays_date: dates,
    newitem:items
  });
});

app.post('/', function(req,res){
  let newitem=req.body.newitem_here;
  items.push(newitem);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log("Server is up and running");
});
