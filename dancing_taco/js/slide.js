// section1 - carousel
// jQuery bxSlide.js Plug-in

// 문서가 준비되면;
$(function () {

    $('.slider').bxSlider({

        ////////////////////////////////////////////////////////

        // mode: "horizontal"(기본값), "fade", "vertical"
        //mode: "fade",
        // speed: 500(기본값), 밀리초
        //speed: 1000,
        // slideMargin: 0(기본값) -> 이미지 사이의 여백 지정
        // slideMargin: 0
        // https://gsgd.co.uk/sandbox/jquery/easing/ 
        // easing: null

        ////////////////////////////////////////////////////////

        // pager: true(기본값) - pagination, indicator라고 부른다.
        //pager: true,
        // pagerType: 'full'(기본값), 'short'
        //pagerType: 'short',
        // pagerShortSeparator: '/'(기본값)
        //pagerShortSeparator: ' | ',

        ////////////////////////////////////////////////////////

        // controls: true (기본값) -> next/prev 버튼
        //controls: false, 
        // play/stop 버튼 표시
        autoControls: false,

        ////////////////////////////////////////////////////////

        // auto: false(기본값), true이면 자동 전환
        auto: true,
        // 클릭시 자동 슬라이드 정지
        //stopAutoOnClick: false(기본값)
        //stopAutoOnClick: true,
        // pause: 4000 (기본값) -> 일시정지 시간
        //pause: 1000,
        // autoStart: true(기본값) -> 자동 슬라이드
        //autoStart: true,
        // autoDirection: 'next'(기본값) -> 슬라이드 방향
        // next이면 오른쪽에서 왼쪽 방향
        // prev이면 왼쪽에서 오른쪽 방향
        //autoDirection: 'prev',
        // autoHover: false(기본값), true이면 슬라이드에 호버시 일시정지
        //autoHover: true,
        // autoDelay: 0(기본값) -> 자동 슬라이드 시작 시 지연 시간
        //autoDelay: 4000
        // 슬라이드 크기(단, px 단위 생략)
        // slideWidth: 1903
    });

}); // document.readay()
