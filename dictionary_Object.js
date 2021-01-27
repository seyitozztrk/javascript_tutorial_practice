var myBird = {
    "name" : "Limos",
    "legs" : 2,
    "tails" : 1,
    "friends" : ["Nezaket"] 
};

var nameValue = myBird.name; //accessing with dot notation 

var numberOfLegs = myBird['legs']; //accessing with bracket notation 
var varName = "friends";
var friendValue = myBird[varName];//accessing with variable  

console.log(nameValue);
console.log(numberOfLegs);
console.log(friendValue);

//update object properties 

myBird.friends = "nothing";
console.log(myBird.friends);

//add new properties 
myBird.bark = "cik cik";
console.log(myBird.bark);

//delete properties from object 
delete myBird.bark;
console.log(myBird.bark);

//example of object

var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh" 
};

function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("hello"));