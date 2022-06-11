const articleList = document.querySelector('#article');

// 이벤트 위임 : 이벤트 버블링의 상위 요소로 이벤트가 전파되는 특성을 이용해 이벤트를 제어.
// 동적으로 추가되는 요소나 많은 자식 요소들의 이벤트를 효과적으로 다룰 수 있다.
articleList.addEventListener('click', (ev) => {
  console.log(ev.target.id);
});