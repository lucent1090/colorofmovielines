export function searchKeyWords(wordColor, word){
	let found = undefined;
	wordColor.map((val, idx) => {
		if( val.keyword == word ){
			found = val.colors;
		}
	});
	return found;
}

export function getSumFeq(colors){
	let sumFeq = 0;
	colors.map((val, idx) => {
		sumFeq = sumFeq + val.feq;
	});

	return sumFeq;
}