/*
Title:
  Calculating with Functions

Description:

  This time we want to write calculations using functions and get the results. Let's have a look at some examples:

      seven(times(five())); // must return 35
      four(plus(nine())); // must return 13
      eight(minus(three())); // must return 5
      six(dividedBy(two())); // must return 3

Requirements:

  - There must be a function for each number from 0 ("zero") to 9 ("nine")
  
  - There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  
  - Each calculation consist of exactly one operation and two numbers
  
  - The most outer function represents the left operand, the most inner function represents the right operand
  
  - Division should be integer division. For example, this should return 2, not 2.666666...:
  eight(dividedBy(three()));

Kata Link:
  https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
*/

function zero(fun) {return fun ? fun(0) : 0}
function one(fun) {return fun ? fun(1) : 1}
function two(fun) {return fun ? fun(2) : 2}
function three(fun) {return fun ? fun(3) : 3}
function four(fun) {return fun ? fun(4) : 4}
function five(fun) {return fun ? fun(5) : 5}
function six(fun) {return fun ? fun(6) : 6}
function seven(fun) {return fun ? fun(7) : 7}
function eight(fun) {return fun ? fun(8) : 8}
function nine(fun) {return fun ? fun(9) : 9}

function plus(y) {return function(x) {return x + y}}
function minus(y) {return function(x) {return x - y}}
function times(y) {return function(x) {return x * y}}
function dividedBy(y) {return function(x) {return Math.floor(x / y)}}


/*
>> Functions call sequence:

seven(times(five()))
  |
  +-- seven
  |     |
  |     +-- times(five())
  |           |
  |           +-- times
  |           |    |
  |           |    +-- five()
  |           |          |
  |           |          +-- five
  |           |
  |           +-- (function(y) {return function(x) {return x * y}})
  |
  +-- (function(fun) {return fun ? fun(7) : 7})
  
*/