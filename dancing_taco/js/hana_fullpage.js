// Section Common Layout
// jQuery fullpage.js Plug-in

// document).ready 생략 가능
// $(document).ready(function() {
$(function(){
    $('#wrap').fullpage({
        //menu: '#hana_nav',
        //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        
        // navigation: false(기본값) -> 오른쪽에 있는 인디케이터
        navigation: true,
        navigationTooltips: ['Home', 'Best Tour', 'Favorite', 'Culture'],
        //showActiveTooltip: true
    });
});