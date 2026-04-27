const calcAge3 = (birthYear) => 2037 - birthYear;
const age = calcAge3(1992);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Tom"));
