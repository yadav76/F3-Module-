function submitUser() {
    // form.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var marks = document.getElementById("marks").value;
    var address = document.getElementById("address").value;

    // console.log(name)
    // console.log(email)
    // console.log(gender)
    // console.log(marks)
    // console.log(address)

    var user = createUser(name, email, gender, marks, address)
    console.log(user)

    console.log(JSON.stringify(user))
    sessionStorage.setItem(name, JSON.stringify(user))
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitUser();
    // handle submit
});

function createUser(nameVal, emailVal, genderVal, marksVal, addressVal) {
    return {
        name: nameVal,
        email: emailVal,
        gender: genderVal,
        marks: marksVal,
        address: addressVal
    }
}