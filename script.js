
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirm-password");

confirmPasswordInput.addEventListener("keyup", () => {
	if (passwordInput.value != confirmPasswordInput.value) {
		confirmPasswordInput.setCustomValidity("Invalid field.")
		console.log(false)
	}
	else {
		console.log(true)
		confirmPasswordInput.setCustomValidity("")
	}
})
	


