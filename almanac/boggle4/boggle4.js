"use strict"

// Create cube constructor
function Cube(p1, p2, p3, p4, p5, p6){
	// Specify letters on each face.
	this.letters=[p1, p2, p3, p4, p5, p6]
}

Cube.prototype.displayedLetter = function(){
	// Pick a random face to be at the top.
	let topFace=Math.floor(Math.random() * 6);
	// Return the letter for this face.
	return this.letters[topFace];
}

function shuffle() {
	// Define cubes to be used.
	let cubes = [
		new Cube("A","N","G","E","E","A"), // 0
		new Cube("V","E","D","L","Y","R"), // 1
		new Cube("B","O","B","J","O","A"), // 2
		new Cube("O","P","A","H","S","C"), // 3
		new Cube("N","H","G","E","W","E"), // 4
		new Cube("R","D","L","X","E","I"), // 5
		new Cube("W","V","R","H","T","E"), // 6
		new Cube("O","T","T","A","O","W"), // 7
		new Cube("H","Z","N","R","N","L"), // 8
		new Cube("S","E","O","T","S","I"), // 9
		new Cube("S","T","D","T","Y","I"), //10
		new Cube("C","M","I","O","T","U"), //11
		new Cube("I","M","H","QU","U","N"),//12
		new Cube("A","K","F","F","S","P"), //13
		new Cube("E","R","L","T","Y","T"), //14
		new Cube("N","E","E","S","U","I")  //15
		];
	// Define squares to be filled. 
	let squares=["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4","d1","d2","d3","d4"];
	// Define list of cubes initially available for use.
	let availableCubes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	// Assign cubes randomly to squares. 
	for (let i=0; i<=15; i++) {
		let x = Math.floor(Math.random() * availableCubes.length);
		document.getElementById(squares[i]).innerHTML=cubes[availableCubes[x]].displayedLetter();
		availableCubes.splice(x,1);
	// Remove word and saved words.
	word.innerHTML = "";
	savedWords.innerHTML = "";
	}
}

function addLetter(pSquareId) {
	// Find elements.
	let word = document.getElementById("word");
	let square = document.getElementById(pSquareId);
	// Add letter displayed in selected square to word.
	word.innerHTML = word.innerHTML.concat(square.innerHTML);
}

function saveWord() {
	// Find elements.
	let word = document.getElementById("word");
	let savedWords = document.getElementById("savedWords");
	let wordCount = document.getElementById("wordCount");
	// Add word to list of saved words.
	savedWords.innerHTML = savedWords.innerHTML.concat("<br>",word.innerHTML);
	// Increment word count.
	wordCount.innerHTML++;
	// Remove word.
	word.innerHTML = "";
}

function backSpace() {
	// Find word element.
	let wordElement = document.getElementById("word");
	// Get letters from word element.
	let letters = wordElement.innerHTML;
	// Remove last letter.
	wordElement.innerHTML = letters.substr(0, letters.length - 1);
}

function cancelWord() {
	// Find elements.
	let word = document.getElementById("word");
	// Remove word.
	word.innerHTML = "";
}