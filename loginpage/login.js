const email = document.getElementById("email");
const password = document.getElementById("pwd");
const form = document.getElementById("loginForm");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("pwdError");

function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const value = email.value.trim();
    console.log(email.value);
    
    if (value === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!pattern.test(value)) {
        emailError.textContent =  "Please enter a valid email address (e.g., name@gmail.com)";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const value = password.value.trim();

    if (value === "") {
        passwordError.textContent = "Password is required";
        return false;
    } else if (value.length < 6) {
        passwordError.textContent = "Password did not match";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// // Show error when user leaves the field
// email.addEventListener("blur", () => validateEmail(true));
// password.addEventListener("blur", () => validatePassword(true));

// Live input correction
email.addEventListener("change", () => validateEmail());
password.addEventListener("change", () => validatePassword());


form.addEventListener("submit", function (e) {
    e.preventDefault();

    // const isEmailValid = validateEmail();
    // const isPasswordValid = validatePassword();
    if (email.value === "admin@gmail.com" && password.value === '123456') {
        alert("Welcome Admin Your are Successfully Logged In...");
        window.location.href = "/alter/index.html";
        return;
    }
   

    let foundUser=false;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith("user")) {
            const userData = JSON.parse(localStorage.getItem(key));
            console.log(userData);
            userData.forEach(user => {

                if( user.email === email.value.trim() && user.userpassword === password.value.trim()){
                    foundUser=true;
                }

            });

        }
    }
    if (foundUser) {
        alert("Login successful!");
        window.location.href = "https://www.amazon.in/";
    }
    else {
        alert("Invalid email or password");
    }

});
