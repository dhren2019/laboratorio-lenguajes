/**
 * La implementacion original dispara cada función de trigger sin hacer
 * espera activa (await), por lo que las promesas se inician en paralelo.
 * La idea es esperar cada vez que disparamos un trigger.
 */

const run = async triggers => {
  for (const trigger of triggers) {
    await trigger();
  }
  console.log("first");
};
