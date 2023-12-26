let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");

let inputContainer = document.querySelectorAll("#input-container");

let firstNameDiv = document.createElement("div");
let lastNameDiv = document.createElement("div");
let emailDiv = document.createElement("div");
let phoneNumberDiv = document.createElement("div");
let passwordDiv = document.createElement("div");
let confirmPasswordDiv = document.createElement("div");

firstName.addEventListener("keyup", () => {
	if(firstName.value == "") {
		firstNameDiv.textContent = "*This field is Required";
		firstNameDiv.classList.add("validation");
		inputContainer[0].appendChild(firstNameDiv);
		firstName.style.borderColor = "red";
		firstName.setCustomValidity("Invalid field.");
	} else {
		inputContainer[0].removeChild(firstNameDiv);
		firstName.style.borderColor = "black";
		firstName.setCustomValidity("")
	}
});

lastName.addEventListener("keyup", () => {
	if(lastName.value == "") {
		lastNameDiv.textContent = "*This field is Required";
		lastNameDiv.classList.add("validation");
		inputContainer[1].appendChild(lastNameDiv);
		lastName.style.borderColor = "red";
		lastName.setCustomValidity("Invalid field.");
	} else {
		inputContainer[1].removeChild(lastNameDiv);
		lastName.style.borderColor = "black";
		lastName.setCustomValidity("")
	}
});

email.addEventListener("keyup", () => {
	if(!email.value.includes("@" && ".")) {
		emailDiv.textContent = "*Please provide a valid email";
		emailDiv.classList.add("validation");
		inputContainer[2].appendChild(emailDiv);
		email.style.borderColor = "red";
		email.setCustomValidity("Invalid field.")
	} else {
		inputContainer[2].removeChild(emailDiv);
		email.style.borderColor = "black";
		email.setCustomValidity("")
	}
});

phoneNumber.addEventListener("keyup", () => {
	if(!/^[0-9]{8,12}$/.test(phoneNumber.value)) {
		phoneNumberDiv.textContent = "*Please enter a valid number";
		phoneNumberDiv.classList.add("validation");
		inputContainer[3].appendChild(phoneNumberDiv);
		phoneNumber.style.borderColor = "red";
		phoneNumber.setCustomValidity("Invalid field.")
	} else {
		inputContainer[3].removeChild(phoneNumberDiv);
		phoneNumber.style.borderColor = "black";
		phoneNumber.setCustomValidity("")
	}
});

password.addEventListener("keyup", () => {
	if(!/^.{8,}$/.test(password.value)) {
		passwordDiv.textContent = "*Password requires minumum 8 characters";
		passwordDiv.classList.add("validation");
		inputContainer[4].appendChild(passwordDiv);
		password.style.borderColor = "red";
		password.setCustomValidity("Invalid field.")
	} else {
		inputContainer[4].removeChild(passwordDiv);
		password.style.borderColor = "black";
		password.setCustomValidity("")
	}
});

confirmPassword.addEventListener("keyup", () => {
	if (password.value != confirmPassword.value) {
		confirmPasswordDiv.textContent = "*Password did not match";
		confirmPasswordDiv.classList.add("validation");
		inputContainer[5].appendChild(confirmPasswordDiv);
		confirmPassword.style.borderColor = "red";
		confirmPassword.setCustomValidity("Invalid field.")
	}
	else {
		inputContainer[5].removeChild(confirmPasswordDiv);
		confirmPassword.style.borderColor = "black";
		confirmPassword.setCustomValidity("")
	}
});