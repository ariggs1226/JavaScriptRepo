    //Loops offer a quick and easy way to do something repeatedly. There are many different 
//kinds of loops, but they all essentially do the same thing... they repeat an action some
//number of times (and it's actually possible that number could be zero). The various loop 
//mechanisms offer different ways to determine the start and end points of the loop. There 
//are various situations that are more easily served by one type of loop over the others.


    //A [while] loop executes its block of code as long as a specified condition evaluates 
//to [true].
//          while (condition) {
//              ~ execute this code ~
//          }

    //If the condition becomes false at any time, the code within the loop stops executing
//and control passes to the statement following the loop. The test of the condition occurs
//before the code is executed, so if the initial condition is [false], the code inside 
//never executes.
//          let n = 0;
//          let x = 0;
//
//          while (n < 3) {
//              n++;
//              x += n;
//          }

    //*It's important to note that [while] loops can potentially become infinite if your 
//does not allow for the loop to ever end.
//          let n = 0;
//          let x = 0;
//
//          while (n < x + 1) {
//              n++;
//              x += n;
//          }

    //The flaw in the logic makes it so that [n] will never become greater than or equal to
//[x].



    //A [for] loop can be thought of as a combination of a [while] loop with an 
//initialization expression (that runs once prior to the loop condition ever being 
//evaluated) as well as an increment expression (that runs every time after the loop body
//runs). The loop uses the following syntax:
//          for ([initializationExpression]; [condition]; [incrementExpression]) {
//              ~ execute this code ~
//          }

    //An example for loop can be found below:
//          let total = 10;
//
//          for (let i = 0; i < total; ++i) {
//              ~execute code "total" times
//          }

    //You can think of the statement as the following. We initialize [i] as 0 once. Then 
//while [i] is less than [total] we want to execute the code in braces. After the code 
//executes, we want to run the increment expression and increment [i] by 1. Essentially, 
//[for] loops are a simpler syntax for writing while loops. For instance, you could rewrite
//the above loop with a [while] loop and achieve the exact same thing, there would just be 
//slightly more code involved.