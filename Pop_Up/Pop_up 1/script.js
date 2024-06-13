window.onload = function () {
    document.querySelector(".popup-btn").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".popup-view").style.display = "none";
    });

}