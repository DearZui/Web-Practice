function Main(input) {
	input = input.split("\n");
    tmp = input[1];
    var count_arr = [];
    var all_str = [];
    for(var i = 0; i < tmp.length-1; i++) {
    	count_arr[i] = 0;
    	all_str.push(tmp.substring(i, i+2));
    	count_arr[all_str.indexOf(tmp.substring(i, i+2))]++;
    }
    var result_arr = [];
    for(var j = 0; j <all_str.length; j++) {
    	if(count_arr[j] > 0) {
    		var num = count_arr[j];
    		if(result_arr[num] == undefined) {
    			result_arr[num] = [];
    			result_arr[num].push(all_str[j]);
    		} else {
    			result_arr[num].push(all_str[j]);
    		}
    	}
    }
    result_arr.map(function(e) {
    	if(e!=undefined) {
    		return e.sort();
    	}
    });
    result_arr.reverse();
    result_arr = result_arr.reduce(function(prev, next) {return prev.concat(next)});
    result_arr.map(function(e) {
    	console.log('%s\n', e);
    })
}