function C1(name){
   if(name)this.name=name
}

function C2(name){
  this.name=name
}

function C3(name){
  this.name=name||'john'
}

C1.prototype.name='name'
C2.prototype.name='name'
C3.prototype.name='name'

alert(new C1().name)
alert(new C2().name)
alert(new C3().name)


var val=2;

var json={
   val:10,
   dbl:function(){
val*=2;
   }
}
json.dbl();

alert(json.val+val)



window.val=1;
var json={
  val:10,
  dbl:function(){
     this.val*=2; 
 }
}

json.dbl();
var dbl=json.dbl;
dbl();
json.dbl.call(window)
alert(window.val + json.val)




var test = (function(i){
  return function(){
            alert(i*2)
        }
})(2)

test(5)
