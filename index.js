let menu = document.querySelector('#mobile-menu');
let sideBar = document.querySelector('.sidebar');
let blocker = document.querySelector('.dark-blocker');
let popupImageContainer = document.querySelector('.popup-image-container');
let popupImage = document.querySelector('.popup-img');
let images = document.querySelectorAll('.img');

//======= FUNCTION ON CLICKING MENU ON MOBILE =======//
menu.onclick = () => {
	//close sidebar and change mobile menu icon and toggle blocker
	menu.classList.toggle('fa-times');
	sideBar.classList.toggle('active');
	blocker.classList.toggle('active');
};

//======= FUNCTION ON CLICKING THE POPUP IMAGE =======//
popupImageContainer.onclick = () => {
	//remove the popup image to return to original view
	popupImageContainer.style.display = 'none';
};

//======= FUNCTION ON SCROLL =======//
window.onscroll = () => {
	//close sidebar and change mobile menu icon
	sideBar.classList.remove("active");
	menu.classList.remove("fa-times");
	//if the block exists, remove it
	if (blocker.classList.contains("active")) {
		blocker.classList.remove("active");
	}
}

//======= FUNCTION TO POPUP THE CHOSEN IMAGE =======//
images.forEach((img) => {
	//add an onlick function to all of them
	img.onclick = () => {
		//get the src of each image in gallery
		let imgSrc = img.getAttribute('src');
		//then set the current image of popup image to the selected image
		popupImage.src = imgSrc;
		//then display it
		popupImageContainer.style.display = 'flex';
	}
});

//======= FUNCTION TO SEARCH BY FILTERS =======//