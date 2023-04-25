# 비동기 처리
- 동기와 비동기
- JavaScript의 비동기 처리
- Axios 라이브러리
- Callback과 Promise
---


### 동기와 비동기

동기식(Syncronous)
- 동시에 처리 한다는 뜻
- 요청과 응답이 순서대로 이루어집니다.
- 예를 들어 커피를 주문한 후애 나올때까지 앞에서 기다려야하면 동기식 이라고 할 수 있습니다.
- 동기식에서 Request를 보내면 Response를 기다려야합니다. Request를 보낸 Tread는 Response를 받기 전 까지는 아무것도 하지 못하는 상태가 되는데, 이를 Block이라고 합니다.
- 성능은 비동기식에 비해 떨어 질 수 밖에 없지만 응답값의 순서를 보장해줍니다. 성공 및 실패 처리 결과에 대해 변경되는 사항이 있는 경우에 동기식이 중요할 수 있습니다.
```

```


비동기식(Asynchronous)
- 동시에 처리하지 않는 다는 뜻
- 요청에 따른 응답이 순서대로 이루어 지지 않습니다. Request를 보내더라도 언제 Request를 받아도 상관이 없습니다.
- 동기식과 달리 Request를 보낸 Thread가 다른 일을 할 수 있습니다. 이를  Non Block 이라고 합니다.
- 성능적으로 동기식에 비해 우수합니다. 하지만 순서나 성공및 실패처리가 중요한 서비스에서는 부적합할 수 있습니다.

---
### JavaScript의 비동기 처리
Single Thread 언어, JavaScript
- JS는 한번에 하나의 일만 수행 할 수 있는 Single Thread 언어로 동시에 여러 작업을 처리 할 수 없음
- Thred: 작업을 처리 할 떄 실제로 작업을 수행하는 주체. multi-thread는 업무를 수행 할 수 있는 주체가 여러개라는 의미
- 즉 JavaScript는 하나의 작업을 요청한 순서대로 처리 할 수 밖에 없음. 비동기 처리를 어떻게 할까?

비동기 처리 동작 방식
1. 모든 작업은 Call Stack 으로 들어 간 후 처리 된다.
2. 오래 걸리는 작업이 Call Stack으로 들어오면 Web API로 보내 별도로 처리하도록 한다.
3. Web API에서 처리가 끝난 작업들은 곧바로 Call Stack으로 들어가지 못하고 Task Queue에 순서대로 들어간다.
4. Event Loop가 Call Stack이 비어 있는 것을 계속 체크하고 Call Stack이 빈다면 Task Queue에서 가장 오래된 (가장 앞에있는) 작업을 Call Stack으로 보낸다.
```
console.log('Hi')

setTimeout(function () {
  console.log('SSAFY1')
}, 3000)

setTimeout(function () {
  console.log('SSAFY2')
}, 2000)

console.log('Bye')
// Hi
// Bye
// SSAFY2
// SSAFY1
```

정리
- JavaScript는 Single Thread의 언어로 동기적 처리를 하지만, 브라우저 환경에서는 Web API 에서 처리된 작업이 지속적으로 Task Queue를 거쳐 Event Loop에 의해 Call Stack에 들어와 순차적으로 실행됨으로 써 비동기 작업이 가능한 환경이 됨

---
### Axios 기본 구조
Axios 사용해보기
- CDN: `https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`
- get, post 등 여러 method 사용가능.
```
axios.get('URL')
  .then(성공하면 수행할 콜백함수)
  .catch(실패하면 수행할 콜백함수)
```
- Axios로 보내는 요청은 비동기

--- 
### 콜백 함수
콜백 지옥
- 콜백 함수는 비동기 작업을 순차적으로 동작 할 수 있게 함
- 비동기 처리를 위한 콜백을 작성할 때 마주하는 문제를 콜백 지옥 이라고 하며 그때 코드의 형태가 피라미드와 같다고 해서 Pyramid of doom 이라고 함

프로미스(promise)
- 콜백지옥 문제를 해결하기 위해 등장한 비동기 처리를 위한 객체
- 작업이 끝나면 실행 시켜줄것이라는 약속
- 비동기 작업의 완료 또는 실패를 나타내는 객체
- Axios 라이브러리가 Promise 기반의 클라이언트
- 성공에대한 약속then(), 실패에 대한 약속 catch()

then & catch
- then(callback) 요청한 작업이 성공하면 callback 싱행
```
axios.get('URL') // Promise 객체 return
  .then(성공하면 수행할 1번 콜백함수)
  .then(이어서 성공하면 수행할 2번 콜백함수)
  .then(이어서 성공하면 수행할 3번 콜백함수)
  .catch(하나라도 실패하면 수행할 콜백함수)
```