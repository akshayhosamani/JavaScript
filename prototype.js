function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);
// document.getElementById("demo").innerHTML = fred.salary;
console.log(fred)