let foodButton = document.getElementById("foodButton");
let drinkButton = document.getElementById("drinkButton");
let playButton = document.getElementById("playButton");

let hungerLevel = document.getElementById("hungerLevel");
let thirstLevel = document.getElementById("thirstLevel");
let happinessLevel = document.getElementById("happinessLevel");

class Animal{
    constructor(name, hunger, thirst, happiness){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    this._happiness = 100;
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
    get happiness(){
        return this._happiness;
    }
    eat(){
        this._hunger--;
    }
    drink(){
        this._thirst--;
    }
    happiness(){
        this._happiness--;
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

// let Buster = new Animal ("Buster", 50, 50, 50);

let dogPic = document.getElementById("dogPic");
let catPic = document.getElementById("catPic");
let fishPic = document.getElementById("fishPic");

let buttons = document.getElementsByClassName("buttons");

dogPic.addEventListener("click", ()=>{
    pet = "dog";
    dogPic.style.visibility = "hidden"
    catPic.style.visibility = "visible";
    fishPic.style.visibility = "hidden";
    catPic.src= "dog.png";
});
catPic.addEventListener("click", ()=>{
    pet = "cat";
    dogPic.style.visibility = "hidden";
    fishPic.style.visibility = "hidden";
});
fishPic.addEventListener("click", ()=>{     
    pet = "fish";
    fishPic.style.visibility = "hidden"
    dogPic.style.visibility = "hidden";
    catPic.style.visibility = " visible";
    catPic.src = "fish.png";
});

// const feed = () =>{
//     hungerLevel.innerHTML = (`Hunger Level: ${Animal._hunger--}`); 
// }
// foodButton.addEventListener = ("click", feed);