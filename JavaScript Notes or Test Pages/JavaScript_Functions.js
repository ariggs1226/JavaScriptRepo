    //A [function] is essentially a body of code that can be run by other, external code (or
//internal in the case of recursion). It is a sequence of statements that can potentially 
//have values passed into it for its use and can optionally return a value. In JavaScript,
//functions are first-class objects, because they can have properties and methods just like
//any other object. What distinguishes them from other objects is that functions can be 
//called. In brief, they are [Function] objects.


    //To declare a function, you must use the following syntax:
//          function functionName([param1[, param2[, ... paramN]]]) {
//              ~ function body ~
//          }

    //In the above code, [functionName] is where you declare the name of the function. 
//[param1[, param2[, ... paramN]]] is a common syntax for defining parameters to a 
//function. When you declare a function you won't include the brackets [], they exist to 
//indicate that parameters are optional, and you can have any number of them*. When you are
//looking at documentation online you will see this same syntax used in many places, so keep
//it in mind.

    //A function can have up to 255 parameters although it's probably best to keep the 
//number of input parameters as small as you can.

    //For example you can define a function called [showError] to alert an error.
//          function showError() {
//              ~ do something to show an error ~
//          }

    //or with a parameter:
//          function showErrorMsg(msg) {
//              ~ do something to show the error message passed in ~
//          }


    //Defining a function does not execute it. Defining the function simply names the 
//function and specifies what to do when the function is called. Calling the function 
//actually performs the specified actions with the indicated parameters.

    //For example, to call the [showError] and [showErrorMsg] functions defined above you 
//would call them by the following:
//          showError();
//          showErrorMsg('Something went wrong');


    //Returning Values:
    //JavaScript Functions can optionally return a value to be used elsewhere in your code.
//          function square(x) {
//              return x * x;
//          }

    //In this function, we take in [x] as an argument, and return the value of [x * x]. Now
//when we call the function [square] we can expect it to return a value based on the input 
//we pass in.
//          let threeSquared = square(3); ~ threeSquared will now be equal to 9 ~