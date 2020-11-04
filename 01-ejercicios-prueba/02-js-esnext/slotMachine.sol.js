// [SOLUCIÓN]

class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  createRandom() {
    return Math.random() >= 0.5;
  }

  play() {
    this.coins++;
    const slot1 = this.createRandom();
    const slot2 = this.createRandom();
    const slot3 = this.createRandom();

    if(slot1 && slot2 && slot3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const machine = new SlotMachine();

machine.play();
