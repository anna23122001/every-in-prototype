'use strict'
function MyArray(...args) {
    this.length = 0;
    for(let i = 0; i< args.length; i++){
        this.push(args[i]);
    }
 }
 MyArray.prototype = new MyArrayProto();
 function MyArrayProto(){
    this.push = function(...args){
        if(args.length > 0){
            for( let i = 0; i < args.length; i++){
                this[this.length++] = args[i];
            }
        }
        return this.length;
    };
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
   
const newArray = new MyArray(20, 40, 60);
console.log(newArray.every(el => el % 2 === 0))
const newArray2 = new MyArray(3, 40, 60);
console.log(newArray2.every(el => el % 2 === 0))