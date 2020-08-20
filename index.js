function BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  BoardMember.prototype.veto = funstion() {
    console.log(`No, I must disagree`);
  }
  
}