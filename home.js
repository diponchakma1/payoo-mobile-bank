
// logout feature

document.getElementById('logout-btn').addEventListener('click', function () {
    // window.location.href = './home.html'
    window.location.href = './index.html'
})


// input get value number using function

function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

// get value using function

function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// get Inner Text value function

function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// set inner text value

function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}
// add money features

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const validPin = 1234
    const bank = getInputValue('bank')
    const bankAccountNumber = document.getElementById('bank-account-number').value
    const addAmount = getInputValueNumber('add-amount')
    const pinNumber = getInputValueNumber('pin-number')

    if (addAmount <= 0) {
        alert('Invalid amount')
        return
    }
    const availableBalance = getInnerText('available-balance')

    if (bankAccountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    if (validPin !== pinNumber) {
        alert("please provide valid pin")
        return;
    }
    const totalBalance = addAmount + availableBalance

    setInnerText(totalBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

})


// cash out feature
document.getElementById('withdraw-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const validPin = 12345

    const agentNumber = document.getElementById('agent-number').value
    const withdrawAmount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')

    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
        alert('invalid amount')
        return
    }

    const pin = getInputValueNumber('pin')

    if (pin !== validPin) {
        alert('please provide valid pin')
        return
    }

    const totalBalanced = availableBalance - withdrawAmount

    setInnerText(totalBalanced)
})

// Transfer money section
// document.getElementById('transfer-money').addEventListener('click', function (event) {

// })

// toggling features

// all function handle toggle

function handleToggle(id) {
    const features = document.getElementsByClassName('feature')
    for (const feature of features) {
        feature.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

// handle Toggle Buttons

function handleButtonsToggle(id) {
    const formBtn = document.getElementsByClassName('form-btn')

    for (const btn of formBtn) {
        btn.classList.remove("bg-[#0874f20d]", "border-[#0874f2]")
        btn.classList.add("border-gray-400")
    }

    document.getElementById(id).classList.remove("border-gray-400")
    document.getElementById(id).classList.add("bg-[#0874f20d]", "border-[#0874f2]")
}
// add money toggle
document.getElementById('add-btn').addEventListener('click', function () {
    handleToggle('add-money-parent')
    handleButtonsToggle('add-btn')

})

// cash out toggle
document.getElementById('cash-out-btn').addEventListener('click', function () {
    handleToggle('cash-out-parent')
    handleButtonsToggle('cash-out-btn')
})

// transfer money toggle

document.getElementById('transfer-money-btn').addEventListener('click', function (event) {
    handleToggle('transfer-money-parent')
    handleButtonsToggle('transfer-money-btn')
})
// Get Bonus toggle

document.getElementById('get-bonus-btn').addEventListener('click', function (event) {
    handleToggle('get-bonus-parent')
    handleButtonsToggle('get-bonus-btn')
})
// Pay Bill toggle

document.getElementById('pay-bill-btn').addEventListener('click', function (event) {
    handleToggle('pay-bill-parent')
    handleButtonsToggle('pay-bill-btn')
})
// Transaction toggle

document.getElementById('transaction-btn').addEventListener('click', function (event) {
    handleToggle('transaction-parent')
    handleButtonsToggle('transaction-btn')
})