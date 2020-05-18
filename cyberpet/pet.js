let foodButton = document.getElementById("foodButton");
let drinkButton = document.getElementById("drinkButton");
let playButton = document.getElementById("playButton");

let hungerLevel = document.getElementById("hungerLevel");
let thirstLevel = document.getElementById("thirstLevel");
let happinessLevel = document.getElementById("happinessLevel");

let newCat; 

class Animal{
    constructor(name, hunger, thirst, happiness){
        this._name = name;
        this._hunger = 50;
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
        this._hunger++;
    }
    drink(){
        this._thirst--;
    }
    happiness(){
        this._happiness--;
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
}
class Fish extends Animal{
    constructor(name, lovesSwimming){
        super(name);
    }
}

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

    newCat = new Cat ("Meow");
    console.log(newCat);
    newCat.eat();
    console.log(newCat);
});

fishPic.addEventListener("click", ()=>{     
    pet = "fish";
    fishPic.style.visibility = "hidden"
    dogPic.style.visibility = "hidden";
    catPic.style.visibility = " visible";
    catPic.src = "fish.png";
});

let hungerNum = document.getElementById("hungerNum");
let thirstNum = document.getElementById("thirstNum");
let happinessNum = document.getElementById("happinessNum");

foodButton.addEventListener("click", () =>{
    hungerLevel.textContent=newCat.hunger;
})