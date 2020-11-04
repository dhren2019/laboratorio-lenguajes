// [SOLUCIÓN]

// Sucede un problema muy común con el contexto del this.
// La función de entrada a setTimeout es lo que se comoce como callback.
// Es decir, una función que se pasa como argumento de otra función para
// que sea ejecutada por alguna entidad (que en principio desconocemos)
// en algun momento dado
// Este callback lo hemos declarado como 'function'. Si recordamos, en
// las funciones clásicas el this representa la entidad que llama a dicha
// función, pero esa entidad, que desconocemos, no tiene un miembro 'text'.
// Por tanto, la forma más fácil de arreglarlo es sustituir transformar el
// callback en una arrow function, puesto que el this en las arrow functions
// si que representaba el contexto donde habían sido definidas, que
// resultará ser la instancia de clase que ejecute el método remindMe() y que
// por tanto tendrá una propiedad 'text'.

setTimeout(() =>
  console.log(`Your reminder after ${delay} seconds is: ${this.text}`)
, delay * 1000);
