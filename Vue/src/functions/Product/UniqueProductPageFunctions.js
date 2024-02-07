export function SaveThisProductDataInLocalStorage(
	id,
	title,
	description,
	picture
) {
	localStorage.setItem("thisProductId", id);
	localStorage.setItem("thisProductTitle", title);
	localStorage.setItem("thisProductDescription", description);
	localStorage.setItem("thisProductPicture", picture);
}