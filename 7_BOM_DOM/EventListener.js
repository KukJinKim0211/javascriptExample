function clickEvent(ev) {
  alert('EVENT 1');
}

document.querySelector('#h2_02').onclick = (event) => {
  alert('EVENT 2');
}

// 위의 두 방식과는 다르게 한 이벤트 타입에 여러개의 리스너를 등록 가능. 버블링/캡처링 방식 제어 가능
document.querySelector('#h2_03').addEventListener('click', (ev) => {
  alert('EVENT 3');
}, true); // 캡처링 사용