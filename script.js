// Task 1 - Change Color
let colors = ["red", "green", "blue", "pink", "purple", "yellow", "black", "brown"];
let title = document.querySelector("#title");
let colorButton = document.querySelector("#change-color");

colorButton.addEventListener("click", () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  title.style.color = randomColor;
});

// Task 2 - Counter
let count = 0;
let counterDisplay = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterDisplay.innerText = "COUNTER :- " + count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counterDisplay.innerText = "COUNTER :- " + count;
});

// Task 3 - Random Quote (auto-refresh every 5 sec)
const meaningfulStrings = [
  "Sunrise", "Mountain", "River", "Ocean", "Forest",
  "Desert", "Rain", "Snow", "Flower", "Tree",
  "Bird", "Fish", "Lion", "Elephant", "Tiger",
  "Book", "Pen", "Paper", "Chair", "Table",
  "Laptop", "Phone", "Keyboard", "Mouse", "Monitor",
  "Car", "Bicycle", "Bus", "Train", "Airplane",
  "City", "Village", "Street", "Park", "Garden",
  "Coffee", "Tea", "Water", "Juice", "Milk",
  "Apple", "Banana", "Orange", "Grapes", "Mango",
  "Smile", "Laugh", "Cry", "Sleep", "Dream",
  "Love", "Friendship", "Happiness", "Sadness", "Anger",
  "Music", "Dance", "Song", "Poem", "Art",
  "Movie", "Drama", "Comedy", "History", "Science",
  "Math", "Physics", "Chemistry", "Biology", "Geography",
  "Sun", "Moon", "Star", "Planet", "Galaxy",
  "Cloud", "Wind", "Storm", "Lightning", "Thunder",
  "Bread", "Cheese", "Egg", "Chicken", "Fish",
  "Mountain Bike", "Football", "Cricket", "Basketball", "Tennis",
  "Riverbank", "Waterfall", "Volcano", "Cave", "Island",
  "Painting", "Sculpture", "Photography", "Sketch", "Drawing",
  "Yoga", "Meditation", "Exercise", "Running", "Swimming",
  "School", "College", "University", "Library", "Museum"
];

function showRandomQuote() {
  let random = Math.floor(Math.random() * meaningfulStrings.length);
  document.getElementById("quote-container").innerText = meaningfulStrings[random];
}
showRandomQuote();
setInterval(showRandomQuote, 5000);
