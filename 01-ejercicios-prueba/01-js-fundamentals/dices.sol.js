// [SOLUCIÓN]

const dices = (function() {
  var a = null, b = null;
  var throwDice = function () {
    return Math.ceil(Math.random() * 6);
  };

  return {
    reset: function() {
      a = null;
      b = null;
    },
    throw: function() {
      a = throwDice();
      b = throwDice();
    },
    print: function() {
      a && b ?
        a + b === 12 ?
          console.log("Double six! Yeahh!") :
          console.log("Dice 1:", a, " Dice 2:", b) :
        console.log("Throw first!");
    }
  }
})();