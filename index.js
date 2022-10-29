let count=0;

//let c=document.getElementById("count");

function incre(){
  count+=1;
  document.getElementById("count").textContent=count;
}
function save(){
  let str=count+" , ";
  document.getElementById("pre").textContent+=str;
  count=0;
  document.getElementById("count").textContent=count;
}