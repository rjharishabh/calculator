function cbroot(){
  var num=parseFloat(document.getElementById('cbn').value);


if (!isNaN(num)) {
    document.getElementById('cbr').value=Math.cbrt(num);
    document.getElementById('sr').value=math.sqrt(num);
  }
else {
 document.getElementById('cbn').value="Please Enter a Number";
  document.getElementById('cbn').style.backgroundColor="#97b17eeb";
}
}

function resetcbroot(){
    document.getElementById('cbn').style.backgroundColor="#fff";
  document.getElementById('cbn').value="";
    document.getElementById('cbn').placeholder="Please Enter a Number";
  document.getElementById('cbr').value="";
  document.getElementById('sr').value="";
}

function expt(){
    var base=parseFloat(document.getElementById('base').value);
    var exp=parseFloat(document.getElementById('exp').value);

      if(isNaN(base)){
        document.getElementById('base').value="Please Enter a Number";
         document.getElementById('base').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(exp)){
        document.getElementById('exp').value="Please Enter a Number";
         document.getElementById('exp').style.backgroundColor="#97b17eeb";
       }

     if (!isNaN(base) && !isNaN(exp) ) {
          document.getElementById('ab').value=Math.pow(base,exp);
}
}

function resetexpt(){
  document.getElementById('base').style.backgroundColor="#fff";
  document.getElementById('exp').style.backgroundColor="#fff";
    document.getElementById('base').value="";
document.getElementById('exp').value="";
document.getElementById('base').placeholder="Please Enter a Number";
document.getElementById('exp').placeholder="Please Enter a Number";
    document.getElementById('ab').value="";
}
function leq() {
  var a1=parseFloat(document.getElementById('a1').value);
  var b1=parseFloat(document.getElementById('b1').value);
  var c1=parseFloat(document.getElementById('c1').value);
  var a2=parseFloat(document.getElementById('a2').value);
  var b2=parseFloat(document.getElementById('b2').value);
  var c2=parseFloat(document.getElementById('c2').value);
  var obj;
if(!isNaN(a1)&&!isNaN(a2)&&!isNaN(b1)&&!isNaN(b2)&&!isNaN(c1)&&!isNaN(c2)){
  obj=lesolve(a1,a2,b1,b2,c1,c2);
    document.getElementById('aboutsol').textContent=obj.prop;
  document.getElementById('x').value=obj.x;
    document.getElementById('y').value=obj.y;
}
if(isNaN(a1)||isNaN(a2)||isNaN(b1)||isNaN(b2)||isNaN(c1)||isNaN(c2)){
      document.getElementById('aboutsol').textContent="Please Fill in the All Fields.";
}

}
function resetleq() {
document.getElementById('a1').value="";
document.getElementById('a2').value="";
document.getElementById('b1').value="";
document.getElementById('b2').value="";
document.getElementById('c1').value="";
document.getElementById('c2').value="";
document.getElementById('aboutsol').textContent="";
document.getElementById('x').value="";
  document.getElementById('y').value="";
}
function lesolve(a1,a2,b1,b2,c1,c2){
  var obj={};
  var z1=a1/a2;
  var z2=b1/b2;
  var z3=c1/c2;
  if(z1!==z2){
      obj.prop="Equations have a unique solution.";
      obj.x=-(((b1*c2)-(b2*c1))/((a1*b2)-(a2*b1)));
      obj.y=-(((c1*a2)-(c2*a1))/((a1*b2)-(a2*b1)));
  }

  else if ((z1===z2)&&(z2===z3)){
  obj.prop="Equations have infinite many solutions.";
  obj.x=c1/a1;
  obj.y=0;
  }
  else if ((z1===z2)&&(z2!==z3)){
      obj.prop="Equations have no solution.";
      obj.x="";
      obj.y="";
  }
return obj;
}

function rng() {
var min=parseFloat(document.getElementById('min-val').value);
var max=parseFloat(document.getElementById('max-val').value);
if(isNaN(min)){
  document.getElementById('min-val').placeholder="Enter a Value";
   document.getElementById('min-val').style.backgroundColor="#fff";
}
if(isNaN(max)){
  document.getElementById('max-val').placeholder="Enter a Value";
   document.getElementById('max-val').style.backgroundColor="#fff";
}
if(isNaN(min)&&isNaN(max))
document.getElementById('random-num').value=Math.random();
if(!isNaN(min)&&!isNaN(max)){
  document.getElementById('random-num').value=(Math.random()*(max-min)+min);
}
}

function resetrng() {
  document.getElementById('min-val').style.backgroundColor="#fff";
  document.getElementById('max-val').style.backgroundColor="#fff";
  document.getElementById('min-val').value="";
  document.getElementById('max-val').value="";
  document.getElementById('min-val').placeholder="Please Enter a Value";
  document.getElementById('max-val').placeholder="Please Enter a Value";
  document.getElementById('random-num').value="";
}
