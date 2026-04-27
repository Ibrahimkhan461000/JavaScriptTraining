const student = {
  firstName: "Ibrahim",
  lastName: "Khan",
  birthYear: 1997,
  course: "JavaScript",
  grade: "A",

  calAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(student.calAge());

console.log(student);

console.log(student.age);
console.log(student.lastName);

console.log(student["firstName"]);
