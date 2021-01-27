/**
 * var-> bir değişkeni global yapmak için kullanılır. 
 * let -> daha çok lokal değişken yapmak için kullanılır.
 * const -> read only değişkendir. 
 */

function checkScope(){
    "use strict";
   //var i = "function scope";
    if (true) {
        let i = "block scope_";
        console.log("block scope i ise: ", i);
    }
    console.log("function scope i ise: ", i);
    return i;
}

checkScope();