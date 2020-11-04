// [SOLUCIÓN]

// Solución
function values(obj) {
  var result = [];
  for(var prop in obj) {
    result.push(obj[prop]);
  }
  return result;
}

console.log(values({id: 31, duration: 310, name: "long video", format: "mp4"})); // [31, 310, "long video", "mp4"]

// Solución Challenge:
function Person(name) {
  this.name = name
}

Person.prototype.walk = function() {
  console.log("I'm walking");
}

function valuesChallenge(obj) {
  var result = [];
  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      result.push(obj[prop]);
    }
  }
  return result;
}

var john = new Person("John");
console.log(valuesChallenge(john)); // ["John"]
