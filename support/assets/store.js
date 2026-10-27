// 지원 페이지의 스토어 버튼: 서비스 폴더의 store.js(window.STORE_LINKS)에 주소가 있는 버튼만 보인다.
// 주소를 넣기 전에 모양을 보려면 페이지 주소 뒤에 ?store=preview 를 붙인다.
(function () {
  var links = window.STORE_LINKS || {};
  var preview = /[?&]store=preview\b/.test(location.search);
  var box = document.querySelector('.store-links');
  if (!box) return;
  var shown = 0;
  [].forEach.call(box.querySelectorAll('[data-store]'), function (a) {
    var url = links[a.getAttribute('data-store')];
    if (!url && !preview) return;
    if (url) a.href = url;
    a.hidden = false;
    shown++;
  });
  box.hidden = shown === 0;
})();
