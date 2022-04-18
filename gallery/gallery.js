// Each gallery knows the number of photos it contains
var galleries = {clouds:4, flowers:15};
var currentGallery;
var galleryItems;

function hideElement(pId) {
	let element = document.getElementById(pId);
	element.style.display = "none";
}

function displayElement(pId) {
	let element = document.getElementById(pId);
	element.style.display = "block";
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function setup() {
	// Hide gallery.
	hideElement("prevButtonId");
	hideElement("nextButtonId");
	hideElement("imageCurrentId");
	hideElement("gallerySummaryId");
	hideElement("tempImgId");
}

function displayGallery(pTopic) {
	// Record gallery name.
	currentGallery = pTopic;
	// Determine number of items.
	galleryItems = galleries[pTopic];
	// Display gallery name.
	let selectedGallery = document.getElementById("selectedGalleryId");
	selectedGallery.innerHTML = toTitleCase(pTopic);
	displayElement("gallerySummaryId");
	// Display first image.
	let image = document.getElementById("imageCurrentId");
	image.src = "images/" + pTopic + "/01.jpg";
	// Update reference.
	let ref = document.getElementById("photoId");
	ref.href = image.src;
	// Display gallery items.
	displayElement("imageCurrentId");
	displayElement("prevButtonId");
	displayElement("nextButtonId");
}

function prevImage() {
	let image = document.getElementById("imageCurrentId");
	let imageFileName = image.src;
	let imageFileNameRoot = imageFileName.substring(0, imageFileName.length -7);
	let imageNumber = imageFileName.substring(imageFileName.length -6, imageFileName.length-4);
	// Decrement image number
	if (imageNumber > 1) {
		imageNumber--;
	}
	else {
		imageNumber = galleryItems;
	}
	// Add a zero if less than 10
	if (imageNumber < 10) {
		imageNumber = "0" + String(imageNumber);
	}
	// Determine file name
	image.src = imageFileNameRoot + "/" + imageNumber + ".jpg";	
	// Update reference.
	let ref = document.getElementById("photoId");
	ref.href = image.src;
}

function nextImage() {
	let image = document.getElementById("imageCurrentId");
	let imageFileName = image.src;
	let imageFileNameRoot = imageFileName.substring(0, imageFileName.length -7);
	let imageNumber = imageFileName.substring(imageFileName.length -6, imageFileName.length-4);

	if (imageNumber < galleryItems) {
		imageNumber++;
	}
	else {
		imageNumber = 1;
	}

	if (imageNumber < 10) {
		imageNumber = "0" + String(imageNumber);
	}
	
	image.src = imageFileNameRoot + "/" + imageNumber + ".jpg";
	// Update reference.
	let ref = document.getElementById("photoId");
	ref.href = image.src;
}

function imgError(){
	alert("The image " + document.getElementById("imageCurrentId").src + " could not be loaded.");			
}
	