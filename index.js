const drumBtns = document.querySelectorAll('.drum');

drumBtns.forEach(btn => btn.addEventListener ('click', function() {
	alert("I got clicked!");
}));

function add(num1, num2) {
	return num1 + num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function calculator(num1, num2, operator) {
	return operator(num1, num2)
};

console.log(calculator(6, 3, divide));


// for(let i = 0; i < drumBtns.length; i++) {
// 	drumBtns[i].addEventListener('click',  function() {
// 	})
// };