let toggle = false;
const mobileMenu = document.getElementById("mobileMenu");
const menuSpans = document.querySelectorAll('.gnb_toggle_btn span');
const menuList = document.querySelectorAll('.m_menu_list li');

// 메뉴 토글 버튼
document.getElementById("toggleBtn").onclick = (e) => {
    toggle = !toggle;
    e.preventDefault();

    if (toggle) {
        mobileMenu.classList.add('open');
        menuSpans.forEach(span => {
            span.classList.add('selected');
        });
        document.body.classList.add('none_scroll');
    } else {
        mobileMenu.classList.remove('open');
        menuSpans.forEach(span => {
            span.classList.remove('selected');
        });
        document.body.classList.remove('none_scroll');
    }
}

menuList.forEach((menu) => {
    menu.onclick = () => {
        mobileMenu.classList.remove('open');
        toggle = false;
        menuSpans.forEach((span) => {
            span.classList.remove('selected');
            document.body.classList.remove('none_scroll');
        })
    }
})