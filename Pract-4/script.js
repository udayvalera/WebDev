function ValidName() {
    var name = document.getElementById('name').value;
    var pattern = /^[a-zA-Z]+$/;
    if (name.length > 3) {
        if (!pattern.test(name)) {
            document.getElementById('name').style.border = '2px solid red';
            alert('Enter valid name')
            return false;
        }
    }
}

function ValidPhone() {
    var phone = document.getElementById('phone').value;
    var pattern = /^[0-9]{10}$/;
    if (phone.length > 10) {
        if (!pattern.test(phone)) {
            document.getElementById('phone').style.border = '2px solid red';
            alert("Enter valid phone number");
            return false;
        }
    }
    else if (phone.length === 10) {
        if (!pattern.test(phone)) {
            document.getElementById('phone').style.border = '2px solid red';
            alert("Enter valid phone number");
            return false;
        }
    }
}

function validate() {
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    if (password != cpassword) {
        document.getElementById('password').style.border = '2px solid yellow';
        document.getElementById('cpassword').style.border = '2px solid yellow';
        alert("Password did not match");
        return false;
    }

    if (password.length < 6) {
        document.getElementById('password').style.border = '2px solid yellow';
        alert("Password should be atleast 6 characters");
        return false;
    }

    var email = document.getElementById('email').value;
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(email)) {
        document.getElementById('email').style.border = '2px solid red';
        alert("Enter valid email");
        return false;
    }
}