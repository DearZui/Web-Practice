    /*//由于click事件的目标是button，所以这三个值都是相等的
    var btn = document.getElementById("btn_1");
    btn.onclick = function(e) {
        alert(e.currentTarget === this);
        alert(e.target === this);
    }
    document.body.onclick = function(e) {
        alert(e.currentTarget);
        alert(this);
        alert(e.target);
    }*/

    /*//由于click事件的目标是body，所以this和currentTarget都是document.body；
    //而target却是按钮元素，因为它是click的真正的目标
    //一开始还不是很理解红宝书为什么说按钮就是click真正的目标，
    //搞了半天是因为我们点的就是那个按钮，凸，要是我们点btn_1第三个alert就不会true了
    document.body.onclick = function(e) {
        alert(e.currentTarget === document.body);
        alert(e.currentTarget === document.body);
        alert(e.target === document.getElementById("btn_2"));
    }*/

    //注意只有cancelable属性设置为true的事件才可以使用preventDefault()来取消默认行为
    var mylink = document.getElementById("mylink");
    mylink.onclick = function(e) {
        e.preventDefault();
    };