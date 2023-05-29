'use strict'
function MyArray(){
    this.every = function(fn){
        if(this.length === 0){
            return false;
        }
        for(let i = 0; i < this.length; i++){
            if(fn(this[i], i, this)){
                return true;
            }
        }
        return false
    } 
}
const myArray = [2, 4, 6, 12];
console.log(myArray.every(el => el % 2 === 0))
const myArray2 = [3, 4, 6, 12];
console.log(myArray2.every(el => el % 2 === 0))