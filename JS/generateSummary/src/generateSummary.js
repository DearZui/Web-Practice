function generateSummary(input) {
	console.log("[Summary]");
  console.log("\n");
	let input_arr = input.split("\n");
	let income = [];
  let payment = [];
  let profit = [];
	for(let i = 0; i < input_arr.length; i++) {
		let per_input_arr = input_arr[i].split(" ");
		let date = new Date(per_input_arr[0]);
		let start = per_input_arr[1].split("~")[0].substring(0,2)-0;
		let end = per_input_arr[1].split("~")[1].substring(0,2)-0;
		if(per_charge(date, start, end) === false) {console.error("打球的时间不对啊小伙子")} 
		let per_payment = order_num(per_input_arr[2]-0) * per_charge(date, start, end);
		let per_income = (per_input_arr[2]<4) ? 0 : per_input_arr[2]*30;
		let per_profit = per_income - per_payment;
		payment.push(per_payment);
		income.push(per_income);
		profit.push(per_profit);
		console.log(per_input_arr[0] + " " + per_input_arr[1] + " +" + per_income + " -" + per_payment + " " + ((per_profit>0) ? ("+"+per_profit) : per_profit));
	}
	console.log("\nTotal Income: " + income.reduce((p, c) => p+c) + "\nTotal Payment: " + payment.reduce((p, c) => p+c) + "\nProfit: " + profit.reduce((p, c) => p+c));	
}

//订场策略
function order_num(m) {
	let t = Math.floor(m/6);
	let x = m%6;
	if((t===0 && x<4)||(t>3)||((t===2||t===3)&&x<4)) {
		return t;
	} else {
		return t+1;
	}
}

/*
	params: data日期
					start开始时间
					end结束时间
*/
function per_charge(date, start, end) {
	if((start<9)||(end>22)||((end-start)!==2 && (end-start)!==3)) return false;  //输入有误
	let arr = [];
	let day = date.getDay();
	let result = 0;
	if((day===0)||(day===6)) {
		if(start<12){
			result = (end<=12) ? 40*(end-start) : 40*(12-start)+50*(end-12);
		} else if(start<18) {
			result = (end<=18) ? 50*(end-start) : 50*(18-start)+60*(end-18);
		} else {
			result = 60*(end-start);
		}
	}	else {
		if(start<12){
			result = (end<=12) ? 30*(end-start) : 30*(12-start)+50*(end-12);
		} else if(start<18) {
			result = (end<=18) ? 50*(end-start) : 50*(18-start)+80*(end-18);
		} else if(start<20) {
			result = (end<=20) ? 80*(end-start) : 80*(18-start)+60*(end-18);
		} else {
			result = 60*(end-start);
		}
	}
	return result;
}

module.exports = generateSummary;