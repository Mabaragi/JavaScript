# AJAX


### AJAX
AJAX란?
- (Asynchronous JavaScript And XML) 비동기식 JavaScript와 XML
- 비동기 통신

AJAX의 특징
- 페이지 전체를 새로고침(reload) 하지 않고서도 수행되는 비동기성
- 서버 응답에 따라 전체 페이지가 아닌 일부만을 업데이트 할 수있음
- 좋아요 누를때 새로고침이 되지 않는 기능 등
- HTML의 form 으로 요청을 보내면 새로고침이됨


### 비동기(Async) 적용하기

XHR
- XMLHttpRequest 이름은 XML이지만 Json도 사용 가능
- AJAX 요청을 생성하는 JavaScript API

### 팔로우를 어떻게 구현할까?
보통의 경우
1. 팔로우 버튼 클릭
2. form을 통해서 POST 요청
3. 팔로우에 대한 기능을 수행(db 영향)
4. 프로필 페이지를 redirect

여기서 프로필 페이지를 redirect 하면 새로고침하므로 UX, 성능적으로 안좋음. 유저가 원하는건 버튼을 눌렀을때 바뀌는것만 바뀌면 됨

AJAX
1. 팔로우 버튼 클릭
2. form을 통해서 POST 요청
3. 팔로우에 대한 기능을 수행(db영향)
4. 적절한 페이지 보여줌. 팔로우/언팔로우 토글, 팔로워 숫자, 팔로잉 숫자 등

