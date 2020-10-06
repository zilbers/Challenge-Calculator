# Challenge-Calculator

Welcome!
looks like our calculter broke down, please help us fix it!

how to start?

1. clone the repo to your computer
2. run <b> npm i </b> on your terminal
3. start coding!
4. at the end it should look like this:
![operation](./readme-files/operations.gif?raw=true "operation")

# Template instructions
In the template file you will get 2 components. </br>
MathOperation - should get {type , onClick(function)} as props. </br>
DigitButton - should get {value(0-9) , onClick(function)} as props. </br>
* You can use operationTypes array to check what values are expected as props for MathOperation component.

# Requirements:

1. Calculator must have 20 buttons
2. Should contain all numbers between 0-9 and a dot (.)
3. AC button that clears the result screen
4. Equal button (=), after pressing equal you should make sure you can use the result in the next calculation.
5. It should also have a sqrt (√) and power (x²) buttons
6. The calculator should return "Error" when the user tries to divide by zero
7. The calculator should have the following functions: </br>
- divide / (9/2 = 4.5)
- sum + (9+2 = 11)
- minus - (9-2 = 7)
- multiply * (9*2 = 18)
- modulo % (9%2 = 1)
- power x² (3² = 9)
- sqrt √x (√16 = 4)
8. You should be able to do complicated operations (9*2 = 18 => 18 + 3 = 21 => 21 * 2 = 42)
![complicated-operations](./readme-files/complicated-operations.gif?raw=true "complicated-operations")



# important!

In order to make the tests run properly, do not change the id's of the components, and make sure to use the right types and values!

* Its recommended to open windows calculator and check its behaviour, they should act the same.

# final result

your result should look something like this </br>
![calculator](./readme-files/calc-img.png?raw=true "calculator")

# How to submit?

Just upload the link to your repoistory to our website, and we will check if your code has fixed our calculator!

# Review

Please review our challenge so we could improve it!
https://forms.gle/kruou5hvSL6DFQma9
