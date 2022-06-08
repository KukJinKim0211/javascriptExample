// DocumentFragment
// DOM 에서 사용할 문서 버퍼 노드를 저장하며 경량화된 문서를 정의.
// 문서와 성능에 영향을 주지 않음
// 매번 문서의 DOM 요소를 변경할 경우, 성능에 영향이 있을 수 있기에 버퍼를 만들어 한번에 업데이트
// innerHTML로 HTML 노드를 삽입하는것이 불가 => appendChilde()와 같은 메서드를 이용
const fragment = document.createDocumentFragment();
const ul = document.querySelector('#ullist');
console.log(ul);
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode("Hello"));
  fragment.appendChild(li);
}
ul.appendChild(fragment);