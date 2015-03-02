var number_array=['',''];
var entry_array=[];
var number_index=0;
var operator='';
var error='';
var result=null;
var valid_operators=['+','-','/','*'];

function add_number(digit){
    document.querySelector('#input').value+=digit; 
    number_array[number_index]+=digit;
}

function add_operator(input_operator){
    if(result != null){
        document.querySelector('#input').value='';
    }

    if(result != null){   // if result is all ready being used
        number_array[0] = result;     
        result=null;               // you don't need the result anymore
        number_array[1]='';        // set numarray 1 to an empty array so the it can add a fresh new input
    } 


    document.querySelector('#input').value+= input_operator;
    operator= input_operator;
    number_index = 1;
}

function process_equation(){
    var num_index = 0;       // new variable that makes count the index
    for(var i = 0; i < entry_array.length; i++){   // goes thru entry array
        if(!isNaN(parseFloat(entry_array[i]))){    // if its a number inside the for loop
            number_array[num_index]=entry_array[i]; // the var numberarray[0] === equals whatever entry_array[i] is
             
            if(num_index ==1 && operator!=null){   // if we have a first number ex. num_index[0] and for this current number we have a  num_index[1] && if we have used the operator before. MEANING WE HAVE A OPERATOR  // You now would then have enough information to call the calculator function
                calculator();                        // calling calculate and because you have num_index[0] and a num[1] plus an operator
                num_index=0;                        // num index will equal zero so you can start this with the next set of code
            }
        }       // if it gets to the else if then it is not a number.// check to see if its a operator
        else if(valid_operators.indexOf(entry_array[i])!==-1){  //Makes sure if its an operator
            if(num_index==0 && result !=null){ // if index == 0 where did we get the result from
                number_array[0]=result; //number array 0 would hold the value of result
                result=null;
            }
            operator=entry_array[i];
            num_index++;

        }
        else{
            alert("something went really wrong");
        }
    }
}




//Now we got the first array and the second array

function calculator(){

    switch(operator){
    case '+':
         result = add_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));             
        break;
    case '-':
         result = subtract_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));       
        break;
    case '*':
        result = multiply_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));        
        break;
    case '/':
         result = divide_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));        
        break;
}
operator = null;
number_array = ["", ""]
document.querySelector('#result').value=result;
}





//              FUNCTIONS                               //

function add_numbers(num1, num2){

 return(num1+num2);
}


function subtract_numbers(num1, num2){

  return(num1-num2);
}

function multiply_numbers(num1, num2){

  return num1*num2;
}


function divide_numbers(num1, num2){
    if(num2 > 0){
        return num1/num2;
    } else {
        return "You can not divide by zero";

    }
}



function reset_calculator(){
    document.querySelector('#input').value='';  // makes the input value to none 
    document.querySelector('#result').value='';
    number_array =["",""];        // Resets everything for next Calculation
    number_index = 0;
    result=null
}





