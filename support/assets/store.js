// 스토어 버튼. 주소는 서비스 폴더의 store.js(window.APP_STORE_LINKS)에 한 번만 적는다.
// 주소가 있으면 스토어로 이동하고, 비어 있으면 '출시 예정' 표시를 겹쳐 보여 주고 누르면 안내 창을 띄운다.
// .store-links에 data-app="omok"처럼 앱을 지정할 수 있다(첫 화면). 없으면 그 페이지의 앱(window.STORE_APP).
(function () {
  var ALL = window.APP_STORE_LINKS || {};
  var MSG = {
    ko: '아직 출시 전이에요. 곧 만나요!',
    en: 'Not available yet. Coming soon!',
    zh: '尚未上线，敬请期待！',
    ja: 'まだ公開前です。もうしばらくお待ちください！'
  };
  function lang() {
    var l = (document.documentElement.lang || 'en').slice(0, 2);
    return MSG[l] ? l : 'en';
  }
  [].forEach.call(document.querySelectorAll('.store-links'), function (box) {
    var links = ALL[box.getAttribute('data-app') || window.STORE_APP] || {};
    [].forEach.call(box.querySelectorAll('[data-store]'), function (a) {
      var url = links[a.getAttribute('data-store')];
      a.hidden = false;
      if (url) {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        return;
      }
      a.classList.add('is-soon');
      a.removeAttribute('href');
      a.setAttribute('role', 'button');
      a.tabIndex = 0;
      function soon(e) { e.preventDefault(); alert(MSG[lang()]); }
      a.addEventListener('click', soon);
      a.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') soon(e); });
    });
    box.hidden = false;
  });
})();
