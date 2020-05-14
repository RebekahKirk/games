class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        this._hunger--;
    }
    drink(){
        this._thirst--;
    }
}

class Dog extends Animal{
    constructor(name, lovesBarking){
        super(name);
        this._lovesBarking = lovesBarking;
    }
    get lovesBarking(){
        return this._lovesBarking;
    }
}
class Cat extends Animal{
    constructor(name, lovesPlaying){
        super(name);
        this._lovesPlaying = lovesPlaying;
    }
    get lovesPlaying(){
        return this._lovesPlaying;
    }
}
class Fish extends Animal{
    constructor(name, lovesSwimming){
        super(name);
        this._lovesSwimming = lovesSwimming;
    }
    get lovesSwimming(){
        return this._lovesSwimming;
    }
}

// const buster = new Animal ("Buster"); // Creates a new animal called Buster
// console.log(buster.name); //Prints Buster in the terminal
// console.log(buster.thirst); // Prints Buster and thirst stat in the terminal
const buster2 = new Dog ("Buster2", true); // Creates a new dog called Buster2
console.log(buster2); // Prints Buster in the terminal with all stats
