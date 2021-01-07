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


function forgotPassword(s) {
    // event.preventDefault();
    let myEmailValue = document.getElementById('mail').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        email: myEmailValue,
    }));
}

function loginPage(s) {
    // event.preventDefault();
    let usernameValue = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        username: usernameValue,
        password: passwordValue
    }));
}

function messagePage(s) {
    // event.preventDefault();
    let myGroup = document.getElementById('id').value;
    let myMessage = document.getElementById('msg2').value;
    // document.getElementsByClassName('mail')
    // console.log(myEmailValue, ' lllssss ', document.getElementsByClassName('mail'));
    alert(JSON.stringify({
        group: myGroup,
        message: myMessage
    }));
}