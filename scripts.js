//jscripts 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var newName = 'Marian'
var indexOf = allNames.indexOf('Marian');

//console.log(indexOfM);

if (allNames.indexOf(newName) === -1) {
  var add = allNames.push('Marian');
}

console.log(allNames);