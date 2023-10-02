// DOM ELEMENTS
const convertBtn = document.querySelector("#convert-btn");

const convertUnits = (el) => {
  const numberToConvert = el.value;
  const conversions = [
    3.2808, 0.3048, 0.2642, 3.7854, 2.2046, 0.45359999999999995,
  ];
  const convertedArr = conversions.map((conversion) => {
    let result = conversion * numberToConvert;
    result = result.toFixed(3);
    return result;
  });
  render(convertedArr, numberToConvert);
};

const render = (arr, num) => {
  const LengthEl = document.querySelector("#results-length");
  const volumeEl = document.querySelector("#results-volume");
  const massEl = document.querySelector("#results-mass");
  LengthEl.textContent = `${num} meters = ${arr[0]} feet | ${num} feet = ${arr[1]} meters`;
  volumeEl.textContent = `${num} liters = ${arr[2]} gallons | ${num} gallons = ${arr[3]} liters`;
  massEl.textContent = `${num} kilos = ${arr[4]} pounds | ${num} pounds = ${arr[5]} kilos`;
};

// EVENT LISTENERS
convertBtn.addEventListener("click", () => {
  const inputEl = document.querySelector("#input-el");
  convertUnits(inputEl);
});
