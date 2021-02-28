let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();

    if (hour < 12 && 1 <= hour) {
        return `Goodmorning: ${name}` ;
      }
    else {
        return `Goodevening: ${name}` ;
      }
}