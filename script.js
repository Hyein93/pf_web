const navItems = document.querySelectorAll('.nav-item');
const sectionDesc = document.getElementById('section-desc');

const descriptions = {
  home: "Start here to get a glimpse of my style, vibe, and what I create.",
  about: "Get to know more about who I am and how I work.",
  archive: "A collection of past projects and explorations.",
  project: "Dive into my latest creations and proudest works.",
  sandbox: "Experimental zone where ideas play and evolve.",
  log: "A peek into my thoughts, process, and journey.",
  ping: "Feel free to reach out or just say hi!"
};

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // 스크롤 이동
    const tab = item.getAttribute('data-tab');
    const targetSection = document.getElementById(tab);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 설명 텍스트 바꾸기
    sectionDesc.textContent = descriptions[tab];

    // active 클래스 설정
    navItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});