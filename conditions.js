//condition ? statement-if-true : statement-if-false;

function ternaryCondition(a,b) {
    return a===b ? true : false;
}

console.log("ternary result -> " + ternaryCondition(2,2));

//multiple ternary operation 
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}

console.log("second ternary condition : " + checkSign(-10));


function ourTrueOrFalse(isItTrue){
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

console.log(ourTrueOrFalse(true));

// == -> sayı ve string arasında eşitlik varsa true
// === -> sayı ve string değişkenlerin içerisinde aynı 
// değerler olsa bile eşitlik yoktur. 

// != türüve !== 
function testEqual(val){
    if (val == '8' && val > 3){
        return "Equal to 8";
    }
    else if (val !== 18 || val < 33){
        return "not Equal to 18";
    }
    else{
        return "Equal to nothing";
    }
}

console.log(testEqual('18'));

//Switch statement

function caseInSwitch(val) {
    var answer = "";

    switch(val) {
        case 1:
        case 2: 
        case 3:

        case 4: 
            answer = "alpha";
            break;
        case 5:
        case 6: 
        case 7:
        case 8:
            answer = "beta";
            break;
        case 9:
        case 10: 
        case 11:    
        case 12:
            answer = "gamma";
            break;
        case 13:
        case 14: 
        case 15:
        default:
            answer = "nothing";
            break;
    }
    return answer;
}

console.log(caseInSwitch(5));

