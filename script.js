document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const mobileNumber = 12345789601
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if (mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted) {
        window.location.href = './home.html'
    }
    else {
        alert("invalid password")
    }
})