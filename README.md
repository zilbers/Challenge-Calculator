# Challenge-Calculator

Welcome!
looks like our calculter broke down, please help us fix it!

how to start?
1.clone the repo to your computer 2. run <code> npm i </code> on your terminal
3.start coding!

# Requirements:

1. Calculator must have 20 buttons.
2. Should contain all numbers between 0-9 and a dot (.)
3. AC button that clears the result screen
4. Working parentheses [( )]
5. Equal button (=)
6. The calculator should return an error when the user tries to divide by zero.
7. The calculator should consider order of operations: </br>
   Good way 👍🏿: </br>
   2 + 3 _ 4 = 14 </br>
   Bad way 👎🏿: </br>
   2 + 3 _ 4 = 20 </br>
8. The calculator should have the following functions: </br>

- divide / (9/2 = 4.5)
- sum + (9+2 = 11)
- minus - (9-2 = 7)
- multiply * (9*2 = 18)
- modulo % (9%2 = 1)

# important!

In order to make the tests run properly, you need to name your buttons according to the following requirements:

Button Classnames Id

0-9 "button number" "digit\_{the number}" for Exmp: "digit_1".
dot(.) "button number" //change here
/ "button" "op_divide"

"-" "button" "op_plus"

"\*" "button" "op_minus"

"-" "button" "op_multi"
"%" "button" "op_mudulo"
"AC" "button AC" "op_AC"
"=" "button number" "equal"

Result should look something like this:

//img here
