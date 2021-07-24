
module.exports.getDate=getDate;

function getDate(){
  let date = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  var dates = date.toLocaleDateString("en-US", options);
  return dates;
}

module.exports.getDay=getDay;

function getDay(){
  let date = new Date();
  let options = {
    weekday: 'long',
  };
  var dates = date.toLocaleDateString("en-US", options);
  return dates;
}
console.log(module.exports);
