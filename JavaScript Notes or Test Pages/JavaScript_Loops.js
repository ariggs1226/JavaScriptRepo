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
//          let i = 0;
//          let total = 10;
//
//          while (i , total) {
//              ~ execute code "total" times ~
//              ++i;
//          }


    //A [do...while] loop is similar to a [while] loop in that it executes a block of code
//while a specified condition is [true]; however, it swaps the order of evaulation and runs
//the code first and checks the condition after. It uses the following syntax:
//          do {
//              ~ execute this code ~
//          } while (condition);

    //An example of a [do...while] loop can be seen below:
//          let i = 0;
//          let amount = 10;
//          let sleep = '';
//
//          do {
//              sleep += 'Z';
//          } while (i++ < amount);


    //The major difference in this case between a [while] loop and a [do...while] loop is 
//that if amount had been [0] for instance, a [while] loop would have never executed and 
//[sleep] would have been an empty string ['']. However, using a [do...while] loop ensures 
//that the code will at least be executed once, and [sleep] will have the value ['Z'] even
//if amount is [0].


    //The [for..in] statement iterates a specified variable over all the enumerable 
//propeties of an object. For each distinct property, JavaScript executes the specified 
//statements. It uses the following syntax:
//          for (variable in object) {
//              ~ execute this code ~
//          }

    //An example [for...in] loop could be the following:
//          let car = {
//              make: 'Acura',
//              model: 'TL'
//          };
//
//          for (let i in car) {
//              console.log(i); ~ would print 'make' in 1st loop and 'model' in 2nd ~
//              console.log(car[i]); ~ would print 'Acura' in 1st loop and 'TL' in 2nd
//          }

    //[for...in] loops can technically be used to interate through [Arrays]; however, 
//traditional [for] loops are recommended since a [for...in] loop will iterate over 
//user-defined properties in addition to the array indexes.


    //The [for...of] statement creates a loop iterating over iterable objects (including
//[Array], [Map], [Set], [arguments] object and so on), invoking a custom iteration hook 
//with statements to be executed for the value of each distinct property. It uses the 
//following syntax:
//          for (variable of object) {
//              ~ execute this code ~
//          }

    //It's similar to the [for...in] loop, except where the [for...in] loop iterates over 
//property names, the [for...of] loop iterates over property values. The following 
//illustrates the difference between the two loops.
//          let arr = [10, 11, 12];
//
//          arr.foo = 'bar';
//
//          for (let i in arr) {
//              console.log(i); ~ logs '0', '1', '2', 'foo'
//          }
//
//          for (let i of arr) {
//              console.log(i); ~ logs 10, 11, 12
//          }


    //Use the [break] statement to terminate a loop, [switch], or in conjunction with a 
//[labeled] statement. The syntax is as follows:
//          break;
//          ~ or ~
//          break labelName; ~ if used with a labeled statement ~

    //The following is an example of using the [break] statement:
//          let names = ['Teddy', 'John', 'Mike', 'George']; 
//              ~ we can imagine this was initialized elsewhere ~
//          for (let i = 0; i < names.length; ++i) {
//              if (names[i] === 'John') {
//              console.log('We found John!'); 
//                  ~ and we DON'T want to continue searching through the array ~
//              break;
//              }
//          }


    //The [continue] statement can be used to restart a [while], [do...while], [for], 
//[labeled] statement. The syntax is as follows:
//          continue;
//          ~ or ~
//          continue labelName; ~ if used with a labeled statement ~

    //The following is an example of using the [continue] statement:
//          let names = ['Teddy', 'John', 'Mike', 'George']; 
//              ~ we can imagine this was initialized elsewhere ~
//          for (let i = 0; i < names.length; ++i) {
//              if (names[i] === 'John') {
//                  console.log('We found John!'); 
//                      ~ and we DO want to continue searching through the array ~
//                  continue;
//              }
//          }


    //A [label] provides a statement with an identifier that lets you refer to it elsewhere
//in your program. You can create a [label] with the following syntax:
//          labelName: 
//              ~ code to execute ~

    //The value of [label] may be any Javascript identifier that is not a reserved word.
    //The following is an example of labeling a [while] loop:
//          markedWhile:
//              while (someCondition === true) {
//                  ~ execute some code ~
//              }

    //It's fairly uncommon as it's not generally necessary to label blocks of code. There 
//are limited use cases where it can be useful though (especially when nesting loops in 
//other loops). For example the following is an example where it could be useful:
//          let i;
//          let j;
//
//          loop1:
//              for (i = 0; i < 3; i++) { ~The first for statement is labeled "loop1"~
//                  loop2:
//                      for (j = 0; j < 3; j++){ ~The second for statement is labeled "loop2"~
//                          if (i === 1 && j ===1) {
//                              continue loop1;
//                          }
//
//                          console.log('i = ' + i + ', j = ' + j);
//                      }
//              }
//
//              ~ Output is:
//                  "i = 0, j = 0"
//                  "i = 0, j = 1"
//                  "i = 0, j = 2"
//                  "i = 1, j = 0"
//                  "i = 2, j = 0"
//                  "i = 2, j = 1"
//                  "i = 2, j = 2"
//                Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2" ~

    //or using a [break] statement:
//          let i;
//          let j;
//
//          loop1:
//              for (i = 0; i < 3; i++) { ~ The first for statement is labeled "loop1" ~ 
//                  loop2:
//                      for (j = 0; j < 3; j++) {~The second for statement is labeled "loop2"~
//                          if (i === 1 && j === 1) {
//                              break loop1;
//                          }
//                          
//                          console.log('i = ' + i + ', j = ' + j);
//                      }
//              }
//
//              ~ Output is:
//                  "i = 0, j = 0"
//                  "i = 0, j = 1"
//                  "i = 0, j = 2"
//                  "i = 1, j = 0"
//               Notice the difference with the previous continue example ~