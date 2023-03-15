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
			
			let bold = '<strong>' + str.slice(str.toLowerCase().indexOf(inputVal.toLowerCase())) + '</strong>';
			li.innerHTML = str.slice(0, str.toLowerCase().indexOf(inputVal.toLowerCase())) + bold;
			suggestions.append(li);
	}); 
	// results.forEach(str => {
	// 	const li = document.createElement("li");
	// 	let boldString = (s, sub) => s.replace(RegExp(sub, 'g'), `<strong>${sub}</strong>`);
	// 	li.innerHTML = boldString(str.toLowerCase(), inputVal.toLowerCase());
	// 	suggestions.append(li);
	// }); 
	// results.forEach(str => {
	// 	const li = document.createElement("li");
	// 	let bold = '<strong>' + str.slice(str.toLowerCase().indexOf(inputVal.toLowerCase())) + '</strong>';
	// 	li.innerHTML = bold;
	// 	suggestions.append(li);
	// }); 

}

function useSuggestion(e) {
	if (e.target = "suggestions") {
		input.value = e.target.innerText;
		suggestions.innerHTML = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// let a = "Avocado";
// let b = "oca";


// let str = "Hello"
// let substr = "el"
// const boldString = (s, subs) => s.replace(RegExp(substr, 'g'), `<strong>${sub}</strong>`);

// results.forEach(str => {
// 	const li = document.createElement("li");
// 	li.innerHTML = boldString(str, inputVal);
// 	suggestions.append(li);
// }); 

let a = "dragonfruit"
let b = "gon"

let cut = a.slice(a.indexOf(b), b.length+b.length);

