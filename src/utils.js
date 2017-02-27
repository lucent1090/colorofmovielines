export function searchKeyWords(arrKeyWord, word){
	let find = undefined;
	arrKeyWord.map((val, idx) => {
		if( val["keyword"] == word ){
			find = arrKeyWord[idx];
		}
	});
	return find;
}