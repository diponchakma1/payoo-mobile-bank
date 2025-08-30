
// logout feature

document.getElementById('logout-btn').addEventListener('click', function () {
    // window.location.href = './home.html'
    window.location.href = './index.html'
})

// add money features

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const validPin = 1234
    const bank = document.getElementById('bank').value
    const bankAccountNumber = document.getElementById('bank-account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = parseInt(document.getElementById('pin-number').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if (bankAccountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    if (validPin !== pinNumber) {
        alert("please provide valid pin")
        return;
    }
    const totalBalance = addAmount + availableBalance

    document.getElementById('available-balance').innerText = totalBalance
})


// cash out feature
document.getElementById('withdraw-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const validPin = 12345

    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const pin = parseInt(document.getElementById('pin').value)

    if (pin !== validPin) {
        alert('please provide valid pin')
        return
    }

    const totalBalanced = availableBalance - withdrawAmount

    document.getElementById('available-balance').innerText = totalBalanced
})

// toggling features

document.getElementById('add-btn').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})

document.getElementById('cash-out-btn').addEventListener('click', function () {

    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})