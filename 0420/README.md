# DOM

### Browser APIS
- 웹 브라우저에 내장된 API. 현재 컴퓨터 환경에 관한 데이터를 제공하거나 오디오를 재생하는등 여러가지 유용하고 복잡한 일을 수행할수있게함
- DOM
- geolocation API, WebGL 등


### DOM 문서 객체 모델 (Document Object Model)
- 문서의 구조화 된 표현을 제공
- Java Script는 DOM을 통해 HTML, CSS를 동적으로 수정

### DOM의 기본 구조

DOM Tree
- DOM 은 문서 논리를 트리로 표현 Document, \<html>, \<head>, \<body>, \<title>, \<h1> ...
- DOM 에서 모든 것은 NODE
- 즉 HTML 요소, 속성, 텍스트 모든것이 노드
- 각 노드는 부모, 자식관계를 형성하고 상속 개념도 동일하게 적용 됨

window object
- 돔을 표현하는 창. 웹 브라우저와도 같음.
- 가장 최상의 객체(작성시 생략 가능)

document object
- 브라우저가 불러온 웹페이지
- 페이지 컨텐츠의 진입점
- window의 속성


