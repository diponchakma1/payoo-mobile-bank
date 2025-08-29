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

// toggling features

document.getElementById('add-btn').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})

document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})