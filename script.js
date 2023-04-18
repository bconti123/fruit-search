const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const html = document.querySelector("html");
const body = document.querySelector("body");

function search(str) {
  let results = [];

  if (str.length === 0) return []; // if str value is empty

  // Finding word if more than -1. Push word to the result.
  fruit.filter((word) => {
    let idx = word.toLowerCase().search(str.toLowerCase());
    if (idx > -1) {
      results.push(word);
    }
  });

  return results;
}
// When you press any key in input box, function will call showSuggestions and Search functions.
function searchHandler(e) {
  showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  results.forEach((str) => {
    const li = document.createElement("li");
    // Search, a string is matched to Fruit Array and which are letter becomes bold.
    let bold =
      "<strong>" +
      str.slice(str.toLowerCase().indexOf(inputVal.toLowerCase())) +
      "</strong>";
    li.innerHTML =
      str.slice(0, str.toLowerCase().indexOf(inputVal.toLowerCase())) + bold;
    // When you type and search matches to letter in arrays, <li> will appear under input box.
    suggestions.append(li);
  });
}

function useSuggestion(e) {
  // If click anything outside inputbox and <li>, list will disappear.
  if (
    e.target.tagName === "HTML" ||
    e.target.tagName === "BODY" ||
    e.target.tagName === "UL" ||
    e.target.tagName === "INPUT"
  ) {
    suggestions.innerHTML = "";
    // if click word as a value in <li>, suggestions.innerHTML's value will be matched to where you click.
  } else if ((e.target = "suggestions")) {
    input.value = e.target.innerText;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
html.addEventListener("click", useSuggestion);
body.addEventListener("click", useSuggestion);
