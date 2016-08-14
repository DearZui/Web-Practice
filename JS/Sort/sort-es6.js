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