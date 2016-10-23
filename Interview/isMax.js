function Main(input) {
    input = input.split("\n");
    tmp = input[1].split(" ");
    var tmp_num = tmp.map(function(e) {
        return e-0;
    });
    var count = 0;
    for(var i = 0; i < tmp_num.length; i++) {
        if(isMax(i, tmp_num)) {
            count++;
        }
    }
    console.log('%d', count);
}

function sortBy(a, b) {
    return a > b;
}

function isMax(index, arr) {
    if((index == 0)||(index == arr.length-1)) {
        return false;
    } else if((arr[index-1] < arr[index])&&(arr[index+1] < arr[index])) {
        return true;
    } else {
        return false;
    }
}