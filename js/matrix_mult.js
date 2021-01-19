var rowa,cola,rowb,colb;
var resa,resb;
var matrixA;
var matrixB;
function aconfirm() {
  matrixA=new Array();
  var matrixida=1;
 for (var i = 0; i < rowa; i++) {
 matrixA[i]=new Array();
 for (var j = 0; j < cola; j++) {
    matrixA[i].push(document.getElementById(matrixida).value);
 matrixida++;
 }
   }
}

function bconfirm() {
    matrixB=new Array();
  var matrixidb=26;
  for (var i = 0; i < rowb; i++) {
  matrixB[i]=new Array();
  for (var j = 0; j < colb; j++) {
     matrixB[i].push(document.getElementById(matrixidb).value);
  matrixidb++;
  }
    }
}

window.onload=start;
function start() {
  reseta();
  resetb();
}

function reseta(){
  rowa=3;
  cola=3;
    document.querySelector('#rowa').value=3;
    document.querySelector('#cola').value=3;
  resa=document.getElementById('resa');
    resa.innerHTML=" ";
  var aid=1;
 for(var i=0;i<rowa;i++){
   for(var j=0;j<cola;j++){
     let inputa=document.createElement('input');
     inputa.id=aid++;
     inputa.size="2";
     inputa.value=0;
     resa.appendChild(inputa);
   }
 let abr=document.createElement('br');
 resa.appendChild(abr);
 }
 document.querySelector('#label').innerHTML=" ";
   document.querySelector('#ans').innerHTML=" ";
   aconfirm();
}

function resetb(){
  rowb=3;
  colb=3;
    document.querySelector('#rowb').value=3;
    document.querySelector('#colb').value=3;
  resb=document.getElementById('resb');
  resb.innerHTML=" ";
    var bid=26;
 for(var i=0;i<rowb;i++){
   for(var j=0;j<colb;j++){
     let inputb=document.createElement('input');
     inputb.id=bid++;
     inputb.size="2";
     inputb.value=0;
     resb.appendChild(inputb);
   }
 let bbr=document.createElement('br');
 resb.appendChild(bbr);
 }
 document.querySelector('#label').innerHTML=" ";
   document.querySelector('#ans').innerHTML=" ";
   bconfirm();
}

document.querySelector('#aset').addEventListener('click',function() {
rowa=parseInt(document.querySelector('#rowa').value);
cola=parseInt(document.querySelector('#cola').value);
if(rowa>5){
  rowa=5;
  document.querySelector('#rowa').value=5;
}
if(cola>5){
  cola=5;
  document.querySelector('#cola').value=5;
}
resa=document.getElementById('resa');
resa.innerHTML=" ";
  var aid=1;
for(var i=0;i<rowa;i++){
 for(var j=0;j<cola;j++){
   let inputa=document.createElement('input');
   inputa.id=aid++;
   inputa.size="2";
   inputa.value=0;
   resa.appendChild(inputa);
 }
let abr=document.createElement('br');
resa.appendChild(abr);
}
document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
  aconfirm();
});

document.querySelector('#bset').addEventListener('click',function() {
rowb=parseInt(document.querySelector('#rowb').value);
colb=parseInt(document.querySelector('#colb').value);
if(rowb>5){
  rowb=5;
  document.querySelector('#rowb').value=5;
}
if(colb>5){
  colb=5;
  document.querySelector('#colb').value=5;
}
resb=document.getElementById('resb');
resb.innerHTML=" ";
  var bid=26;
for(var i=0;i<rowb;i++){
 for(var j=0;j<colb;j++){
   let inputb=document.createElement('input');
   inputb.id=bid++;
   inputb.size="2";
   inputb.value=0;
   resb.appendChild(inputb);
 }
let bbr=document.createElement('br');
resb.appendChild(bbr);
}
document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
  bconfirm();
});


document.querySelector('#aconfirm').addEventListener('click',aconfirm);



document.querySelector('#bconfirm').addEventListener('click',bconfirm);

