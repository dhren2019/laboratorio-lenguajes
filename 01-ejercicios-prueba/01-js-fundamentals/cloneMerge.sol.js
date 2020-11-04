// [SOLUCIÓN]

// A.
function clone(source) {
  var result = {};
  for (var key in source) {
    result[key] = source[key];
  }
  return result;
} 

// B.
function merge(source, target) {
  var result = clone(target);
  for (var key in source) {
    result[key] = source[key];
  }
  return result;
}