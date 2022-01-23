    //Very often when we write code, we want to perform different actions for different 
//decisions. We can use conditional statements to accomplish this.


    //[if... else] statements are the most common type of conditional statement. They're 
//seen in many different coding languages, and follow the following syntax.
//          if (condition) {
//              ~ code to run if condition is true ~
//          } else {
//              ~ code to run if condition is not true ~
//          }

    //It can help to think about a statement as the following pseudo-code: ["if the 
//condition returns true, run code A, else run code B"]. It's important to note that the 
//[else] statement is optional like in the following statement:
//          if (condition) {
//              ~ code to run if condition is true ~
//          }
//          ~ run other code ~

    //However, you need to be careful here. In this case, the second block of code is not 
//involved at all with the conditional statement, so it will always run, regardless of 
//whether the condition returns [true] or [false]. This is not necessarily a bad thing, but
//it might not be what you want -- often you will want to run one block of code or the 
//other, not both.


    //[if... else] statements provide us with two potential outcomes, but what if we need 
//more? [else if] allows us to have any many potential outcomes as we may need. Consider 
//the following example:
//          if (userChoice === 'pizza') {
//              console.log('$1.50');
//          } else if (userChoice === 'hamburger') {
//              console.log('$2.50');
//          } else if (userChoice === 'taco') {
//              console.log('$2.00');
//          } else {
//              console.log('Please select an option');
//          }

    //It's important to remember that any value that is not [false], [undefined], [null],
//[0], [NaN], or an empty string (['']) actually returns [true] when tested as a conditional
//statement, therefore you can simply use a variable name on its own to test whether it is
//[true], or even that if exists, or not [undefined].


    //It's perfectly ok, and fairly common, to nest [if... else] statements inside one
//another.
//          if (userChoice === 'pizza') {
//              if (userWallet >= 150) {
//                  console.log('Success!');
//              } else {
//                  console.log('Doh!');
//              }
//          }


    //Logical operators can be used to test multiple conditions for [if... else] statements
//and potentially eliminate the need for nesting in some cases.
//          if (userChoice === 'pizza' && userWallet >= 150) {
//              if (userWallet >= 150) {
//                  console.log('Success!');
//              } else {
//                  console.log('Doh!');
//              }
//          }


    //Logical operators can be used to test multiple conditions for [if... else] statements
//and potentially eliminate the need for nesting in some cases.
//          if (userChoice === 'pizza' && userWallet >= 150) {
//              console.log('Successfully ordered pizza!');
//          } else if (userChoice === 'hamburger' && userWallet >= 250) {
//              console.log('Successfully ordered a hamburger!');
//          } else if (userChoice === 'taco' && userWallet >= 200) {
//              console.log('Successfully ordered a taco!');
//          } else {
//              console.log('Please select an option you can afford');
//          }


    //A common mistake when using logical operators is to forgot to restate the variable for
//the binary expression. The following shows the right way and the wrong way to compare 
//[userWallet] to several values.
//          if (userWallet === 150 || 200 || 250) { ~ WRONG! ~
//              ~ run my code ~
//          }
//
//          if (userWallet === 150 || userWallet === 200 || userWallet === 250) { ~ RIGHT! ~
//              ~ run my code ~
//          }

    //The first way is a valid cconditional statement, but will likely produce undesired 
//results. It will always run the code because both [200] and [250] will be evaluated as
//[true] making the statement execute.


    //[if...else] statements are mainly good for cases where you've got a couple of choices,
//and each one requires a reasonable amount of code to be run, and/or the conditions are 
//complex (e.g. multiple logical operators). [switch] statements, on the other hand, are 
//ideal for when you have a large number of choices. They take a single expression/value as
//an value, executing the corresponding code that goes along with it. The syntax is as 
//follows:
//          switch (expression) {
//              case choice1:
//                  ~ run this code ~
//                  break;
//
//              case choice2:
//                  ~ run this code instead ~
//                  break;
//
//              ~ include as many cases as you like ~
//
//              default:
//                  ~ actually, just run this code since none of my choices matched expression
//          }

    //It's important to note that the [default] choice is optional and you can safely omit 
//it if there is no chance that the expression could end up equaling an unknown value or if
//you don't want to run any code in the [default] case.
//          switch (userChoice) {
//              case 'pizza':
//                  console.log('$1.50')
//                  break;
//              case 'spaghetti':
//                  console.log('$8.50')
//                  break;
//              case 'lasagna':
//                  console.log('$8.50');
//                  break;
//              case 'hamburger':
//                  console.log('$2.50')
//                  break;
//              case 'cheeseburger':
//                  console.log('$3.00')
//                  break;
//              case 'chicken tenders':
//                  console.log('$3.50')
//                  break;
//              case 'taco':
//                  console.log('$2.00")
//                  break;
//              case 'burrito':
//                  console.log('$4.00")
//                  break;
//              default:
//                  console.log('Please select an option');
//
//          }

    //The [break] keyword tells the code to break out of the [switch] statement. If the 
//break if left out, the code that follows will continue to execute (e.g. - if [userChoice]
//is equal to ['pizza'] but the [break] is omitted, both ['$1.50'] and ['$5.50'] will be 
//logged to the console).


    //For very simple cases, a ternary operator can be used for conditional cases. It uses
//the following syntax:
//          ( condition ) ? 'run this code' : 'run this code instead'

    //Where if [condition] is [true] it will ['run this code'], otherwise it will ['run 
//this code instead']. An example can be seen below:
//          let greeting = ( isBirthday ) ? 'Happy birthday ' + userName : 'Good morning '
//              + userName;

    //It's important to note that ternary expression is completely optional. An [if...else]
//statement can always be used instead and in a lot of times can be far less confusing.