"use strict"
let numbers = [8, 2, 42, 5, 87];
for(let i = 0; i < numbers.length; i = i + 1) {
	let count = 0;
	for(let j = 1; j < numbers[i]; j = j + 1) {
		if(numbers[i] % j == 0) {
			count = count + 1;
		}
		if(count == 1) {
			console.log(`${numbers[i]} is a prime number`);
		} else {
			console.log("not a prime number");
		};
	};
};
