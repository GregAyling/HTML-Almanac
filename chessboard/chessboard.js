"use strict"

// Data items describing piece movement.
var startSquare;
var dragged_piece;
var endSquare;
var movedPiece;
var capturedPiece;
var movement = {}
var movements = [];	

// Colours
var light_square_normal = "rgb(179,179,179)";
var light_square_highlight = "yellow";

// SLEEP function
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}	


function setup() {
	// Empty graveyard.
	document.getElementById("graveyard").innerHTML = "";
	
	var image_string_start = '<img';
	var image_attributes = ' width="40px" height="40px" draggable="true" ondragstart="drag(event)">';
	// Row 8
	document.getElementById('a8').innerHTML = image_string_start.concat(' src="black_rook.png"   id="piece_01"', image_attributes); 
	document.getElementById('b8').innerHTML = image_string_start.concat(' src="black_knight.png" id="piece_02"', image_attributes); 
	document.getElementById('c8').innerHTML = image_string_start.concat(' src="black_bishop.png" id="piece_03"', image_attributes); 
	document.getElementById('d8').innerHTML = image_string_start.concat(' src="black_queen.png"  id="piece_04"', image_attributes); 
	document.getElementById('e8').innerHTML = image_string_start.concat(' src="black_king.png"   id="piece_05"', image_attributes); 
	document.getElementById('f8').innerHTML = image_string_start.concat(' src="black_bishop.png" id="piece_06"', image_attributes); 
	document.getElementById('g8').innerHTML = image_string_start.concat(' src="black_knight.png" id="piece_07"', image_attributes); 
	document.getElementById('h8').innerHTML = image_string_start.concat(' src="black_rook.png"   id="piece_08"', image_attributes); 
	// Row 7
	document.getElementById('a7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_09"', image_attributes); 
	document.getElementById('b7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_10"', image_attributes); 
	document.getElementById('c7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_11"', image_attributes); 
	document.getElementById('d7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_12"', image_attributes); 
	document.getElementById('e7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_13"', image_attributes); 
	document.getElementById('f7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_14"', image_attributes); 
	document.getElementById('g7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_15"', image_attributes); 
	document.getElementById('h7').innerHTML = image_string_start.concat(' src="black_pawn.png"   id="piece_16"', image_attributes); 
	// Row 2
	document.getElementById('a2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_17"', image_attributes); 
	document.getElementById('b2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_18"', image_attributes); 
	document.getElementById('c2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_19"', image_attributes); 
	document.getElementById('d2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_20"', image_attributes); 
	document.getElementById('e2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_21"', image_attributes); 
	document.getElementById('f2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_22"', image_attributes); 
	document.getElementById('g2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_23"', image_attributes); 
	document.getElementById('h2').innerHTML = image_string_start.concat(' src="white_pawn.png"   id="piece_24"', image_attributes); 	
	// Row 1
	document.getElementById('a1').innerHTML = image_string_start.concat(' src="white_rook.png"   id="piece_25"', image_attributes); 
	document.getElementById('b1').innerHTML = image_string_start.concat(' src="white_knight.png" id="piece_26"', image_attributes); 
	document.getElementById('c1').innerHTML = image_string_start.concat(' src="white_bishop.png" id="piece_27"', image_attributes); 
	document.getElementById('d1').innerHTML = image_string_start.concat(' src="white_queen.png"  id="piece_28"', image_attributes); 
	document.getElementById('e1').innerHTML = image_string_start.concat(' src="white_king.png"   id="piece_29"', image_attributes); 
	document.getElementById('f1').innerHTML = image_string_start.concat(' src="white_bishop.png" id="piece_30"', image_attributes); 
	document.getElementById('g1').innerHTML = image_string_start.concat(' src="white_knight.png" id="piece_31"', image_attributes); 
	document.getElementById('h1').innerHTML = image_string_start.concat(' src="white_rook.png"   id="piece_32"', image_attributes); 
}


function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	// Save moving piece.
	ev.dataTransfer.setData("text", ev.target.id);
	// Save movement data.
	startSquare = ev.target.parentElement.id;
	movedPiece = ev.target.id;
}

function drop(ev) {
  ev.preventDefault();
  // data is the id of the piece being moved.
  var pieceId = ev.dataTransfer.getData("text");
  // The graveyard is where we put the captured pieces.
  var graveyard = document.getElementById("graveyard");
  // 
  if (pieceId != ev.target.id) {
	// The piece is not landing on itself.	
	if (ev.target.id.substring(0,5) == "piece") {
		// The piece is landing on top of another piece.	
		// Find the parent of the captured piece.
		var newTarget = ev.target.parentElement;
		//Copy captured piece to graveyard.
		graveyard.appendChild(document.getElementById(ev.target.id));
		// Add incoming piece to now-vacant square.
		newTarget.appendChild(document.getElementById(pieceId));
		// Record movement.
		endSquare = newTarget.id;
		capturedPiece = ev.target.id;
		console.log(movedPiece.concat(' from ',startSquare,' moves to ',endSquare,' capturing ',capturedPiece));
		movement = {piece:movedPiece, fromSquare:startSquare, toSquare:endSquare, capturedPiece:capturedPiece};
		movements.push(movement);
	}
	else {
		// The piece is landing on a square.
		// Count the pieces on that square.
	    var numChildren = ev.target.children.length;
		if (numChildren > 0) {
			// There is another piece on that square.
			// Find the extra piece.
			var extraPiece = ev.target.children[0];
			// Move the extra piece to the graveyard.
			graveyard.appendChild(extraPiece);
		}	
		
		// The square is vacant.
		ev.target.appendChild(document.getElementById(pieceId));
		// Record movement.		
		endSquare = ev.target.id;
		console.log(movedPiece.concat(' from ',startSquare,' moves to ',endSquare));
		movement = {piece:movedPiece, fromSquare:startSquare, toSquare:endSquare, capturedPiece:""};
		movements.push(movement);
		
	}
  }
}

function move_piece(p_pieceId, p_toSquareId) {
	document.getElementById(p_toSquareId).appendChild(document.getElementById(p_pieceId));
}

function undo() {
	var last_move = movements.pop();
	if (last_move === undefined) {
		console.log('Nothing more to undo');
	}
	else {
		console.log( 'Undoing last move by moving '.concat(last_move.piece, ' to ', last_move.fromSquare));
		move_piece(last_move.piece, last_move.fromSquare);
		if (last_move.capturedPiece != "") {
			move_piece(last_move.capturedPiece, last_move.toSquare);
		}
	}
}

function disco01(onOff) {
	// Nominate all light squares.
	var light_square_list = ["a8","a6","b7","c8","a4","b5","c6","d7","e8","a2","b3","c4","d5","e6","f7","g8","b1","c2","d3","e4","f5","g6","h7","d1","e2","f3","g4","h5","f1","g2","h3","h1"];
	var square;
	var newColor;
	// Set new colour.
	if (onOff == "on") {newColor = light_square_highlight;}	else {newColor = light_square_normal;}
	// Set each nominated square to the new colour. 
	for (square of light_square_list) {document.getElementById(square).style.backgroundColor = newColor;}
}


function disco(reps) {
	if (reps > 0) {
		// Highlight on even reps. Return to normal on odd reps.
		if (reps%2 == 0) {disco01("on"); } else {disco01("off");}
		// Wait then go to next rep.
		sleep(200).then(() => {disco(reps-1);});
	}
}