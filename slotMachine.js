class SlothMachine {
    constructor(){
        this.coins = 0;

    }

    play(){
        this.coins++;
        this.shot1 = Math.random() < 0.5;
        this.shot2 = Math.random() < 0.5;
        this.shot3 = Math.random() < 0.5;
    
      if(this.shot1 === this.shot2 && this.shot1 === this.shot3){
        console.log(`Felicidades!, has ganado ${this.coins} monedas`);
        this.coins = 0;
      }else{
        console.log('Prueba la siguiente vez')
      }
    }
  }
  
  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"