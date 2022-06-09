const divEle = document.getElementById('div-id');
const pEle = document.getElementById('p-id');
const aEle = document.getElementById('a-id');

// preventDefault : 현재 이벤트의 기본 동작을 중단.
// stopPropagation : 기본 동작을 중단하지는 않지만 부모 컨텍스트로 이벤트가 전파되는것을 막는다
divEle.addEventListener('click', () => {
  console.log('div Click');
});

pEle.addEventListener('click', (ev) => {
  console.log('p Click');

  // p 클릭 이벤트 완료 후 상위 요소의 클릭 이벤트로 전달하지 않기 위해 사용
  ev.stopPropagation();
})

aEle.addEventListener('click', (ev) => {
  console.log('a Click');

  // 목적지 href로 가는 이벤트를 차단
  ev.preventDefault();
})