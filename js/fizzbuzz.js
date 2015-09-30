$(document).ready(function() {
var ul = $('ul');
for	( var i = 1; i <= 100; i++) {
	
	// FizzBuzzin' for i divisible by both '3' and '5';
		if (i% 3 === 0 && i% 5 === 0) {
			ul.append("<li>FizzBuzz!</li>");
		}

	// FizzBuzzin' for i divisible by only '3';	
		else if (i% 3 === 0) {
			ul.append("<li>Fizz</li>");
		}

	// FizzBuzzin' for i divisible by only '5';
		else if (i% 5 === 0) {
			ul.append("<li>Buzz</li>");
		}

	// FizzBuzzin' for i divisible by neither; 	
		else {
			ul.append("<li>" + i + "</li>");
		}

}
});