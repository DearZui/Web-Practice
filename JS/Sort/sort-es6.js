//insertion sort
const insertion = (input) => {
	for (let i = 1, len = input.length; i < len; i++) {
		for (let j = i; j > 0; j--) {
			if (input[j] < input[j-1]) {
				input[j] = [input[j-1], input[j-1] = input[j]][0];
			}
		}
	}
	return input;
}

//selection sort
const selection = (input) => {
	for (let i = 0, len = input.length; i < len; i++) {
		var min = i;
		for (let j = i+1; j < len; j++) {
			if (input[j] < input[min]) min = j;
		}
		input[i] = [input[min], input[min] = input[i]][0];
	}
	return input;
}