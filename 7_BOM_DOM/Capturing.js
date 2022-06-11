const form = document.querySelector('#form-id');
const div = document.querySelector('#div-id');
const p = document.querySelector('#p-id');

// 캡처링 : 요소에 이벤트 발생 시 가장 상위의 부모요소부터 해동 요소까지 내려가며 이벤트가 전파. addEventListener의 세번째 옵션을 통해 설정
[form, div, p].forEach(target => {
  target.addEventListener('click', () => {
    alert(target);
  }, true)  // 캡처링 설정
})