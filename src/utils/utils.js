export function searchKeyWords(wordColor, word){
	let found = undefined;
	wordColor.map((val, idx) => {
		if( val["keyword"] == word ){
			found = val.colors;
		}
	});
	return found;
}