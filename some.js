var a=[11,17,15,14,18,12];
var b=a.some(checkAdult);
console.log(b); 
function checkAdult(age){
      return age>=18
}