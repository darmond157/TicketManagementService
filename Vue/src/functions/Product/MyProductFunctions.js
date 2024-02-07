export function SaveMyProductDataInLocalStorage(title, description, picture) {
	localStorage.setItem("myProductTitle", title);
	localStorage.setItem("myProductDescription", description);
	localStorage.setItem("myProductPicture", picture);
}