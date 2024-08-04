// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

// function evenNumberOnly(arr) {
//   let evenNum = arr.filter((num) => {
//     return num % 2 === 0;
//   });
//   return evenNum;
// }
// console.log(evenNumberOnly([1, 7, 2, 4, 6, 9, 10]));

// <!-- Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old -->
function forUser(users) {
  let filteredUser = users.filter((user) => {
    return user.age > 18 && user.Gender === "Male";
  });
  console.log(filteredUser);
}
forUser([
  {
    name: "Harkirat",
    age: 21,
    Gender: "Male",
  },
  {
    name: "raman",
    age: 22,
    Gender: "FeMale",
  },
  {
    name: "Anshul",
    age: 16,
    Gender: "Male",
  },
]);

// // You can now filter the array of objects using the age to return a new array whose age is greater than 40 and whose occupation is equal to programmer:

// let filteredUser = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 40 && users[i].occupation === "programmer") {
//     filteredUser = [...filteredUser, users[i]];
//   }
// }
// console.log(filteredUser)
