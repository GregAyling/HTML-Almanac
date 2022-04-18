function classopt(reqoption,thisoption) {
    if (reqoption == thisoption) return 'class="active"' 
    else return '';
}

function addMenu(option) {
    document.getElementById("almanac_menu").innerHTML=
      '<a ' + classopt(option,'home')        + 'href="..\\home\\almanac.htm">Home</a>'
    + '<a ' + classopt(option,'locomotives') + 'href="..\\locomotives\\locomotives.htm">Locomotives</a>'
    + '<a ' + classopt(option,'clock')       + 'href="..\\clock\\clock.htm">Clock</a>'
    + '<a ' + classopt(option,'chessboard')  + 'href="..\\chessboard\\chessboard.htm">Chess</a>'
    + '<a ' + classopt(option,'connect4')    + 'href="..\\connect4\\connect4.htm">Connect 4</a>'
    + '<a ' + classopt(option,'boggle4')     + 'href="..\\boggle4\\boggle4.htm">Boggle 4*4</a>'
    + '<a ' + classopt(option,'calculator')  + 'href="..\\calculator\\calculator.htm">Calculator</a>'
    + '<a ' + classopt(option,'gallery')     + 'href="..\\gallery\\gallery.htm">Gallery</a>'
    + '<a ' + classopt(option,'barcode')     + 'href="..\\barcode\\barcode.htm">Barcodes</a>'
    + '<a ' + classopt(option,'sounds')      + 'href="..\\sounds\\sounds.html">Sounds</a>'
    + '<a ' + classopt(option,'wordle')      + 'href="..\\wordle\\wordle.html">Wordle</a>';;
}
