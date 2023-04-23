const convertToCelsius = function(temp) {
  return Math.round(((temp-32)*(5/9))*10)/10
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp*(9/5)+32))*10)/10
};

// Having done a bit of work on a unit converter, this one was relatively simple

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
