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

/*    //注意只有cancelable属性设置为true的事件才可以使用preventDefault()来取消默认行为
    var mylink = document.getElementById("mylink");
    mylink.onclick = function(e) {
        e.preventDefault();
    };*/

/*    //stopPropagation()取消进一步的事件捕获或冒泡
    var div = document.getElementById("stopPorpagation_outer");
    var btn = document.getElementById("stopPorpagation_inner");
    btn.onclick = function(e) {
        alert("btn的事件");
        e.stopPropagation();
    }
    div.onclick = function(e) {
        alert("div的事件");
    }*/

/*    //eventPhase用来确定事件当前正处于事件流的哪个阶段，1: 捕获阶段 2: 目标对象 3: 冒泡阶段
    var div = document.getElementById("eventPhase_outer");
    var btn = document.getElementById("eventPhase_inner");
    btn.onclick = function(e) {
        alert(e.eventPhase);
    }
    div.addEventListener("click", function (e) {
         alert(e.eventPhase);
    },true);
    div.addEventListener("click", function (e) {
         alert(e.eventPhase);
    },false);*/

    /*//相当于DOM中的target属性
    var btn = document.getElementById("srcElement_btn");
    btn.onclick = function() {
        alert(window.event.srcElement === this);
    }
    btn.attachEvent("onclick", function(e) {
        alert(e.srcElement === this);
    })*/

    //遗憾的是我们没有办法确定时间是否能被取消
    var mylink = document.getElementById("returnValue_link");
    mylink.onclick = function () {
         event.returnValue = false;
    }