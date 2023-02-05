function rot13(str) {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

	let strTranslated = str.split('').map(char => {  
        let index = alphabet.indexOf(char);      
        return index >= 0 ? alphabet[(index + 13) % 26] : char;
    }).join('');

	return strTranslated

	// ----- OTHER SOLUTION ----------
  	// let firstRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  	// let secondRow = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  	// let strTranslated = str.split('').map(char => 
  	// 	secondRow.indexOf(char) >= 0 ?
  	// 		firstRow[secondRow.indexOf(char)] :
  	// 	firstRow.indexOf(char) >= 0 ?
  	// 		secondRow[firstRow.indexOf(char)] :
			// char
  	// ).join('')

  	// return strTranslated;
}



console.log(rot13("SERR PBQR PNZC"));
// FREE CODE CAMP
