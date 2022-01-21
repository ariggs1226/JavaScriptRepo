    // Brackets [] are representing the reference doc on covalence using a bold and 
// background on certain things that they use as the commands for the programming such as
// the values in the list a few paragraphs below in JavaScript.

    //A variable is a value that can change based on a conditon or information passed to a 
//program. You can think of a program as set of instruction that tell a computer what to do.
//In almost every program, data is used while the program is running. Data can be constants
//(fixed values that do not change) or variable (changable) values.


    //In programming there is a concept of a data type. A data type defines the values that
//a variable can hold, and the operations that can be performed on it. JavaScript is very 
//flexible in terms of data types, people call it a "weakly" or "loosely" typed language. 
//What this means is that even though a variable may start as one type, it can be changed to
//another type at a later time. In "strongly" typed language once a variable is set to a 
//specific type it cannot be changed. "Strongly" typed languages provide more safety, 
//meaning you can assume that a variable will always be a certain type in a "strongly" typed
//language. However, "weakly" typed languages allow for a lot of flexibility.

    //Even in "weakly" typed languages, there are some common data types. Below are a few 
//data types that exist in most languages:
//      *[null] -                     A defined non-value.
//      *[integer] -                  A number.
//      *[boolean] -                  A true or false value.
//      *[character] -                A single character.
//      *[floating-point number] -    A number with a decimal point.
//      *[string] -                   A group of characters(ex: a word or multiple words)

    //JavaScript has another type called [undefined] which indictates that a variable is not
//defined. This is different from [null] in that [null] means that a variable is defined and
//is set to the value [null], whereas [undefined] means that a variable is not defined. The
//above types are collectively known as "primitive" data types in JavaScript. Below are a 
//"complex" data types you will find in JavaScript:
//      *[Array]-      A high level, list-like object that contains values and a [length]:
//                          *let myArr = [1,2,3];
//      *[Object]-     The root level of any variable in JavaScript, defines a value that
//                  can have properties:
//                          *let myObj = {foo: 1, bar: 2 }
//      *[Function]-   Objects that can be invoked and perform some computation. Often they
//                  have what's known as arguments passed in, and they can even [return] 
//                  values":
//                          *  Function declaration:
//                          function multiply(arg1, arg2) {
//                              return arg1 * arg2;
//                          }
//                          
//                          *  Function usage:
//                          let result = multiply(2, 4);

    //In almost every program you will want to define variables. In JavaScript as well as 
//other languages variables must be defined before they are used. The normal flow of a file
//in a program is top to bottom, so normally defined before use means that the variable 
//definition appears above the variable usage. Consider the following code:
//          *  Variable definition:
//          var num = 2;
//
//          *  Variable usage:
//          console.log(num);

    //In the code above the variable [num] is defined, and it is assigned a value of 2
//(an integer). It is then passed into a "function" called [console.log] as an [argument].
//Since JavaScript is a weakly typed language, you do not need to explicity declare [num] 
//as an integer. In other strongly typed languages you may see [num] explility defined as a
//type, for example in C# (another common language) you might see the following:
//          *  Variable definition:
//          int num = 2;
//
//          *  Variable usage:
//          Console.Write(num);

    //The code above would accomplish the same thing as the JavaScript code, but in C#. In 
//the JavaScript code above, the [var] keyword is used to define the variable [num]. This is
//an older keyword that people don't normally use in modern JavaScript programs. There are
//three different keywords you can use:
//      *[var] -        Declares a variable, optionally initializing it to a value:
//                  var x = 1;
//
//                  if (x === 1) {
//                  var x = 2;
//
//                      ~expected output: 2~
//                      console.log(x);
//                  }
//
//                  ~expected output: 2~
//                  console.log(x);

//      *[let] -        Declares a block-scoped local variable, optionally initializing 
//            it to a value:
//                  let x =1;
//              
//                   if (x === 1) {
//                  let x = 2;
//
//                       ~expected output: 2~
//                        console.log(x);
//}
//
//                   ~expected output: 1~
//                   console.log(x);

//      *[const] -      Declares a block-scoped local variable. The value is constant and 
//              cannot be reassigned or redeclared:
//                  const number = 42;
//                  
//                  try {
//                      number = 99;
//                  } catch (err) {
//                      ~expected output: Typerror: invalid assignment to const 'number'~
//                      ~Note - error messages will vary depending on browser~
//                      console.log(err);
//                  }
//
//                  ~expected output: 42~
//                  console.log(number);

    //It is recommended that you use [const] and [let] rather than [var] for safety reasons.
//If you notice in the code above for [let] and [var], [let] variables are nearly identical
//to [var] variables with one additional functionality. A [let] variable exhibits what is 
//called "block-scope". You will learn more about what that means later, but notice above
//that in the [let] block [x] is re-assigned to 2 inside an "if-block", but as 1 outside 
//the block.

    //JavaScript has naming conventions for variables, which loosely define what you should
//name variables. In general, you want to be descriptive about what your variable represent.
//For example:
//        ~bad~
//       let str = 2;
// 
//        ~good~
//       let num = 2;

    //In addition to naming variables descriptively, you use lowercase and uppercase letters
//for different types of variables. In general JavaScript uses what's called "camelCase" for
//most variables. In "camelCase" the first letter of the variable name is lowercase, and 
//then all subsequet words in the variable start with an uppercase letter. There are some 
//data types in JavaScript that should be "CapitalCase", which you will learn about later.
//Often times when people are using constants they use "UPPER_SNAKE_CASE".

