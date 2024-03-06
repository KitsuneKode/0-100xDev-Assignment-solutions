/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result;
  constructor(){
   this.result = 0;
  //  console.log(this.result);
  }

   add(a) {
    this.result +=a;
  }

  subtract(a){
    this.result -=a;
  }

  multiply(a){
    this.result *=a;  
  }
  
  divide(a){
    
    /*
    try{
      this.result /=a;  
    }
    catch (e)                                       //using try catch block
    {
      console.error(e.message);
    }
    */   


    if(a === 0)
    {
      throw new ZeroDivisionError("the divisor can't be 0");
    }
    else{                                                   //throw block->user defined exceptions
      this.result /=a;
    }
  }

  getResult(){
    return this.result;
  }
  
  clear(){
    this.result = 0;
  }

  calculate(expression){        //expression is in string
    // 1. check for if the expression contains any non numerical characters 
    // and any other other character other than +, -, /, *, (), {}, []       // check regularExp.js for reference
    // 2. parse the  expression to remove the white spaces
    // 3. use eval to find the result but coerc the expression to string primitive before passing it to eval
    // 4. set the value to result 

    const checkdExpression = /[^0-9+*\/(){}\[\]\s.-]/.test(expression);    //1
    if (checkdExpression)
    {
       throw new InputError("The input string has non-numerical input or invalid operators");
    }
    else{

      const cleanedExpression = expression.replace(/\s+/g, ' ').trim();   //2        //for better readability=> replacr(" ").trim() is used
      const afterEvaluation = eval(String(cleanedExpression));

      if(isFinite(afterEvaluation)){
        this.result = afterEvaluation;
      }
      else{
      throw new ZeroDivisionError("the divisor can't be 0");
      }


    }

  }

}



// calc = new Calculator();
// calc.add(10);
// // calc.divide(0);
// calc.clear();
//                                                                self trials after lots of weird errrors in the test cases
//                                                                ps: not yet used to js
// calc.calculate("3*2+10/0");      
// console.log(calc.getResult())      

module.exports = Calculator;
