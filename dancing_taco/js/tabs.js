$(() => {
    // 요소 찾기
    const btn1 = document.querySelectorAll('#tabs li').item(0);
    const btn2 = document.querySelectorAll('#tabs li').item(1);
    const btn3 = document.querySelectorAll('#tabs li').item(2);
    const btn4 = document.querySelectorAll('#tabs li').item(3);

    const cont1 = document.querySelector('#tab1');
    const cont2 = document.querySelector('#tab2');
    const cont3 = document.querySelector('#tab3');
    const cont4 = document.querySelector('#tab4');

    btn1.onclick = function () {
        resetF();
        resetC();
        btn1.classList.add('text');
        cont1.classList.add('on');
    }


    btn2.onclick = function () {
        resetF();
        resetC();
        btn2.classList.add('text');
        cont2.classList.add('on');
    }

    btn3.onclick = function () {
        resetF();
        resetC();
        btn3.classList.add('text');
        cont3.classList.add('on');
    }

    btn4.onclick = function () {
        resetF();
        resetC();
        btn4.classList.add('text');
        cont4.classList.add('on');
    }

    function resetF() {
        cont1.classList.remove('on');
        cont2.classList.remove('on');
        cont3.classList.remove('on');
        cont4.classList.remove('on');
    }
    function resetC() {
        btn1.classList.remove('text');
        btn2.classList.remove('text');
        btn3.classList.remove('text');
        btn4.classList.remove('text');
    }
}); // ready end
