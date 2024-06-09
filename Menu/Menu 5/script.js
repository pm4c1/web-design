window.onload = function () {
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function (nav) {
        nav.querySelector("ul").style.display = "block";
        nav.querySelector("ul").style.height = "0";
        nav.querySelector("ul").style.overflow = "hidden";
        nav.querySelector("ul").style.transition = "height 400ms";
    });

    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseover", function () {
            this.querySelector(".submenu").style.height = "155px";
        });
    });
    navList.forEach(function (navItem) {
        navItem.addEventListener("mouseout", function () {
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}