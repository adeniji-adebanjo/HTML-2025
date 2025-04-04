!// alert("Welcome here");

const user = [
  {
    id: 1,
    FirstName: "John",
    LastName: "Doe",
    email: "doe@example.com",
    class: "Frontend",
    foodChoice: ["Yam", "Fish", "Plantain"],
  },
  {
    id: 2,
    FirstName: "Micheal",
    LastName: "Brown",
    email: "micbrown@example.com",
    class: "backend",
    foodChoice: ["rice", "Basmatti", "Egg", "Meat"],
  },
];
console.log(
  `my name is  ${user[0].LastName} from the ${user[0].class} class at Innkepper Academy.My email is ${user[1].email} and my beest food is ${user[1].foodChoice[3]}`
);

{
  let Name = "1";
  const student = "Ade";
  let isstudentinnkeeper = true;
  notstudent = false;
}
if ("is a student at innkeeper") console.log(`this is true`);

// let extends = "Jonah" declaring variable with reserved keyworrds

const isStudent = false;

if (isStudent === true) {
  console.log("You're a student, Welcome to class");
} else {
  console.log("You're not a student, please verify yoour status!");
}
var x = 10;
var y = 790;
var z = x + y;
console.log(z);
2 == "2";

const yourAge = 45;
const myAge = 36;
yourAge == myAge
  ? console.log("we'r agemates;no try me oh!")
  : console.log("Abeg,na you be boss!");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const Firstname = document.getElementById("firstName").value;
  const Lastname = document.getElementById("lastName").value;
  const Email = document.getElementById("email").value;

  // Print values to ul
  document.getElementById("fname").textContent = Firstname;
  document.getElementById("lname").textContent = Lastname;
  document.getElementById("useremail").textContent = Email;

  document.getElementById("userDetails").textContent = Firstname;
  document.getElementById(
    "userInfo"
  ).textContent = `Hello ${Firstname} ${Lastname} you're signed in with ${Email}`;
});
