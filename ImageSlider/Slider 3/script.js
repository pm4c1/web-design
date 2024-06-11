window.onload = function () {
    let currentIndex = 0; //현재 이미지 설정
    const sliderWrap = document.querySelector(".sliderWrap"); //전체 이미지
    const slider = document.querySelectorAll(".slider"); //각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true); //첫번째 이미지를 저장
    sliderWrap.appendChild(sliderClone);

    setInterval(() => { //3초에 한번씩 실행
        currentIndex++; //현재 이미지 1씩 증가
        sliderWrap.style.transition = "all 0.6s"; //애니메이션 추가
        sliderWrap.style.marginTop = -currentIndex * 300 + "px"; //이미지 이동

        if (currentIndex == slider.length) { //마지막 이미지
            setTimeout(() => {
                sliderWrap.style.transition = "0s"; //애니메이션 정지ss
                sliderWrap.style.marginTop = "0"; //이미지 위치 초기화
                currentIndex = 0; //현재 이미지 초기화
            }, 700);
        }
    }, 3000);
}