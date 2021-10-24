let n=5;
str="";
for(var i=1; i<=n;i++){
      for(j=1; j<=n-i;j++){
            str=str+" ";
      }
      for(var k=0;k<2*i-1;k++){
      str=str+"*";
      }
      str=str+"\n"
}
console.log(str)