let amount = document.querySelector(".Amt")
let interest = document.querySelector(".int")
let years = document.querySelector(".yer")
let submitBtn = document.querySelector(".sub")
let result = document.querySelector(".EMI")

let year = document.querySelector(".selectbtn1")
let months = document.querySelector(".selectbtn")

year.addEventListener("click", (e) => {
    e.preventDefault()
    year.classList.add("show")
    months.classList.remove("show")
    years.value = years.value / 12
})

months.addEventListener("click", (e) => {
    e.preventDefault()

    months.classList.add("show")
    year.classList.remove("show")
    years.value = years.value * 12
})

year.classList.add("show")


submitBtn.addEventListener("click", () => {
    let amounts = amount.value
    let interests = interest.value
    let yearss = years.value

    if (amount.value != "" && interest.value != "" && years.value != "") {
        if (amount.value > 0 && interest.value > 0 && years.value > 0) {
            if (year.classList.contains("show")) {
                yearsssss(amounts, interests, yearss)
            }
            else {
                month(amounts, interests, yearss)
            }
        } else {
            alert("Please enter value")
        }
    }else{
        alert("Please enter value greater than 1")
    }



})


function month(amount, interest, yearss) {

    if (amount.value != "" && interest.value != "" && yearss.value != "") {

        let money = amount
        let intrs = interest
        let yer = yearss

        let intrss = intrs / 1200

        f1 = money * intrss
        f2 = Math.pow(1 + intrss, yer)
        f3 = f2 - 1

        let fn1 = f1 * f2
        let fn2 = fn1 / f3.toLocaleString()


        let interestamount = fn2 * yearss
        let amountss = interestamount - amount

        document.querySelector(".texts").innerText = "₹" + Math.floor(interestamount).toLocaleString()
        document.querySelector(".text").innerText = "₹" + Math.floor(amountss).toLocaleString()
        result.innerText = "₹" + Math.floor(fn2).toLocaleString()
    } else {
        alert("Please enter value")
    }
}


function yearsssss(amount, interest, yearssss) {

    let yearss = yearssss * 12

    if (amount.value != "" && interest.value != "" && yearssss.value != "") {
        let money = amount
        let intrs = interest
        let yer = yearss

        console.log(money)
        let intrss = intrs / 1200

        f1 = money * intrss
        f2 = Math.pow(1 + intrss, yer)
        f3 = f2 - 1

        let fn1 = f1 * f2
        let fn2 = fn1 / f3

        let interestamount = fn2 * yer
        let amountss = interestamount - amount

        document.querySelector(".texts").innerText = "₹" + Math.floor(interestamount).toLocaleString()
        document.querySelector(".text").innerText = "₹" + Math.floor(amountss).toLocaleString()
        result.innerText = "₹" + Math.floor(fn2).toLocaleString()
    } else {
        alert("Please enter value")
    }
}
