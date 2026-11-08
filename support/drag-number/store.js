// 드래그 넘버 스토어 주소. 여기 한 곳만 고치면 첫 화면과 모든 언어의 고객 지원 페이지 버튼이 함께 바뀐다.
// 빈 문자열이면 버튼에 '출시 예정'이 겹쳐 보이고, 누르면 안내 창이 뜬다.
window.APP_STORE_LINKS = window.APP_STORE_LINKS || {};
window.APP_STORE_LINKS["drag-number"] = {
  appStore: "",    // 예: "https://apps.apple.com/app/id0000000000"
  googlePlay: ""   // 예: "https://play.google.com/store/apps/details?id=패키지명"
};
window.STORE_APP = "drag-number";
