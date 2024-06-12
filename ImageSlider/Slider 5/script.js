window.onload = function () {
    let currentIndex = 0; // 현재 이미지
    const sliderWrap = document.querySelector(".sliderWrap"); // 전체 이미지 설정
    const slider = document.querySelectorAll(".slider"); // 각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true); // 첫번째 이미지 저장
    sliderWrap.appendChild(sliderClone); // 이미지 마지막 영역에 추가

    setInterval(() => { // 3초에 한번씩 실행
        currentIndex++; // 현재 이미지를 1씩 증가
        sliderWrap.style.transition = "all 0.6s"; // 애니메이션 효과 추가
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%"; // 왼쪽으로 100%씩 이동

        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s"; // 애니메이션 효과 정지
                sliderWrap.style.marginLeft = "0"; // 이미지 위치를 초기화
                currentIndex = 0; // 현재 이미지를 초기화
            }, 700);
        }

    }, 3000);
}