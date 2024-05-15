// Selecting menu-icon and side-nav

var sidenav = document.getElementById("side-nav")
var menuicon = document.getElementById("menu-icon")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

// Selecting close-nav

var closenav = document.getElementById("close-nav")

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// Product search functionality

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) {

        var productName = productList[count].querySelector("h1").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }

    }
})