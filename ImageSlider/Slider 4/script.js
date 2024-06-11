window.onload = function () {
    let currentIndex = 0; // 현재 이미지
    const slider = document.querySelectorAll(".slider"); // 각각의 이미지들
    slider.forEach(el => el.style.opacity = "0"); // 모든  이미지 투명도 0
    slider[0].style.opacity = 1; // 첫번째 이미지는 투명도 1

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";
        slider.forEach(el => el.style.transition = "all 1s");

        currentIndex = nextIndex;
    }, 3000);
}