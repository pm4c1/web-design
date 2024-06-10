window.onload = function () {
    let currentIndex = 0; // 현재 이미지를 말함
    const slider = document.querySelectorAll(".slider"); // 모든 이미지를 변수에 저장함
    slider.forEach(img => img.style.opacity = "0"); // 모든 이미지를 투명하게 만듬
    slider[0].style.opacity = "1"; // 첫번째 이미지만 보이게 함

    setInterval(() => { // 3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % slider.length; // 1 2 0 1 2 순으로 반복

        slider[currentIndex].style.opacity = "0"; // 첫번째 이미지를 서서히 사라지게함
        slider[nextIndex].style.opacity = "1"; // 두번째 이미지만 보이게 함

        slider.forEach(img => img.style.transition = "all 1s"); // 이미지에 애니메이션 추가

        currentIndex = nextIndex; // 두번째 IndexValue를 현재 IndexValue에 저장

    }, 3000);
}