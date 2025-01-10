let groceries1;
let groceries2;
let groceries3;

function calculateGroceries() {
    groceries1 = parseFloat(document.getElementById('groceries1').value);
    groceries2 = parseFloat(document.getElementById('groceries2').value);
    groceries3 = parseFloat(document.getElementById('groceries2').value);

    let totalGroceries = groceries1 + groceries2 + groceries3;

    document.getElementById('result').innerText = `The total amount is: $${totalGroceries}`;
    
}