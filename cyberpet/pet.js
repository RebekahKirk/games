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
        this._thirst = 50;
        this._happiness = 50;
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
        this._thirst++;
    }
    happiness(){
        this._happiness++;
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
    newDog = new Dog ("Buster");
});

// const getHungry = () =>{
//     if(newCat._hunger>0){
//         newCat.eat()
//         hungerLevel.innerHTML = newCat._hunger
//         setTimeout(getHungry, 2000)
//     } else (newCat.hunger>100)
// }

catPic.addEventListener("click", ()=>{
    pet = "cat";
    dogPic.style.visibility = "hidden";
    fishPic.style.visibility = "hidden";
    // getHungry();
    newCat = new Cat ("Meow");
    // console.log(newCat);
    // newCat.eat();
    // console.log(newCat);
});

fishPic.addEventListener("click", ()=>{     
    pet = "fish";
    fishPic.style.visibility = "hidden"
    dogPic.style.visibility = "hidden";
    catPic.style.visibility = " visible";
    catPic.src = "fish.png";
    newFish = new Fish ("Goldie")
});

let hungerNum = document.getElementById("hungerNum");
let thirstNum = document.getElementById("thirstNum");
let happinessNum = document.getElementById("happinessNum");

foodButton.addEventListener("click", () =>{
    hungerLevel.innerHTML = newCat._hunger++;
});
foodButton.addEventListener("click", () =>{
    hungerLevel.innerHTML = newFish._hunger++;
});
foodButton.addEventListener("click", () =>{
    hungerLevel.innerHTML = newDog._hunger++;
});
drinkButton.addEventListener("click", () =>{
    thirstLevel.innerHTML = newCat._thirst++;
});
drinkButton.addEventListener("click", () =>{
    thirstLevel.innerHTML = newFish._thirst++;
});
drinkButton.addEventListener("click", () =>{
    thirstLevel.innerHTML = newDog._thirst++;
});
playButton.addEventListener("click", () =>{
    happinessLevel.innerHTML = newCat._happiness++;
});
playButton.addEventListener("click", () =>{
    happinessLevel.innerHTML = newFish._happiness++;
});
playButton.addEventListener("click", () =>{
    happinessLevel.innerHTML = newDog._happiness++;
});
// foodButton.addEventListener("click", )