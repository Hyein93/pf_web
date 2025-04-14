const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    // 한 번에 하나만 열리게 하고 싶다면 아래 주석 해제!
    // document.querySelectorAll('.accordion-item').forEach(i => {
    //   if (i !== item) i.classList.remove('active');
    // });

    item.classList.toggle('active');
  });
});
