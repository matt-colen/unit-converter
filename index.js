// DOM ELEMENTS
const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#number-input");

// CONVERSIONS
const conversions = {
  METERS_TO_FEET: 3.2808,
  FEET_TO_METERS: 0.3048,
  LITERS_TO_GALLONS: 0.2642,
  GALLONS_TO_LITERS: 3.7854,
  KILOS_TO_POUNDS: 2.2046,
  POUNDS_TO_KILOS: 0.45359999999999995,
};

// Convert Units Function
const convertUnits = (el) => {
  const numberToConvert = +el.value; // Num value of the el
  const convertedArr = []; // Arr to store the conversions

  // Loops through the conversions obj and pushes the conversion to the arr
  for (let key in conversions) {
    let result = numberToConvert * conversions[key];
    result = result.toFixed(3);
    convertedArr.push(result);
  }

  // Passes the conversion arr and original number to the render function
  renderResults(convertedArr, numberToConvert);
};

// Render Results Function
const renderResults = (arr, num) => {
  const resultCards = document.querySelectorAll(".results__card");
  // Stores the different template literals being used 
  const resultText = [
    `${num} meters = ${arr[0]} feet | ${num} feet = ${arr[1]} meters`,
    `${num} liters = ${arr[2]} gallons | ${num} gallons = ${arr[3]} liters`,
    `${num} kilos = ${arr[4]} pounds | ${num} pounds = ${arr[5]} kilos`,
  ];

  // Updates the textContent for each card & triggers the animation
  resultCards.forEach((card, index) => {
    card.textContent = resultText[index];
    triggerAnimation(card);
  });
};

// Trigger Animation Function
const triggerAnimation = (card) => {
  card.classList.add("results__card-ani");
  card.addEventListener("animationend", () => {
    card.classList.remove("results__card-ani");
    card.style.display = "flex";
  });
};

// EVENT LISTENERS
convertBtn.addEventListener("click", () => {
  convertUnits(inputEl);
});

//
inputEl.addEventListener("focus", () => {
  const label = document.querySelector("#number-label");
  label.classList.add("number-label--float");
});

inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    convertUnits(inputEl);
  }
});
