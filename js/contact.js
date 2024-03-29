// ===================<FORMS>================================================================

"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	let isChild = false;
	form.addEventListener("submit", formSend);

	async function formSend(event) {
		event.preventDefault();
		let error = formValidate(form);

		let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);
		const uncomplitAlert = document.getElementById("alert");
		let outFieled = document.createElement("div");

		if (error === 0) {
			form.classList.add("_sending");
			let response = await fetch("sendmail.php", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				let result = await response.json();
				// alert(result.message);
				// formPreview.innerHTML = ""; // clean filepreview after sending
				form.reset();
				form.classList.remove("_sending");
				if (uncomplitAlert.hasChildNodes() === true) {
					uncomplitAlert.firstElementChild.remove();
					isChild = true;
				}
				// uncomplitAlert.firstElementChild.remove();
				outFieled.classList.add("col", "ok");
				outFieled.innerHTML = `${result.message}`;
				uncomplitAlert.appendChild(outFieled);
			} else {
				alert(
					"Error: Google stopped supporting third-party apps and devices. So the feature gonna be updated. Use another way to contact me."
				);
				form.classList.remove("_sending");
				uncomplitAlert.firstElementChild.remove();
			}
		} else {
			// const uncomplitAlert = document.getElementById("alert");
			if (uncomplitAlert.hasChildNodes() === true) {
				uncomplitAlert.firstElementChild.remove();
				isChild = true;
			}
			// let outFieled = document.createElement("div");
			outFieled.classList.add("col", "alert");
			outFieled.innerHTML = "Please fill out the highlighted fields!";
			if (isChild === false) {
				uncomplitAlert.appendChild(outFieled);
			} else {
				outFieled.innerHTML = "Ah... Put checkbox mark back";
				outFieled.classList.add("dumby");
				uncomplitAlert.appendChild(outFieled);
			}
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains("_phone")) {
				if (phoneTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (
				input.getAttribute("type") === "checkbox" &&
				input.checked === false
			) {
				formAddError(input);
				error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
			input.value
		);
	}
	function phoneTest(input) {
		return !/^[\+]?[0-9]{1,2}[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
			input.value
		);
	}
});
