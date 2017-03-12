export function searchKeyWords(wordColor, word){
	let found = undefined;
	wordColor.map((val, idx) => {
		if( val["keyword"] == word ){
			found = val.colors;
		}
	});
	return found;
}

export function searchFrameColors(wordFrameColor, word){
	let found = undefined;
	wordFrameColor.map((val, idx) => {
		if( word == val.keyword ){
			found = val.arr;
		}
	});

	return found;
}


Array.prototype.indexOfKeyword = function (word, arr) {
	let index = undefined;
	arr.map((val, idx) => {
		if( word == val.keyword ){
			index = idx;
		}
	});
	return index;
};