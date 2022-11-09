let rating = 0
let rating1 = false
let rating2 = false
let rating3 = false
let rating4 = false
let rating5 = false
let ratingSelected = false
let mediumGrey = "hsl(216, 12%, 54%)"
let white = "white"
let orange = "hsl(25, 97%, 53%)"
let ratingRequest = document.querySelector("#rating-request")
let button1 = document.querySelector("#btn1")
let button2 = document.querySelector("#btn2")
let button3 = document.querySelector("#btn3")
let button4 = document.querySelector("#btn4")
let button5 = document.querySelector("#btn5")
let submit = document.querySelector("#submit")
let thankYouDisplay = document.querySelector("#thank-you")
let ratingDisplay = document.querySelector("#rating")

function resetRating() {
    rating1 = rating2 = rating3 = rating4 = rating5 = false
    button1.style = button2.style = button3.style = button4.style = button5.style = null
}

function setColors(target) {
    target.style.color = white
    target.style.backgroundColor = mediumGrey
}


button1.addEventListener('click', function(e){
    if (rating1 === false && ratingSelected === false) {
        rating = 1
        setColors(e.target)
        rating1 = true
        ratingSelected = true
    } else if (rating1 === false && ratingSelected === true) {
        resetRating()
        rating = 1
        setColors(e.target)
        rating1 = true
    } else {
        e.target.style = null
        rating1 = false
        ratingSelected = false
        rating = 0
    }
})

button2.addEventListener('click', function(e){
    if (rating2 === false && ratingSelected === false) {
        rating = 2
        setColors(e.target)
        rating2 = true
        ratingSelected = true
    } else if (rating2 === false && ratingSelected === true) {
        resetRating()
        rating = 2
        setColors(e.target)
        rating2 = true
    } else {
        e.target.style = null
        rating2 = false
        ratingSelected = false
        rating = 0
    }
})

button3.addEventListener('click', function(e){
    if (rating3 === false && ratingSelected === false) {
        rating = 3
        setColors(e.target)
        rating3 = true
        ratingSelected = true
    } else if (rating3 === false && ratingSelected === true) {
        resetRating()
        rating = 3
        setColors(e.target)
        rating3 = true
    } else {
        e.target.style = null
        rating3 = false
        ratingSelected = false
        rating = 0
    }
})

button4.addEventListener('click', function(e){
    if (rating4 === false && ratingSelected === false) {
        rating = 4
        setColors(e.target)
        rating4 = true
        ratingSelected = true
    } else if (rating4 === false && ratingSelected === true) {
        resetRating()
        rating = 4
        setColors(e.target)
        rating4 = true
    } else {
        e.target.style = null
        rating4 = false
        ratingSelected = false
        rating = 0
    }
})

button5.addEventListener('click', function(e){
    if (rating5 === false && ratingSelected === false) {
        rating = 5
        setColors(e.target)
        rating5 = true
        ratingSelected = true
    } else if (rating5 === false && ratingSelected === true) {
        resetRating()
        rating = 5
        setColors(e.target)
        rating5 = true
    } else {
        e.target.style = null
        rating5 = false
        ratingSelected = false
        rating = 0
    }
})

submit.addEventListener("click", function() {
    if (rating != 0) {
        ratingDisplay.textContent = rating
        ratingRequest.style.display = "none"
        thankYouDisplay.style.display = "flex"
    } else {
        window.alert("Please select a rating before submitting!")
    }
})