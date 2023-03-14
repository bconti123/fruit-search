const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// Still working.
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
	showSuggestions(search(input.value), input.value); // replace "App" with input.value later...
}

function showSuggestions(results, inputVal) {
	// Still working
	if (results.length === 0) suggestions.innerHTML = "";
	
	results.forEach(str => {
		const li = document.createElement("li");
		li.innerHTML = str;
		suggestions.append(li);
	}); 
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);