const div = document.querySelector('div');

div.addEventListener('click', (ev) => {
  // 화면 기준의 좌표를 제공
  console.log(ev.clientX, ev.clientY);
  // 요소의 기준으로 좌표를 제공
  console.log(ev.offsetX, ev.offsetY);
  // 스크롤이 적용된 좌표를 제공
  console.log(ev.pageX, ev.pageY);
});