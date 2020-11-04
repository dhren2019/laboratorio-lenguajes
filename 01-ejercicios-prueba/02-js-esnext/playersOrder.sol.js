// [SOLUCIÓN]

const nextTurn = ([first, ...last]) => [...last, first];

const getPlayersOrder = (players, turns) => {
  let result = players;
  for (let i = 0; i < turns; i++) {
    result = nextTurn(result);
  }
  return result;
}

console.log(getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2)); // ["Pablo", "Lucia", "Ana", "Juan"]
