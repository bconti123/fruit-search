const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const html = document.querySelector("html");
const body = document.querySelector("body");


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	if (str.length === 0) return []; // if str value is empty

	fruit.filter(word => {
		let idx = word.toLowerCase().search(str.toLowerCase());
		if (idx > -1) {
			results.push(word);
		}
	})

	return results;
}

function searchHandler(e) {
	showSuggestions(search(input.value), input.value); 
}

function showSuggestions(results, inputVal) { 

	suggestions.innerHTML = "";

	results.forEach(str => {
			const li = document.createElement("li");
			li.innerHTML = str + str[inputVal.length - 1]; // Still figure out how to add bold in each letter.
			suggestions.append(li);
	}); 
}

function useSuggestion(e) {
	if (e.target.tagName === "HTML" || e.target.tagName == "BODY" || e.target.tagName == "INPUT" || e.target.tagName == "UL") {
		suggestions.innerHTML = "";
	}
	else if (e.target = "suggestions") {
		input.value = e.target.innerText;
		suggestions.innerHTML = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
body.addEventListener('click', useSuggestion);
html.addEventListener('click', useSuggestion);

