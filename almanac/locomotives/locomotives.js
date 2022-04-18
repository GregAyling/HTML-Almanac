function change_image(image_id, direction) {
		var image = document.getElementById(image_id);
		var image_filename = image.src;
		var image_filename_root = image_filename.substring(0, image_filename.length -7);
		if (direction == "left") {
			if      (image.src.match("01")) {image.src = image_filename_root.concat("_04.jpg");}
			else if (image.src.match("04")) {image.src = image_filename_root.concat("_03.jpg");}
			else if (image.src.match("03")) {image.src = image_filename_root.concat("_02.jpg");}			
			else                            {image.src = image_filename_root.concat("_01.jpg");}
		} 
		else {
			if      (image.src.match("01")) {image.src = image_filename_root.concat("_02.jpg");}
			else if (image.src.match("02")) {image.src = image_filename_root.concat("_03.jpg");}
			else if (image.src.match("03")) {image.src = image_filename_root.concat("_04.jpg");}			
			else                            {image.src = image_filename_root.concat("_01.jpg");}
		} 
}
	