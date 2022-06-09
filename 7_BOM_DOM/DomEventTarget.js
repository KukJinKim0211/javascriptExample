const list = document.getElementById("list");

list.addEventListener('click', (ev) => {
  // target : 이벤트가 처음 발생했던 대상 DOM 요소의 참조
  console.log(ev.target);
  // currentTarget : 발생한 이벤트가 등록된 DOM 요소의 참조
  console.log(ev.currentTarget);
});
