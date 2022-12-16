//? ************** CREDITABILITY - ternary example **********//

const income = +prompt("Please enter your income?:");
const outcome = +prompt("Please enter your outcome?:");

const creditability = income - 5500 > outcome ? "can" : "cannot";
alert(`You ${creditability} be given credit.`);

//? ************** by muratozkan **********//