document.querySelector('#amultb').addEventListener('click',function(){
  try {
    var prod=[];
  prod=math.round(math.multiply(matrixA,matrixB),2);
  var z="";
  for(var i=0;i<prod.length;i++){
    for(var j=0;j<prod[i].length;j++){
      z+=(prod[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A * B = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
        document.querySelector('#ans').innerHTML="Number of columns in A should be equal to the number of rows in B.";
  }
});

document.querySelector('#bmulta').addEventListener('click',function(){
  try {
    var prod=[];
  prod=math.round(math.multiply(matrixB,matrixA),2);
  var z="";
  for(var i=0;i<prod.length;i++){
    for(var j=0;j<prod[i].length;j++){
      z+=(prod[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B * A = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
        document.querySelector('#ans').innerHTML="Number of columns in B should be equal to the number of rows in A.";
  }
});

document.querySelector('#adivb').addEventListener('click',function(){
  try {
    var quot=[];
  quot=math.round(math.divide(matrixA,matrixB),2);
  var z="";
  for(var i=0;i<quot.length;i++){
    for(var j=0;j<quot[i].length;j++){
      z+=(quot[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A / B = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
        document.querySelector('#ans').innerHTML="Number of columns in A should be equal to the number of rows in B & Matrix B should be square.";
  }
});

document.querySelector('#bdiva').addEventListener('click',function(){
  try {
    var quot=[];
  quot=math.round(math.divide(matrixB,matrixA),2);
  var z="";
  for(var i=0;i<quot.length;i++){
    for(var j=0;j<quot[i].length;j++){
      z+=(quot[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B / A = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
        document.querySelector('#ans').innerHTML="Number of columns in B should be equal to the number of rows in A & Matrix A should be square.";
  }
});

document.querySelector('#a').addEventListener('click',function(){
  try {
    var p=[];
p=matrixA;
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#b').addEventListener('click',function(){
  try {
    var p=[];
p=matrixB;
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#a2').addEventListener('click',function(){
  try {
    var p=[];
p=math.round(math.pow(matrixA,2),2);
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A<sup>"+2+"</sup> = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrix A.";
    document.querySelector('#ans').innerHTML="Matrix A should be square.";
  }
});

document.querySelector('#b2').addEventListener('click',function(){
  try {
    var p=[];
p=math.round(math.pow(matrixB,2),2);
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B<sup>"+2+"</sup> = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrix B.";
    document.querySelector('#ans').innerHTML="Matrix B should be square.";
  }
});

document.querySelector('#apown').addEventListener('click',function(){
  try {
    var p=[];
    var n=parseInt(document.querySelector('#an').value);
p=math.round(math.pow(matrixA,n),2);
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A<sup>"+n+"</sup> = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrix A.";
    document.querySelector('#ans').innerHTML="Matrix A should be square.";
  }
});

document.querySelector('#bpown').addEventListener('click',function(){
  try {
    var p=[];
    var n=parseInt(document.querySelector('#bn').value);
p=math.round(math.pow(matrixA,n),2);
  var z="";
  for(var i=0;i<p.length;i++){
    for(var j=0;j<p[i].length;j++){
      z+=(p[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B<sup>"+n+"</sup> = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrix A.";
    document.querySelector('#ans').innerHTML="Matrix A should be square.";
  }
});

document.querySelector('#aones').addEventListener('click',function() {
  var aid=1;
  for(var i=0;i<rowa;i++){
    for(var j=0;j<cola;j++)
    document.getElementById(aid++).value=1;
  }
  aconfirm();
});

document.querySelector('#bones').addEventListener('click',function() {
  var bid=26;
  for(var i=0;i<rowb;i++){
    for(var j=0;j<colb;j++)
    document.getElementById(bid++).value=1;
  }
  bconfirm();
});

document.querySelector('.matrix-clear').addEventListener('click',function() {
  document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
});

document.querySelector('#aidentity').addEventListener('click',function() {
if(rowa===cola){
  if(rowa===1){
      document.getElementById(1).value=1;
  }
else if(rowa===2){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=1;
}
else if(rowa===3){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=1;
  document.getElementById(6).value=0;
  document.getElementById(7).value=0;
  document.getElementById(8).value=0;
  document.getElementById(9).value=1;
}
else if(rowa===4){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=0;
  document.getElementById(6).value=1;
  document.getElementById(7).value=0;
  document.getElementById(8).value=0;
  document.getElementById(9).value=0;
  document.getElementById(10).value=0;
  document.getElementById(11).value=1;
  document.getElementById(12).value=0;
  document.getElementById(13).value=0;
  document.getElementById(14).value=0;
  document.getElementById(15).value=0;
  document.getElementById(16).value=1;
}
else if(rowa===5){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=0;
  document.getElementById(6).value=0;
  document.getElementById(7).value=1;
  document.getElementById(8).value=0;
  document.getElementById(9).value=0;
  document.getElementById(10).value=0;
  document.getElementById(11).value=0;
  document.getElementById(12).value=0;
  document.getElementById(13).value=1;
  document.getElementById(14).value=0;
  document.getElementById(15).value=0;
  document.getElementById(16).value=0;
  document.getElementById(17).value=0;
  document.getElementById(18).value=0;
  document.getElementById(19).value=1;
  document.getElementById(20).value=0;
  document.getElementById(21).value=0;
  document.getElementById(22).value=0;
  document.getElementById(23).value=0;
  document.getElementById(24).value=0;
  document.getElementById(25).value=1;
}
aconfirm();
}
else{
  document.querySelector('#label').innerHTML="Please check the dimension of the matrix A.";
  document.querySelector('#ans').innerHTML="Matrix should be square.";
}
});

document.querySelector('#bidentity').addEventListener('click',function() {
if(rowb===colb){
  if(rowb===1){
      document.getElementById(26).value=1;
  }
else if(rowb===2){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=1;
}
else if(rowb===3){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=1;
  document.getElementById(31).value=0;
  document.getElementById(32).value=0;
  document.getElementById(33).value=0;
  document.getElementById(34).value=1;
}
else if(rowb===4){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=0;
  document.getElementById(31).value=1;
  document.getElementById(32).value=0;
  document.getElementById(33).value=0;
  document.getElementById(34).value=0;
  document.getElementById(35).value=0;
  document.getElementById(36).value=1;
  document.getElementById(37).value=0;
  document.getElementById(38).value=0;
  document.getElementById(39).value=0;
  document.getElementById(40).value=0;
  document.getElementById(41).value=1;
}
else if(rowb===5){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=0;
  document.getElementById(31).value=0;
  document.getElementById(32).value=1;
  document.getElementById(33).value=0;
  document.getElementById(34).value=0;
  document.getElementById(35).value=0;
  document.getElementById(36).value=0;
  document.getElementById(37).value=0;
  document.getElementById(38).value=1;
  document.getElementById(39).value=0;
  document.getElementById(40).value=0;
  document.getElementById(41).value=0;
  document.getElementById(42).value=0;
  document.getElementById(43).value=0;
  document.getElementById(44).value=1;
  document.getElementById(45).value=0;
  document.getElementById(46).value=0;
  document.getElementById(47).value=0;
  document.getElementById(48).value=0;
  document.getElementById(49).value=0;
  document.getElementById(50).value=1;
}
bconfirm();
}
else{
  document.querySelector('#label').innerHTML="Please check the dimension of the matrix B.";
  document.querySelector('#ans').innerHTML="Matrix should be square.";
}
});
