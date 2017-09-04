# Calculator App

## This is a web application that performs arithmetic calculations and can be used to displays a list of numbers from number 1 to the number the user inputs with exception for number 3, 5 and their multiples. It is written to practice how to use npm and gulp in project development, 4/09/2017

## By **[Peter Maina](https://github.com/petersoleeh) and [Carol Wanjohi](https://carolwanjohi.github.io/)**

## Description
This is a web application that performs 2 tasks. <br/>
The first task is to perform arithmetic calculations on a user's input. The user is required to input 2 numbers in 2 form input fields and select one arithmetic operation. This is done by clicking on the **Add**, **Subtract**, **Multiply**  or **Divide** button. <br/>
The second task is to ask the user to input a number into an input field and submit it by clicking on the **PingPong** button. Afterwards an output is displayed to the user. The output consists of number 1 upto the user input number with the exception of number 3, 5 and their multiples.
- For numbers divisible by 3 the output is **ping**
- For numbers divisible by 5 the output is **pong**
- For numbers divisible by 3 and 5 the output is **pingpong** 

## How Ping Pong Works

| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Add 2 numbers | Input 1: 3 Input: 4 | 7 |
| Subtract 2 numbers | Input 1: 4 Input 2: 1 | 3 |
| Multiply 2 numbers | Input 1: 2 Input 2: 2 | 4 |
| Divide 2 numbers | Input 1: 6 Input 2: 3 | 2 |
| The program should count to the number provided by the user | 2 | 1, 2 |
| The program should replace 3 and its multiples with ping | 11 | 1, 2, ping, 4, 5, ping, 7, 8, ping, 10, 11 |
| The program should replace 5 and its multiples with pong | 13 | 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13 |
| The program should replace multiples of both 3 and 5 or 15 and its multiples with pingpong | 17 | 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong, 16, 17 |

## Known Bugs

No known bugs

## Technologies Used

- HTML
- CSS
- JAVASCRIPT
- JQUERY
- npm pakages

### License

MIT (c) 2017 **[Peter Maina](https://github.com/petersoleeh) and [Carol Wanjohi](https://carolwanjohi.github.io/)**
