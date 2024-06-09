window.onload = function () {
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function () {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "block";
        });
        document.getElementById("main").classList.add("on");
    });
    navList.addEventListener("mouseout", function () {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "none";
        });
        document.getElementById("main").classList.remove("on");
    });
}
