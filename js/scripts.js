var a = prompt('Enter number a:');
var b = prompt('Enter number b:');
value = (a * a) - (2 * a * b) + (b * b);
alert('Value for numbers: a ' + a + ' and b ' + b + ' is equal to: ' + value);
console.log('Value for numbers: a ' + a + ' and b ' + b + ' is equal to: ' + value);
if (value > 0) {
	console.log('More than zero');
} else if (value < 0) {
	console.log('Less than zero');
} else if (value == 0) {
	console.log('Zero');
} else {
	console.log('Bug');
};

