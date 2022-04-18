function displayBarcode(barcodeValue, code) {
  if (barcodeValue.value != "") 
    {
      document.getElementById("barcode").src = `https://barcode.tec-it.com/barcode.ashx?data=${barcodeValue.value}&code=${code.value}`;
    } 
  else
    {
      alert("Barcode value must be supplied");
    }
}