'use strict'
function MyArray(...args) {
    this.length = 0;
    for(let i = 0; i< args.length; i++){
        this.push(args[i]);
    }
 }
 MyArray.prototype = new MyArrayProto();
 function MyArrayProto(){
    this.every = function(fn){
        if(this.length === 0){
            return true;
        }
        for(let i = 0; i < this.length; i++){
            if(!fn(this[i], i, this)){
                return false;
            }
        }
        return true;
    } 
 }
   
const myArray = [20, 40, 60, 'ff'];
console.log(myArray.every(el => el % 2 === 0))
const myArray2 = [3, 4, 6, 12];
console.log(myArray2.every(el => el % 2 === 0))