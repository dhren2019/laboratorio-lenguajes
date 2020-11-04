const alphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
};

type SignalState = "on" | "off";

interface MorseConfig {
  codes: typeof alphabet,
  timeouter: (fn: () => void, units: number) => void;
  writer: (state: SignalState) => void;
}

interface MorseTransmissor {
  tx: (message: string) => void;
}

const MorseTx = (config: MorseConfig, finishCallback: () => void): MorseTransmissor => {
  const txSignal = (state: SignalState, timeSlot: number) => {
    config.timeouter(() => config.writer(state), timeSlot);
  };

  const transcodeSymbol = (symbol: string): SignalState[] =>
    symbol === "." ? ["on", "off"] : ["on", "on", "on", "off"]

  const transcodeChar = (char: string): SignalState[] => {
    if (char === " ") {
      return Array(4).fill("off");
    } else {
      return [
        ...flattenArray<SignalState>(
          config.codes[char].split("").map(transcodeSymbol)
        ),
        "off",
        "off"
      ];
    }
  };

  const transcodeMessage = (message: string): SignalState[] =>
    flattenArray(message.toLowerCase().split("").map(transcodeChar));

  return {
    tx: (message) => {
      const signalMessage = transcodeMessage(message);
      signalMessage.forEach(
        (s, i) => txSignal(s, i)
      );
      config.timeouter(finishCallback, signalMessage.length);
    },
  };
};

const flattenArray = <T>(array: Array<T[]>): T[] => [].concat(...array);

const myMorseTx = MorseTx(
  {
    codes: alphabet,
    timeouter: (fn, dots) => setTimeout(fn, dots * 100),
    writer: (s) => console.log(s === "on" ? "1" : "0"),
  },
  () => console.log("Transmission completed!")
);

myMorseTx.tx("SOS sos");
