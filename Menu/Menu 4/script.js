window.onload = function () {
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(navItem => {
        navItem.addEventListener("mouseover", function () {
            this.querySelector(".submenu").style.height = "155px";
        });
    });
    navList.forEach(navItem => {
        navItem.addEventListener("mouseout", function () {
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}
