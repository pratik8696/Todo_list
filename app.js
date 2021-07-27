const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();
const mongoose = require('mongoose');
// setting up bodyparser and ejs for use
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
// connection to mongodb
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true
});
// global variables Here
let work_items = ['get food', 'eat food'];
// new items schema
const itemsSchema = {
  item: String
};
const Items = mongoose.model("Item", itemsSchema);
const item1 = new Items({
  item: "Get up at 7:00am"
});
const item2 = new Items({
  item: "Breakfast at 8:00am"
});
const item3 = new Items({
  item: "College at 9:00am"
});
const defaultItems = [item1, item2, item3];



app.get('/', function(req, res) {
  // here we have to use the () to activate the function and this is used so that the app.js can decide when to use that function............
  let dates = date.Day();

  Items.find({},function(err,results){
    console.log(results);
    if (defaultItems.length==0) {
      Items.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Inserted Default Items");
        }
      });
      res.redirect("/");
    }
    else{
      res.render('list', {
        todays_date: dates,
        newitem: results
      });
    }
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

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running");
});
