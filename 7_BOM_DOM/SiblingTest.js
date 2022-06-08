// Sibling : 같은 Parent를 가진 노드의 관계
/*
  parentNode : 부모 노드 반환
  childNodes : 요소의 자식 노드를 반환. 반환형은 NodeList
  firstChild : 자식 노드 중 첫 번째 자식을 반환. 자식이 없을 경우 Null을 반환
  lastChild  : 자식 노드 중 두 번째 자식을 반환. 자식이 없을 경우 Null을 반환
  nextSibling : 부모의 childNodes 목록 중 자신 다음에 있는 노드를 반환. 없을 경우 null을 반환
  previousSibling : 부모의 childNodes 목록 중 자신 이전에 있는 노드를 반환. 없을 경우 null을 반환
*/

const div = document.querySelector("#div3");
// 첫번째 자식 노드 선택
const divChild = div.children[0];
console.log(div);
// 첫번째 자식 이후의 노드를 반환. 공백 노드 제거를 위해 2번 호출
console.log(divChild.nextSibling.nextSibling);