// function displayTrafficLight(light) {
//   console.log(light);
// }

// setTimeout(displayTrafficLight, 3000, "Green");

// displayTrafficLight("Red");

function logAnswer(answer, points) {
  console.log(
    `The answer is ${answer} of course! if you got that right, give yourself ${points} points.`,
  );
}

console.log("What is capital of peru?");

setTimeout(logAnswer, 3000, "lima", 10);
