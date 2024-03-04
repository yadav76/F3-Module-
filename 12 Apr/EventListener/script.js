function login() {
    var emailVal = document.getElementById("email").value;
    var passwordVal = document.getElementById("password").value;

    console.log(emailVal, passwordVal);
}

var btn = document.getElementById("btn");

btn.addEventListener("click", login);

// Now If I want to get values while the user entering the values currently that time. As input field is changed than I get value of previous input field

var emailVal = document.getElementById("email");

emailVal.addEventListener("change", () => {
    console.log(emailVal.value);
});
// as soon as user moves to different input filed I get emailValue in console without users clicking on ClickMe button