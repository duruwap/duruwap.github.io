// 앱 목록·앱 페이지: 한 파일에 언어별 문구(window.I18N)를 둔다. 기본은 한국어, 오른쪽 위 언어 버튼이나 ?lang= 으로만 바뀐다.
// 페이지에 없는 언어는 영어로 연다. 링크에 data-langs="ko en"이 있으면 그 밖의 언어는 영어 주소로 잇는다(예: 드래그 넘버 고객 지원의 zh·ja).
// 링크에 data-files="zh=cn ja=jp"가 있으면 {lang} 자리에 언어 코드 대신 그 파일 이름을 넣는다(예: 드래그 넘버 개인정보 처리방침).
(function () {
  var T = window.I18N;
  if (!T) return;
  function pick() {
    var lang = (location.search.match(/[?&]lang=(ko|en|zh|ja)\b/) || [])[1] || 'ko';
    return T[lang] ? lang : 'en';
  }
  function apply(lang) {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    [].forEach.call(document.querySelectorAll('[data-t]'), function (el) { el.textContent = t[el.getAttribute('data-t')]; });
    [].forEach.call(document.querySelectorAll('[data-href]'), function (el) {
      var langs = el.getAttribute('data-langs');
      var l = !langs || langs.split(' ').indexOf(lang) >= 0 ? lang : 'en';
      var files = el.getAttribute('data-files');
      var m = files && files.match(new RegExp('(?:^| )' + l + '=(\\S+)'));
      el.href = el.getAttribute('data-href').replace('{lang}', m ? m[1] : l);
    });
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (el) {
      if (el.getAttribute('data-lang') === lang) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    });
    try { history.replaceState(null, '', '?lang=' + lang); } catch (e) {}
  }
  [].forEach.call(document.querySelectorAll('[data-lang]'), function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); apply(el.getAttribute('data-lang')); });
  });
  apply(pick());
})();
