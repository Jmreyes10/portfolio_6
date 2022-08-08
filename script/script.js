function addValue() {
    // get the operands value
    str_num_a = document.getElementById("input_a").value;
    str_num_b = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
    num_a = parseFloat(str_num_a, 10);
    num_b = parseFloat(str_num_b, 10);

    if (isNaN(num_a) || isNaN(num_b)) {
        alert("At least one operand is not a number!");
        document.getElementById("input_a").value = null;
        document.getElementById("input_b").value = null;
    }
    else {
        // perform operation
        result = num_a + num_b;
        // creating the text output
        text = `${num_a} + ${num_b} = ${result}`;
        // (if you want to check) print out in console
        console.log(text);
        // change the text area
        document.mycalculator.output.value = text;
    }
}


function mulValue() {
    // get the operands value
    str_num_a = document.getElementById("input_a").value;
    str_num_b = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
    num_a = parseFloat(str_num_a, 10);
    num_b = parseFloat(str_num_b, 10);
    if (isNaN(num_a) || isNaN(num_b)) {
        alert("At least one operand is not a number!");
        document.getElementById("input_a").value = null;
        document.getElementById("input_b").value = null;
    }
    else {
        // perform operation
        result = num_a * num_b;
        // creating the text output
        text = `${num_a} * ${num_b} = ${result}`;
        // (if you want to check) print out in console
        console.log(text);
        // change the text area
        document.mycalculator.output.value = text;
    }
}

function divValue() {
    // get the operands value
    str_num_a = document.getElementById("input_a").value;
    str_num_b = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
    num_a = parseFloat(str_num_a, 10);
    num_b = parseFloat(str_num_b, 10);
    if (isNaN(num_a) || isNaN(num_b)) {
        alert("At least one operand is not a number!");
        document.getElementById("input_a").value = null;
        document.getElementById("input_b").value = null;
    }
    else {
        // perform operation
        result = num_a / num_b;
        // creating the text output
        text = `${num_a} / ${num_b} = ${result}`;
        // (if you want to check) print out in console
        console.log(text);
        // change the text area
        document.mycalculator.output.value = text;
    }
}
