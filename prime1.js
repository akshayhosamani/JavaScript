var a=125
if (a===1 || a===0){
      console.log(`${a} is not prime number`)
}
else if(a===2){
      console.log(`${a} is prime number`) 
}
else{
for(i=2;i<a;i++){
      var b=a%i    
      if(b===0) {
            let n=i
            console.log('a');
            break
      }
}
if(b===0){
      console.log(`${a} is not prime number because it is completely divisible by ${n}`)
}else{
     console.log(`${a} is prime number`)
}
}