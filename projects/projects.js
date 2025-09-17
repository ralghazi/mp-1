let one = document.getElementById("first-number");
let two = document.getElementById("second-number");
let output = document.getElementById("output");

function result(value){
    output.innerHTML = String(value);
    if(value < 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}
function Addition() {
    result(Number(one.value) + Number(two.value));
}

function Subtraction() {
    result(Number(one.value) - Number(two.value));
}

function Multiplication() {
    result(Number(one.value) * Number(two.value));
}

function Division() {
    if(Number(two.value) === 0){
        result("Err")
    } else{
        result(Number(one.value) / Number(two.value));
    }
}

function Power() {
    const a = Number(one.value);
    const b = Number(two.value);
    let res = 1;

    if(b > 0){
        for(let i = 0; i < b; i++) {
            res *= a;
        }
    } else {
        for(let i = 0; i > b; i--) {
            res *= a;
        }
        res = 1 / res;
    }
    result(res);
}

function Clear() {
    one.value= "";
    two.value= "";
    output.innerHTML= "";
    output.style.color = "black";
}