"use strict"
function startTime() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var today = new Date();
  var dd = standardised(today.getDate());
  var dow = weekDays[today.getDay()]
  var mon = months[today.getMonth()];
  var yyyy = today.getFullYear();
  var h = standardised(today.getHours());
  var m = standardised(today.getMinutes());
  var s_raw = today.getSeconds();
  var s = standardised(s_raw);
  var floor_5m = 5*(Math.floor(m/5));
  var m_since_5m_floor = m - floor_5m;
  var s_since_5m_floor = (m_since_5m_floor * 60) + s_raw;
  document.getElementById('dateField').innerHTML = dow + "    " + dd + "-" + mon + "-" + yyyy;
  document.getElementById('clock_face').innerHTML =  h + ":" + m + ":" + s;
  draw_rect(s_since_5m_floor);
  var t = setTimeout(startTime, 1000);
}
function standardised(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function draw_rect(no_of_secs) {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var xStart = 10;
  var yStart = 50;
  var yHeight = 100;
  var fullSecs = 300;
  var pixelPerSec = (context.canvas.width - xStart - 10)/fullSecs;
  var lineWidth = 7;
  var lhBoxLength = pixelPerSec * no_of_secs;
  var lhBoxText;
  var lhBoxColor;
  var rhBoxLength = pixelPerSec * fullSecs - lhBoxLength;
  var rhBoxText;
  var rhBoxColor;
  console.log(context.canvas.width);
  // Start from scratch
  context.clearRect(xStart, yStart, (pixelPerSec * fullSecs), yHeight);

  // Determine text/colours to display
  if (no_of_secs <= 205)  {
    lhBoxText = '';
    lhBoxColor = 'yellow';
    rhBoxText = 'OK to reoffer';
    rhBoxColor = 'green';
  }
  if (no_of_secs > 205) {
    lhBoxText = 'Time is almost up : ' + (230 - no_of_secs) + ' secs';
    lhBoxColor = 'yellow';
    rhBoxText = '';
    rhBoxColor = 'red';
  }
  if (no_of_secs > 230) {
    lhBoxText = "Time's up : try next DI";
    lhBoxColor = 'red';
    rhBoxText = '';
    rhBoxColor = 'magenta';
  }

  // Draw LH box
  context.beginPath();
  context.rect(xStart, yStart, lhBoxLength, yHeight);
  context.fillStyle = lhBoxColor;
  context.fill();
  context.lineWidth = lineWidth;
  context.strokeStyle = 'black';
  context.stroke();

  // Add text to LH box (as it long as it fits)
  context.beginPath();
  context.font = "bold 40px Arial";
  context.textAlign = 'center';
  context.fillStyle = 'black';
  context.fillText(lhBoxText, xStart + lhBoxLength / 2, yStart + yHeight/2 + 10);
  context.stroke();
  
  // Draw RH box
  context.beginPath();
  context.rect(xStart + lhBoxLength, yStart, rhBoxLength, yHeight);
  context.fillStyle = rhBoxColor;
  context.fill();
  context.lineWidth = lineWidth;
  context.strokeStyle = 'black';
  context.stroke();

  // Add text to RH box (as long as it fits)
  context.beginPath();
  context.font = "bold 40px Arial";
  context.textAlign = 'center';
  context.fillStyle = 'black';
  context.fillText(rhBoxText, xStart + lhBoxLength + rhBoxLength / 2 , yStart + yHeight/2 + 10);
  context.stroke();
}