var fs = require("fs");

fs.readFile('/media/DATA/Node/Basic/input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");