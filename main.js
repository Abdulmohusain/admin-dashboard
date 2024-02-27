const sidebar = document.querySelector(".side-bar button");
sidebar.addEventListener("click", function(event) {
    document.querySelector(".side-bar").classList.add("collapse")
})
const expandButton = document.querySelector(".expand-button");
expandButton.addEventListener("click", function(event) {
    document.querySelector(".side-bar").classList.remove("collapse")
})

const notificationButton = document.querySelector(".notification-button")
notificationButton.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".notification-dropdown");
    if (dropdown.classList.contains("collapse")) {
        dropdown.classList.remove("collapse")
        const accountDropdown = document.querySelector(".account-dropdown")
        if (!accountDropdown.classList.contains("collapse")) {
            accountDropdown.classList.add("collapse")
        }
    } else {
        dropdown.classList.add("collapse")
    }
}) 
const accountButton = document.querySelector(".account-button")
accountButton.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".account-dropdown");
    if (dropdown.classList.contains("collapse")) {
        dropdown.classList.remove("collapse")
        const notificationDropdown = document.querySelector(".notification-dropdown")
        if (!notificationDropdown.classList.contains("collapse")) {
            notificationDropdown.classList.add("collapse")
        }
    } else {
        dropdown.classList.add("collapse")
    }
}) 
// const menuButton = document.querySelector(".menu-button")
// menuButton.addEventListener("click", function(event) {
//     const dropdown = document.querySelector(".menu-dropdown");
//     if (dropdown.classList.contains("collapse")) {
//         dropdown.classList.remove("collapse")
//     } else {
//         dropdown.classList.add("collapse")
//     }
// }) 


// document.body.addEventListener("mouseover", function(event) {
//     if (event.target.classList.contains("notification-button")) {
//         document.querySelector("notification-dropdown").classList.remove("collapse")
//     }
// })
