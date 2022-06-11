const form = document.querySelector('#form-id');
const div = document.querySelector('#div-id');
const p = document.querySelector('#p-id');

// 버블링 : 해당 요소부터 부모 요소로 올라가며 차례대로 이벤트가 전파되는 방식. 대부분의 이벤트가 기본 동작으로 갖는 방식
[form, div, p].forEach(target => {
  target.addEventListener('click', () => {
    alert(target);
  })
});