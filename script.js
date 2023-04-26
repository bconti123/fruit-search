const list = [
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
class Fruit {
  constructor() {
    this.fruit = [...list];
    this.input = document.querySelector("#fruit");
    this.suggestions = document.querySelector(".suggestions ul");
    this.html = document.querySelector("html");
    this.body = document.querySelector("body");

    this.input.addEventListener("keyup", this.searchHandler.bind(this));
    this.suggestions.addEventListener("click", this.useSuggestion.bind(this));
    this.html.addEventListener("click", this.useSuggestion.bind(this));
    this.body.addEventListener("click", this.useSuggestion.bind(this));
  }
  search(str) {
    let results = [];

    if (str.length === 0) return []; // if str value is empty

    // Finding word if more than -1. Push word to the result.
    this.fruit.filter((word) => {
      let idx = word.toLowerCase().search(str.toLowerCase());
      if (idx > -1) {
        results.push(word);
      }
    });

    return results;
  }
  // When you press any key in input box, function will call showSuggestions and Search functions.
  searchHandler() {
    this.showSuggestions(this.search(this.input.value), this.input.value);
  }

  showSuggestions(results, inputVal) {
    this.suggestions.innerHTML = "";

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
      this.suggestions.append(li);
    });
  }

  useSuggestion(e) {
    // If click anything outside inputbox and <li>, list will disappear.
    if (
      e.target.tagName === "HTML" ||
      e.target.tagName === "BODY" ||
      e.target.tagName === "UL" ||
      e.target.tagName === "INPUT"
    ) {
      this.suggestions.innerHTML = "";
      // if click word as a value in <li>, suggestions.innerHTML's value will be matched to where you click.
    } else if (e.target.tagName === "LI") {
      this.input.value = e.target.innerText;
      this.suggestions.innerHTML = "";
      // To see click on bold letter, input value should be matched to <li>'s value.
    } else if (e.target.tagName === "STRONG") {
      this.input.value = e.target.closest("LI").innerText;
      this.suggestions.innerHTML = "";
    }
    console.log(e.target.tagName);
  }
}
const fruits = new Fruit();
