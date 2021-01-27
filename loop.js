var myArray = [];

var i = 0;
while(i<5){
    myArray.push(i);
    i++;
}

console.log(myArray);

//another way to make loop

var ourArray = [];

for (var i = 0; i < myArray.length; i++) {
    ourArray.push(i);
}

console.log(ourArray)

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i<arr.length; i++) {
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll( [ [1,2], [3,4], [5,6,7] ] )

console.log(product)

//another way to make loop
var do_while_array = [];
var i = 3;

do {
    do_while_array.push(i);
    i++;
} while (i < 5)

console.log(i, do_while_array);