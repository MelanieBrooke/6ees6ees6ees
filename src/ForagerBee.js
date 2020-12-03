class ForagerBee extends Bee {
  constructor() {
    super();
    this.age: 10;
    this.job: 'make pollen';
    this.canFly: true;
    this.treasureChest: [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
