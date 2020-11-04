// [SOLUCIÓN]

const calculateAverage = function(classResults) {
  var results = Object.values(classResults);
  return results.reduce(function(acc, r) {
    return acc + r;
  }, 0) / results.length;
}

const getClassification = function(average) {
  switch (Math.floor(average)) {
    case 0:
    case 1:
    case 2:
    case 3:
      return "Muy Deficiente";
    case 4:
      return "Insuficiente";
    case 5:
      return "Suficiente";
    case 6:
      return "Bien";
    case 7:
    case 8:
      return "Notable";
    case 9:
      return "Sobresaliente";
    default:
      return "Matrícula de Honor";
  }
}

const printAverage = function(classResults) {
  console.log(getClassification(calculateAverage(classResults)));
}

printAverage(eso2o);
