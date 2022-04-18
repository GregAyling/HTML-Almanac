var firstNum = "";
var operator = "";

function backSpace(elementId) {
  var currentText = document.getElementById(elementId).innerHTML;
  if (currentText.length == 1) 
    {document.getElementById(elementId).innerHTML = "0";}
  else
    {document.getElementById(elementId).innerHTML = currentText.substr(0, currentText.length-1);}
}
function clearAll(elementId) {
	firstNum = "";
	operator = "";
	document.getElementById(elementId).innerHTML = "0";
}
function clearEntry(elementId) {
  document.getElementById(elementId).innerHTML = "0";
}
function operate(elementId, operation) {
  firstNum = document.getElementById(elementId).innerHTML;
  operator = operation;
  document.getElementById(elementId).innerHTML = "0";
}
function perCentise(elementId) {
  var currentText = document.getElementById(elementId).innerHTML;
  document.getElementById(elementId).innerHTML = Number(currentText)/100.0;
}
function squareRoot(elementId) {
  var currentText = document.getElementById(elementId).innerHTML;
  document.getElementById(elementId).innerHTML = Math.sqrt(currentText);
}
function square(elementId) {
  var currentText = document.getElementById(elementId).innerHTML;
  document.getElementById(elementId).innerHTML = Number(currentText) * Number(currentText);
}
function invert(elementId) {
  var currentText = document.getElementById(elementId).innerHTML;
  document.getElementById(elementId).innerHTML = 1/Number(currentText);
}
function append(elementId,newText) {
  var currentText = document.getElementById(elementId).innerHTML;
  if (currentText == "0") 
    {document.getElementById(elementId).innerHTML = newText;}
  else 
    {document.getElementById(elementId).innerHTML = currentText + newText;}
}
function prepend(elementId,newText) {
  var currentText = document.getElementById(elementId).innerHTML;
  document.getElementById(elementId).innerHTML = newText + currentText;
}
function calculate(elementId) {
	var currentText = document.getElementById(elementId).innerHTML;
	var currentTextDotPos = currentText.indexOf(".");
	if (currentTextDotPos == -1)
		{currentTextDecimals = 0;}
	else
		{currentTextDecimals = currentText.length - currentTextDotPos - 1;}
	var firstNumDotPos = firstNum.indexOf(".");
	if (firstNumDotPos == -1)
		{firstNumDecimals = 0;}
	else
		{firstNumDecimals = firstNum.length - firstNumDotPos - 1;}
	switch(operator) {
	  case "+":
		var resultDecimals = Math.max(currentTextDecimals, firstNumDecimals);
		document.getElementById(elementId).innerHTML = (Number(firstNum) + Number(currentText)).toFixed(resultDecimals);
		break;
	  case "-":
		var resultDecimals = Math.max(currentTextDecimals, firstNumDecimals);
		document.getElementById(elementId).innerHTML = (firstNum - currentText).toFixed(resultDecimals);
		break;
	  case "*":
		var resultDecimals = currentTextDecimals + firstNumDecimals;
		document.getElementById(elementId).innerHTML = (firstNum * currentText).toFixed(resultDecimals);
		break;
	  case "/":
		document.getElementById(elementId).innerHTML = firstNum / currentText;
		break;
  }
}
function changeSign(elementId) {
  var currentText = document.getElementById(elementId).innerHTML.toString();
  if (currentText.charAt(0) == "-")   
    {document.getElementById(elementId).innerHTML = currentText.substring(1);}
  else 
    {prepend("cdisplay","-");}
}