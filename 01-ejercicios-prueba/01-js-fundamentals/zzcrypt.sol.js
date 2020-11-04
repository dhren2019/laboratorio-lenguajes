// [SOLUCIÓN]

var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decryptLetter(letter) {
  return letter !== " " ? plain[cipher.indexOf(letter)]: " ";
}

function decrypt(secret) {
  return secret.split("").map(decryptLetter).join("");
}

console.log(decrypt(secret));
