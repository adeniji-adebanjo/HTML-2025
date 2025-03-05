// alert("Welcome to class");

// const cameraImage = document.getElementById("cameraImage");
// const cameraButton = document.getElementById("cameraButton");
// const wallButton = document.getElementById("wallButton");

// cameraButton.addEventListener("click", function () {
//   cameraImage.src = "https://picsum.photos/id/250/100/100";
// });

// wallButton.addEventListener("click", function () {
//   cameraImage.src = "https://picsum.photos/id/210/100/100";
// });

// const request = prompt("What's your name");
// document.getElementById("name").innerHTML = request;

// const free1 = 8;
// const Free$4_reach = 90;
// const Extends = "Jide";

const age = 35;
// const userAge = prompt("How old are you?");
// const user = prompt("What's your name");

// if (age < userAge) {
//   alert("Welcome to class");
// } else {
//   alert("You're not one of us, please check with the admin!");
// }

const cars = ["Bugatti", "Mercedes", "Volvo", "Ferrari"];
const person = {
  id: 1,
  name: "Ebuka Thomas",
  academy: "Innkeeper",
};

console.log(
  `My name is ${person.name} from the ${person.academy} and my ride is a ${cars[3]}`
);
const user = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "doe@example.com",
    class: "frontend",
    foodChoice: ["Yam", "Spaghetti", "Fish", "Plantain"],
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Brown",
    email: "micbrown@example.com",
    class: "backend",
    foodChoice: ["Rice", "Bazmatti", "Meat", "Egg"],
  },
];
console.log(user[1].foodChoice[3]);

// const yourAge = prompt("Enter your age");
const myAge = 39;

myAge >= ""
  ? console.log("We're age mates; no dey try me oh!")
  : console.log("Abeg, na you be boss here!");

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh

    // Get user input values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    // Update the page with user details
    document.getElementById("displayFname").textContent = firstName;
    document.getElementById("displayLname").textContent = lastName;
    document.getElementById("displayEmail").textContent = email;

    // Update the h1 tag with the user's first name
    document.getElementById("userName").textContent = firstName;

    // Display user details and message
    document.getElementById("userInfo").style.display = "block";
    document.getElementById(
      "userDetails"
    ).textContent = `Welcome, ${firstName} ${lastName}! Your email is ${email}.`;
    document.getElementById("userDetails").style.display = "block";

    // Hide the form
    document.getElementById("registrationForm").classList.add("hidden");
  });
