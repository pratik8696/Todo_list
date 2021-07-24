const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');
const app = express();

// setting up bodyparser and ejs for use
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// global variables Here
let items = ['Pratik', 'Mihir'];
let work_items = ['get food', 'eat food'];


app.get('/', function(req, res) {
  // here we have to use the () to activate the function and this is used so that the app.js can decide when to use that function............
  let dates=date.getDay();

  res.render('list', {
    todays_date: dates,
    newitem: items
  });
  
});

app.post('/', function(req, res) {
  let newitem = req.body.newitem_here;
  console.log(req.body);
  if (req.body = "Work List") {
    work_items.push(newitem);
    res.redirect("/work");
  } else {
    items.push(newitem);
    res.redirect('/');
  }

});

app.get("/work", function(req, res) {
  let head = "Work List";

  res.render('list', {
    todays_date: head,
    newitem: work_items
  });

});

app.get("/about",function(req, res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server is up and running");
});
