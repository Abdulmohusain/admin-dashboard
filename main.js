#!/usr/bin/node
function isMobile() {
    const breakpoint = 640;
    const width = window.innerWidth;
    return width <= breakpoint;
}
if (isMobile()) {
    document.querySelector(".side-bar").classList.add("collapse");
}

// Add event listener for window resize
window.addEventListener("resize", function() {
    if (isMobile()) {
        // Collapse sidebar
        document.querySelector(".side-bar").classList.add("collapse");
    } else {
        // Expand sidebar
        document.querySelector(".side-bar").classList.remove("collapse");
    }
});

// Side Bar collapse 
function sideBar() {
    const sidebar = document.querySelector(".sb-collapse-button");
    sidebar.addEventListener("click", function(event) {
        document.querySelector(".side-bar").classList.add("collapse")
    })
    const expandButton = document.querySelector(".sb-expand-button");
    expandButton.addEventListener("click", function(event) {
        document.querySelector(".side-bar").classList.remove("collapse")
})
}
// Header dropdown for notification and profile dropdown
function navBarDropdown() {
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
}

// Side Bar dropdown
function sideBarItemsDropdown() {
    const sideBarItems = document.querySelectorAll(".sidebar-item")

        sideBarItems.forEach(item => {
            item.addEventListener("click", function(event) {
                if (item.querySelector("div").classList.contains("hidden")) {
                    item.querySelector("div").classList.remove("hidden")
                } else {
                    item.querySelector("div").classList.add("hidden")
            }
            }) 
    })
}

sideBar()
navBarDropdown()
sideBarItemsDropdown()
