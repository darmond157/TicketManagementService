import axios from "axios";

export default function submitNewTicket(
	title,
	description,
	deadline,
	type,
	productName,
	toast,
	router
) {
	
	const thisProduct = localStorage.getItem("thisProductId");
	const parsedDeadlineDate = parseDeadlineDate(deadline);
	const isDateValid = dateValidation(parsedDeadlineDate);
	if (!isDateValid) {
		toast.error("Date is past ...");
	} else {
		axios
			.post(`/product/${thisProduct}/ticket`, {
				title,
				description,
				productName,
				deadline,
				type,
			})
			.then(() => {
				toast.success("Ticket Submitted");
				setTimeout(() => {
					router.back();
				}, 1000);
			})
			.catch(() => {
				toast.error("Error in Submitting Ticket");
			});
	}
}

function parseDeadlineDate(deadline) {
	//2024-01-28
	const splitDate = deadline.split("-");
	return {
		year: splitDate[0],
		month: splitDate[1],
		day: splitDate[2],
	};
}

function dateValidation(parsedDeadlineDate) {
	const date = new Date();

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	const deadlineYear = parsedDeadlineDate.year;
	const deadlineMonth = parsedDeadlineDate.month;
	const deadlineDay = parsedDeadlineDate.day;

	if (deadlineYear > year) return true;
	else if (deadlineYear == year) {
		if (deadlineMonth > month) {
			return true;
		} else if (deadlineMonth == month) {
			return deadlineDay >= day;
		} else return true;
	} else return false;
}
