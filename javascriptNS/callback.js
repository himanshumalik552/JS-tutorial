//Callback function

function half(sum) {
    console.log(Math.floor(sum/2));
}
function mul2(sum) {
    console.log(sum*2);
}

function operation(num1,num2,operate) {
    var sum = num1 + num2;
    operate(sum)
}
operation(14, 5, half);
operation(23, 3, mul2);

//closer

function outer() {
    var name = "malik";
    function inner() {
        console.log(name);
    }
    return inner;
}
var fun = outer()
fun()
 
// Recursion

function add(number)
{
    if (number <= 0) {
        return 0;
    }
    else {
        return number + add(number-1)
    }
}
 var adds =  add(5)
console.log(adds);