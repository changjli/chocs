const nama = document.getElementById("fullname")
const phone = document.getElementById("phone")
const Address = document.getElementById("Address")
const Product = document.getElementById("Product")
const option = document.getElementById("option")
const qty = document.getElementById("quantity")
const credit = document.getElementById("credit")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener("submit", (e) => {
    if (nama.value == "" || nama.value == null) {
        alert("Fill your FullName")
    }
    if (!validateName(nama.value)) return

    else if (phone.value == "" || phone.value == null) {
        alert("Fill your phone number")
    }

    else if (phone.value.length < 12) {
        alert("invalid phone number")
    }

    else if (!validatePhone(phone.value)) return

    else if (Address.value == "" || Address.value == null) {
        alert("Fill your Address")
    }

    else if (Address.value.length <= 10) {
        alert("address too short")
    }

    else if (!Address.value.startsWith('Jalan')) {
        alert("address must start with jalan")
        return
    }

    else if (Product.value < 1) {
        alert("Choose your menu")
    }

    else if (option.value < 1) {
        alert("Choose your payment")
    }

    else if (credit.value == "" || credit.value == null) {
        alert("Fill credit number")
    }

    else {
        alert("Form has been submitted!");
    }
})


function validateName(nama) {
    let len = nama.length;
    if (len < 7) {
        alert("Name must contain more than 7 words")
        return false
    }

    let flag = 1;
    for (let i = 0; i < len; i++) {
        if ((nama.charAt(i) >= 'a' && nama.charAt(i) <= 'z') ||
            (nama.charAt(i) >= 'A' && nama.charAt(i) <= 'Z') || nama.charAt(i) == ' ') {
            flag = 1;
        }
        else {
            flag = 0;
            break
        }
    }

    if (flag == 0) {
        alert("Name must only contain alphabet")
        return false
    }

    return true
}

function validatePhone(phone) {
    let len = phone.length;
    let flag = 1;
    for (let i = 0; i < len; i++) {
        if ((phone.charAt(i) >= 'a' && phone.charAt(i) <= 'z') ||
            (phone.charAt(i) >= 'A' && phone.charAt(i) <= 'Z') || phone.charAt(i) == ' ') {
            flag = 1;
            break
        }
        else {
            flag = 0;
        }
    }
    if (flag == 1) {
        alert("Phone number must not contain alphabet")
        return false
    }
    return true
}
