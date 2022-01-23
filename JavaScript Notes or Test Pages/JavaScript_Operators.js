    //JavaScript operators are used to assign values, compare values, perform arithmetic 
//operations, and more. Many you may know already like addition [+], subtraction [-], 
//multiplication [*], and division [/].


    //A JavaScript expression contains both operators and operands. It can be considered any
//valid unit of code that resolves to a value.
//      *Operand - What operators are applied to. For instance in the expression [8 * 3] 
//      there are two operands. The left operand is the [8] and the right operand is the [3]. 
//      Operands can also be referred to as [arguements].
//      *Operator - The verb of the expression that denotes what we're doing to the operands.
//      JavaScript has the following types of operators:
//          *Assignment operators
//          *Comparison operators
//          *Arithmetic operators
//          *Bitwise operators
//          *Logical operators
//          *String operators
//          *Conditional (or ternary) operators
//          *Comma operator
//          *Unary operator
//          *Relational operators
//      *Unary expression - requires a single operand, either before or after the operator:
//          [operator operand]:    
//              ++x;
//          [operand operator]:
//              x++;
//      *Binary expression - requires two operands: 
//          [operand1 operator operand2]:
//              3 + 4;
//              6 * y;
//      *Ternary expression - Only JavaScript operator that creates a ternary expression is 
//      the conditional operator with the syntax: [condition ? val1 : val2]. If [condition]
//      is true, the operator has the value of [val1], otherwise it has the value of [val2].
//          (age >= 21) ? 'alcoholic' : 'non-alcoholic';


    //An assignment operator assigns a value to its left operand based on the value of its 
//right operand. The simple assignment operator is [=].
//          x = y;
//There are also compound assignment operators like the following examples:
//          x += y;
//          x -= y;
//Which essentially translate to
//          x = x + y;
//          x = x - y;

    //Destructuring:
    //For complex assignments you can use destructuring to extract data from arrays or 
//objects using a syntax that mirrors the construction of array or object literals.
//          let foo = ['one', 'two', 'three'];
//
//          ~ Without destructuring ~
//          let one = foo[0];
//          let two = foo[1];
//          let three = foo[2];
//
//          let [one, two, three] = foo;


    //A comparison operator compares its operands and returns a logical value 
//([true] or [false]) based on whether the comparison is true.
//      Name        Operator    Description                     True Statements
//
//1     Equal         ==        Returns [true] if the             4 == '4'
//                              operands are equal.
//                    
//2    Not Equal      !=        Returns [true] if the             4 != '3'
//                              operands are not equal
//                     
//3   Strict Equal    ===       Returns [true] if the             let x = 4;
//                              operands are equal of the         x === 4;
//                              same type
//                      
//4   Strict Not      !==       Returns [true] if the             3 !== '3'
//      Equal                   operands are of the same 
//                              type but not equal, or are
//                              a different type.
//                         
//5   Greater Than    >         Returns [true] if the left        14 > 2
//                              operand is greater than the
//                              right operand.
//                     
//6   Greater Than    >=        Returns [true] if the left        14 >= '14'
//      or Equal                operand is greater than or
//                              equal to the right operand.
//                     
//7   Less Than       <         Returns [true] if the left        2 < 14
//                              operand is less than the 
//                              right operand.
//                     
//8   Less Than or    <=        Returns [true] if the left        14 <= '14'
//      Equal                   operand is less than or 
//                              equal to the right operand.


    //An arithmatic operator takes numerical values (either literals or variables) as their
//operands and returns a single numerical value.
//      Name        Operator    Description                     True Statements
//
//1   Remainder         %       Binary operator that returns    [10 % 3] returns 1
//                              the integer remainder of 
//                              dividing the two operands.
//                      
//2   Increment         ++      Unary operator that adds one    If [y] is 4, [++y] sets [y]
//                              to its operand and returns      to 5 and returns 5, whereas
//                              the pre or post value           [y++] returns 4 and then 
//                              depending on the operator       sets [y] to 5.
//                              placement.
//
//3   Decrement         --      Unary operator that subtracts   If [y] is 4, [--y] sets [y]
//                              one from its operand and        to 3 and returns 3, whereas
//                              returns the pre or post value   [y--] returns 4 and then 
//                              depending on the operator       sets [y] to 3.
//                              placement.
//
//4   Unary             -       Unary operator that returns     If [y] is 4, [-y] returns -4
//    Negation                  negation of its operation.
//
//5   Unary             +       Unary operator that attempts    [+'4'] returns 4, [+true]
//    Plus                      to convert the operand to a     returns 1, [+-4] returns -4
//                              number if it is not already.


    //Bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather 
