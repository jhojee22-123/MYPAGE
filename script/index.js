const banner = new Swiper ('.top-banner-swiper',{
    slidesPerView:'auto', // 글자 크기에 맞게 너비 조절
    spaceBetween:60, //슬라이드와 다음 슬라이드 사이의 간격
    speed:10000, //속도
    loop:true, //무한반복
    autoplay:{delay: 0, //딜레이없이 움직임
        disableOnInteraction: false, //마우스 올려도 재생 유지
    },
    freeMode: true, //툭툭 끊기지 않고 부드럽게 이동
})

const