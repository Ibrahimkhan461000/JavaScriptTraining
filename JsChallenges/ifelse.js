let age = 15;

if (age < 6) {
  console.log("Free");
} else if (age >= 6 && age <= 17) {
  console.log("Child Discount");
} else if (age >= 18 && age <= 26) {
  console.log("Student Discount");
} else if (age >= 27 && age <= 66) {
  console.log("Full Price");
} else if (age >= 66) {
  console.log("Senior");
} else {
  console.log("Invalid age");
}
