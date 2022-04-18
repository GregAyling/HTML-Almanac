"use strict"

// Object holding next available row to hold coin.
var nextAvailable = {a:1,b:1,c:1,d:1,e:1,f:1,g:1};


function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	// Save moving coin.
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	// Determine coin being moved.
	let coinId = ev.dataTransfer.getData("text");
	let coin = document.getElementById(coinId);
	// Determine square into which it is being placed.
	let destId = lowestSquareUnder(ev.target.id);
	let destSquare = document.getElementById(destId);
	// Create copy of coin being moved.
	let img = new Image(coin.width, coin.height);
	img.src = coin.src;
	// Put coin at correct location.
	destSquare.appendChild(img);
}

function reset() {
	let cols = ["a","b","c","d","e","f","g"];
	for (let i = 0; i<cols.length;i++){
		for (let j=1; j<nextAvailable[cols[i]]; j++){
			let squareId = cols[i] + j;
			let square = document.getElementById(squareId);
			square.removeChild(square.children[0]);
		}
	}
	nextAvailable = {a:1,b:1,c:1,d:1,e:1,f:1,g:1};
}

function lowestSquareUnder(squareId) {
	let col = squareId.slice(0,1);
	let row = nextAvailable[col];
	// Disallow further drops on this column if this column is now full.
	if (row == 6){
		let dropSquare = document.getElementById(col+"7");
		dropSquare.ondrop = "";
		dropSquare.ondragover = "";
	}
	nextAvailable[col]++;
	return String(col) + String(row);
}