

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});









var shortArray = [5,7,9];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];

console.log(shortArray[0]); // Outputs "5", the first value
console.log(shortArray[1]); // Outputs "7", the second value
console.log(shortArray[2]); // Outputs "9", the third value


console.log(mixedArray[0]); // Outputs "1"
console.log(mixedArray[1]); // Outputs "Hello"
console.log(mixedArray[2]); // Outputs "{}"
console.log(mixedArray[3]); // Outputs "nested array"


var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]



function add(number1, number2) {
  return number1 + number2
}
var result = add(10, 100);
console.log(result);

for (var i = 1; i <= 100; i++) {
  console.log(i);
}

var ages = [15, 20, 25, 30];
for (var i = 0; i < ages.length; i++) {

  console.log(i, "Nummmer");
  console.log("alter:", ages[i]);
}
