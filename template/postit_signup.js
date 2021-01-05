function myFunction(s) {
    // event.preventDefault();
    let myEmailValue = document.getElementById('mail').value;
    let usernameValue = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        email: myEmailValue,
        username: usernameValue,
        password: passwordValue
    }));
}
