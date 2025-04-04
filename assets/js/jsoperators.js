let hasPassedMaths = true;
let hasPassedScience = true;

hasPassedMaths =
  true && hasPassedScience == true
    ? console.log("Student is qualified")
    : console.log("Student is not qualified");

if ((hasPassedMaths = true && hasPassedScience == true)) {
  console.log("Student is qualified");
} else {
  console.log("Student is not qualified");
}

function myFunction(p1, p2) {
  return p1 * p2;
}
let fee = myFunction(3, 5);
console.log(fee);
