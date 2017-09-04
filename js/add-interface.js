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
