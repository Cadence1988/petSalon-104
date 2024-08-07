let globalVariable = "I am a global variable";

function myFunction(){
    console.log(globalVariablelobalVariable)

    let localVariable = 'i am a localvariable';
}

function myOtherfunction(){
    console.log(globalVariable);

    //console.log(localVariable);
}

//myFunction();
//myOtherfunction()


function greet(name){
    console.log('Hello,' + name);
}

greet('ryan');


/*double number*/ 

/*function dubNum(){
    let num1 = prompt('Pick a number for me to double');
    let result = num1 * 2;
    return result;
}
let result = dubNum();
console.log(result)*/

// getting value from the prompt

//let num = parseInt(prompt())


function findArea(length, width){
     
    let area = length * width;
    return area;
}
let lenghtprompt = parseInt(prompt('Enter length: '));
let widthprompt = parseInt(prompt('Now enter width: '));

console.log('area of rectangle=' + findArea(lenghtprompt, widthprompt));
