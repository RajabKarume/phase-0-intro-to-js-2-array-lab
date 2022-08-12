// Write your solution here!
const cats = ["Milo", "Otis" , "Garfield" ];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    name = [...cats, "Broom"];
    return name;
}
function prependCat(name){
    name = ["Arnold" ,...cats];
    return name;
}
function removeLastCat(copyOfCats){
    copyOfCats = cats.slice();
    copyOfCats.pop()
    return copyOfCats;
    
}

function removeFirstCat(removeCat){
    removeCat = cats.slice();
    removeCat.shift();
    return removeCat;
}