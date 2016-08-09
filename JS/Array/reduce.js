//Let's begin with this one
const arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, index, arr) {
	console.log(prev, cur, index);
	return prev + cur;
})
console.log(sum, arr);
/*
What we got:
	1 2 1
	3 3 2
	6 4 3
	10 5 4
	[1, 2, 3, 4, 5] 15
*/

//Another one, what we want is this boy's total score
const result = [
	{
		subject: 'math',
		score: 88
	},
	{
		subject: 'chinese',
		score: 95
	},
	{
		subject: 'english',
		score: 80
	}
];

//All right, I know 'for' is easy
var sum = 0;
for (let i = 0; i < result.length; i++) {
	sum += result[i].score;
}

//But our aim is to lose 'for'
var sum = result.reduce(function(prev, cur) {
	return cur.score + prev;
}, 0) //'0' here indicates that the type is Number and the initial value is 0

//What if he's a bad boy and got a -10 score for punishment
var sum = result.reduce(function(prev, cur) {
	return cur.score + prev;
}, -10)  //Just turn 0 into 10

//What if different course has different weights?
const dist = {
	math: 0.5,
	chinese: 0.3,
	english: 0.2
}

var qsum = result.reduce(function(prev, cur) {
	return cur.score * dist[cur.subject] + prev;
}, 0)

//Now a classic letter counting
var arrString = "abcdaabc";

arrString.split('').reduce(function(res, cur) {
	res[cur] ? res[cur]++ : res[cur] = 1;
	return res;
}, {})