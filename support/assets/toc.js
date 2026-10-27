// 목차에서 지금 읽고 있는 섹션을 표시한다 (넓은 화면에서만 목차가 보인다)
(function () {
  var links = [].slice.call(document.querySelectorAll('.toc a'));
  if (!links.length) return;
  var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var ticking = false, clicked = -1;
  links.forEach(function (a, i) { a.addEventListener('click', function () { clicked = i; setTimeout(onScroll, 50); }); });
  function update() {
    ticking = false;
    var line = 120, current = 0;
    sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= line) current = i; });
    // 문서 끝에서는 뒤쪽 섹션이 위로 올라오지 못한다: 방금 누른 항목이 화면에 있으면 그것을, 아니면 마지막 항목을 표시한다
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      var c = sections[clicked];
      var top = c ? c.getBoundingClientRect().top : -1;
      current = top >= 0 && top < window.innerHeight ? clicked : sections.length - 1;
    }
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
