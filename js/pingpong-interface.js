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