//than as decimal, hexadecimal, or octal numbers. For example, the decimal 9 has a binary 
//representaion of 1001. Bitwise operators perform their operations on such binary 
//representations, but they return standard JavaScript numerical values.
//      Name        Operator    Description                     True Statements
//
//1  Bitwise AND        &       Binary operators that returns   [10 & 3] returns 2
//                              a one in each bit position for
//                              which the corresponding bits 
//                              of both operands are zeros.
//
//2  Bitwise OR         |       Binary operator that returns a  [10 | 3] returns 11
//                              zero in each bit position for
//                              which the corresponding bits 
//                              are the same and a one in each
//                              bit position for which the 
//                              corresponding bits are different
//
//3  Bitwise XOR        ^       Binary operator that returns a  [10 ^ 3] returns 9
//                              zero in each bit position for 
//                              which the corresponding bits
//                              are the same and a one in each
//                              bit position for which the 
//                              corresponding bits are different.
//
//4  Bitwise NOT        ~       Unary operator that inverts     [~10] returns -11
//                              the bits of its operand.
//
//5  Left Shift         <<      Binary operator that shifts     [10 << 3] returns 80
//                              the left operand in binary 
//                              representation the right 
//                              operand bits to the left,
//                              shifting in zeros from the 
//                              right.
//
//6     Sign-           >>      Binary operator that shifts     [10 >> 3] returns 1
//   propagating                the left operand in binary 
//   Right Shift                representation the right 
//                              operand bits to the right,
//                              discarding bits shifted off.
//
//7  Zero-fill          >>>     Binary operator that shifts     [10 >>> 3] returns 1
//   Right Shift                the left operand in binary 
//                              representaion the right 
//                              operand bits to the right, 
//                              discarding bits shifted off,
//                              and shifting in zeros from
//                              the left.


    //Logical operators are typically used with Boolean (logical) values; when they are, 
//they return a Boolean value. However, the && and || operators actually return the value
//of one of the specified operands, so if these operators are used with non-Boolean values,
//they may return a non-Boolean value.
//      Name        Operator    Description                     True Statements
//
//1   Logical           &&      Binary operator that returns    [true && false] 
//      AND                     the left operand if it can be   returns [false]
//                              converted to false; otherwise,
//                              returns the right operand. 
//                              Thus, when used with Boolean 
//                              values, returns true if both
//                              operands are true; otherwise,
//                              returns false.
//
//2   Logical           ||      Binary operator that returns    [true || false]
//      OR                      the left operand if it can be   returns [true]
//                              converted to true; otherwise, 
//                              returns the right operand. 
//                              Thus, when used with Boolean
//                              values, returns true if either
//                              operand is true; if both are 
//                              false, returns false.
//
//3   Logical           !       Unary operator that returns     [!true] returns
//      NOT                     false if it's a single          [false], [!0]
//                              operand that can be converted   returns [true]
//                              to true; otherwise, returns 
//                              true.


    //The [+] operator (along with the [+=] compound operator) can also be used as a 
//concatenanation operator when dealing with strings.
//          console.log('alpha' + 'bet'); ~ Logs the string 'alphabet' to the console ~


    //[delete]:
    //The delete operator deletes an object, an object's property, or an element at a 
//specified index in an array
//          delete objectName;
//          delete objectName.property;
//          delete objectName[index];

    //[typeof]:
    //The typeof operator returns a string indicating the type of the unevaluated operand
//with the syntax [typeof operand]. [operand] is the string, variable, keyword, or object
//for which the type is to be returned.
//          let shape = 'round';
//          let size = 1;
//          let foo = ['Apple', 'Mango', 'Orange'];
//
//          typeof shape;   ~ returns "string" ~
//          typeof size;    ~ returns "number" ~
//          typeof foo;     ~ returns "object" ~

    //[void]:
    //The void operator specifies an expression to be evaulated without returning a value
//with the syntax [void expression]. [expression] is a JavaScript expression to evaluate.
//          <a href="javascript:void(0)">Click here to do nothing</a>


    //[in]:
    //The in operator returns [true] if the specified property is in the specified object.
//          let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
//          3 in trees;             ~ returns true ~
//          6 in trees;             ~ returns false ~
//          'length' in trees;      ~ returns true (length is an Array property)
//
//          'PI' in Math;           ~ returns true
//
//          let mycar = { make: 'Honda', model: 'Accord', year: 1998 };
//          'make' in mycar;        ~ returns true ~

    //[instanceof]:
    //The instanceof operator returns true if the specified object is of the specified
//object type.
//          let theDay = new Date(2018, 1, 1);
//
//          theDay instanceof Date; ~ returns true ~


    //The precedence of operators determines the order they are applied when evaluating an
//expression. You can override operator precedence by using parentheses. The following 
//table describes the precedence of operators, from highest to lowest:
//      Operator Type               Operators
//
//      member                      . []
//      call/create instance        () new
//      neagation/increment         ! ~ + - ++ -- typeof void delete
//      multiply/divide             * / %
//      addition/subtraction        + -
//      bitwise shift               << >> >>>
//      relational                  < <= > >= in instanceof
//      equality                    == != === !==
//      bitwise-and                 &
//      bitwise-or                  |
//      logical-and                 &&
//      logical-or                  ||
//      conditional                 ?:
//      assignment                  = += -= *= /= %= <<= >>= >>>= &= ^=    =
//      comma                       ,