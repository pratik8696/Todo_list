
exports.Date=function(){
  const date = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return date.toLocaleDateString("en-US", options);

}

exports.Day=function(){
  const date = new Date();
  const options = {
    weekday: 'long',
  };
  return date.toLocaleDateString("en-US", options);

}
console.log(module.exports);
