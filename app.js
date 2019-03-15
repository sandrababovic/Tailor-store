

window.onload = function(){


var img = document.getElementById("change-img");
img.addEventListener('mouseover', changeImage);
img.addEventListener('mouseout', returnImg);

}



function changeImage() {

this.src="img/doll.png";

}

function returnImg() {

	this.src="img/tailor.png";
}


	



