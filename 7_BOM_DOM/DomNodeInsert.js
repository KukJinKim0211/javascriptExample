// createElement : 노드 요소를 생성
const divEle = document.createElement('div'); // div 태그 생성
const liEle = document.createElement('li');   // li 태그 생성
const liEle2 = document.createElement('li');  // li 태그 생성
const liEle3 = document.createElement('li');
const liEle4 = document.createElement('li');

// Dom 요소 접근
const olEle = document.getElementById("ol-id");
const firstLiEle = document.getElementById("first-li-id");

// 속성 할당
liEle.className = 'li-class-name';
liEle.id = 'li-id';
liEle.innerHTML = "<strong>텍스트</strong>";
liEle2.innerHTML = "insertBefore요소";
liEle3.innerHTML = "append요소";
liEle4.innerHTML = "prepend요소";

// appendChild : 부모 노드의 마지막에 자식 노드를 추가
olEle.appendChild(liEle);
olEle.appendChild(firstLiEle);

// insertBefore : 부모의 특정 노드 앞에 노드를 삽입
olEle.insertBefore(liEle2, firstLiEle);

// append : 요소 내부의 마지막으로 이동
olEle.append(liEle3);
olEle.append('append 문자열텍스트');

// prepend : 요소 내부의 가장 앞으로 이동
olEle.prepend(liEle4);
olEle.prepend('prepend 문자열텍스트');

// after : 요소 뒤로 이동
olEle.after('ol 의 after');

// before : 요소 앞으로 이동
olEle.before('ol 의 before');

/*
  append vs appendchild 
    append 에서는 문자열을 인자로 넘길 수 있지만, appendChild는 문자열을 인자로 넘길 수 없다
    append를 권장하고 있지만 append는 IE 브라우저에서 지원하지 않는다.
*/