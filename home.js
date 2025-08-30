
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
})


// cash out feature
document.getElementById('withdraw-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const validPin = 12345

    const agentNumber = document.getElementById('agent-number').value
    const withdrawAmount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')

    const pin = getInputValueNumber('pin')

    if (pin !== validPin) {
        alert('please provide valid pin')
        return
    }

    const totalBalanced = availableBalance - withdrawAmount

    setInnerText(totalBalanced)
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