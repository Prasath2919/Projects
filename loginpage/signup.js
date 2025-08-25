const email = document.getElementById("email");
const fullname = document.getElementById("fullname");
const password = document.getElementById("pwd");
// const confirmPassword = document.getElementById("cpwd");
const mobileNum = document.getElementById("mobilenum");
const form = document.getElementById("signupForm");
const address = document.getElementById("address");

const emailError = document.getElementById("emailError");
const pwdError = document.getElementById("pwdError");
const numError = document.getElementById("numError");
const addressError = document.getElementById("addressError");
const fullnameerror = document.getElementById("fullnameerror");



// Individual field validators
function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!pattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address (e.g., name@gmail.com).";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    if (password.value.trim() === "") {
        pwdError.textContent = " Password is required";
        return false;
    } else if (password.value.length < 6) {
        pwdError.textContent = " Password must be at least 6 characters";
        return false;
    } else {
        pwdError.textContent = "";
        return true;
    }
}
function validateMobileNum() {
    const pattern = /^[0-9]{10}$/;
    if (mobileNum.value.trim() === "") {
        numError.textContent = "Mobile number is required";
        return false;
    } else if (!pattern.test(mobileNum.value.trim())) {
        numError.textContent = "Invalid mobile number (10 digits only), it does not support letters and first word should 6 to 9 only eg.(9876543210)";
        return false;
    } else {
        numError.textContent = "";
        return true;
    }
}

function validateAddress() {
    if (address.value.trim() === "") {
        addressError.textContent = "Address is required";
        return false;
    } else {
        addressError.textContent = "";
        return true;
    }
}
function validateFullname() {
    const nameValue = fullname.value.trim();
    const namePattern = /^[A-Za-z\s]+$/; 

    if (nameValue === "") {
        fullnameerror.textContent = "Name is required";
        return false;
    } else if (!namePattern.test(nameValue)) {
        fullnameerror.textContent = "Name must contain only letters";
        return false;
    } else {
        fullnameerror.textContent = "";
        return true;
    }
}
// function validateConfirmPassword() {
//     if (confirmPassword.value.trim() === "") {
//         cpwdError.textContent = " Please confirm your password";
//         return false;
//     } else if (password.value !== confirmPassword.value) {
//         cpwdError.textContent = " Passwords do not match";
//         return false;
//     } else {
//         cpwdError.textContent = "";
//         return true;
//     }
// }



email.addEventListener("change", () => validateEmail());
password.addEventListener("change", () => validatePassword());
mobileNum.addEventListener("change", () => validateMobileNum());
address.addEventListener("change", () => validateAddress());
fullname.addEventListener("change", () => validateFullname());
// confirmPassword.addEventListener("input", () => validateConfirmPassword());


function getNextUserId() {
    let lastId = parseInt(localStorage.getItem("lastUserId")) || 0;
    lastId++;
    localStorage.setItem("lastUserId", lastId);
    return "user" + lastId;
}
//  Full form check on submit
form.addEventListener("submit", function (e) {
    e.preventDefault();


    const isEmailValid = validateEmail();
    const isPwdValid = validatePassword();
    const isMobileValid = validateMobileNum();
    const isAddressValid = validateAddress();
    // const isCpwdValid = validateConfirmPassword();

    const newID = getNextUserId();
    const storedUser = [];

    if (isEmailValid && isPwdValid && isMobileValid && isAddressValid) {
        // const storedUser = JSON.parse(localStorage.getItem("user")) || [];
        storedUser.push({

            customer_Id: newID,
            fullname: fullname.value.trim(),
            mobilenum: mobileNum.value.trim(),
            email: email.value.trim(),
            userpassword: password.value.trim(),
            useraddress: address.value.trim()

        });
        localStorage.setItem(newID, JSON.stringify(storedUser));

        alert("SignUp successful! Redirecting to login...");
        window.location.href = "login.html";
    }
});


//Prasath@123