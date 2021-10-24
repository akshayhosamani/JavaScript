var a=new Object()
a.fname="Akshay"
a.lname="Hosamani"
a.phno="8095713649"
console.log(a)
var b = {
            fname:'Mouse',
            lname:'Keyboard',
            model:'Asus',
            serial:'Abxc54jh',
            code:65432654,
            array:[1,2,"gfjewg"],
            fullname:function(){
                  return this.fname + "  " + this.lname;
            }
}
for(var i in b){
      console.log(i +" : " + b[i])
}
// console.log(b.fullname())