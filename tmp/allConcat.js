var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function () {
    $('#addButton').click(function (event) {
        event.preventDefault();
        // Save first input value
        var inputNumber1 = parseInt($('#firstInput').val());
        // Save second input value
        var inputNumber2 = parseInt($('#secondInput').val());
        // Create instance of Calculator 
        var simpleCalculator = new Calculator('hot pink');
        // Perform addition
        var additionOutput = simpleCalculator.add(inputNumber1, inputNumber2);
        // Display output in index.html
        $('#solution').append('<p> The result is ' + additionOutput + '</p>');
    });
});

var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function () {
    $('#divideButton').click(function (event) {
        event.preventDefault();
        // Save first input value
        var inputNumber1 = parseInt($('#firstInput').val());
        // Save second input value
        var inputNumber2 = parseInt($('#secondInput').val());
        // Create instance of Calculator 
        var simpleCalculator = new Calculator('hot pink');
        // Perform addition
        var divideOutput = simpleCalculator.divide(inputNumber1, inputNumber2);
        // Display output in index.html
        $('#solution').append('<p> The result is ' + divideOutput + '</p>');
    });
});
var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function () {
    $('#multiplyButton').click(function (event) {
        event.preventDefault();
        // Save first input value
        var inputNumber1 = parseInt($('#firstInput').val());
        // Save second input value
        var inputNumber2 = parseInt($('#secondInput').val());
        // Create instance of Calculator 
        var simpleCalculator = new Calculator('hot pink');
        // Perform addition
        var multiplyOutput = simpleCalculator.multiply(inputNumber1, inputNumber2);
        // Display output in index.html
        $('#solution').append('<p> The result is ' + multiplyOutput + '</p>');
    });
});
var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function () {
    $('#ping-pong-form').submit(function (event) {
        event.preventDefault();
        var goal = $('#goal').val();
        var simpleCalculator = new Calculator('hot pink');
        // Perform PingPong
        var output = simpleCalculator.pingPong(goal);
        // Display output in index.html
        output.forEach(function (element) {
            $('#solution').append("<li>" + element + "</li>");
        });
    });
});

var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function () {
    $('#subtractButton').click(function (event) {
        event.preventDefault();
        // Save first input value
        var inputNumber1 = parseInt($('#firstInput').val());
        // Save second input value
        var inputNumber2 = parseInt($('#secondInput').val());
        // Create instance of Calculator 
        var simpleCalculator = new Calculator('hot pink');
        // Perform addition
        var subtractOutput = simpleCalculator.subtract(inputNumber1, inputNumber2);
        // Display output in index.html
        $('#solution').append('<p> The result is ' + subtractOutput + '</p>');
    });
});