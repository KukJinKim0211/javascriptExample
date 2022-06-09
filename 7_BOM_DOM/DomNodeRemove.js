const divEle = document.getElementById('div-removeChild');
const divEle2 = document.getElementById('div-remove');

setTimeout(() => {
  // removeChild : 부모 노드에서 removeChild 메서드를 호출해 제거
  divEle.parentNode.removeChild(divEle);  // 자식 노드 삭제
  // remove : 제거하고 싶은 노드에서 직접 메서드를 호출하여 사용
  divEle2.remove();

  /*
    remove vs removeChild
      remove : 제거하고 싶은 노드에서 바로 제거
      removeChild : 제거하고싶은 노드의 부모 노드에서 호출하여 제거
      remove는 IE에서 지원하지 않는다
  */
}, 1000);