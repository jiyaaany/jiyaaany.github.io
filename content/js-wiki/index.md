---
emoji: 💬
title: JS 백과사전 📚
date: '2022-12-16 06:00:00'
author: 지걸
tags: Javascript
categories: Javascript
---

# 함수 표현식 VS 함수 선언식
함수 선언식 (function declartion)은 별도의 할당 없이 함수만 정의된 형태
```javascript
function sum (a, b) {
  return a + b;
}
```

함수 표현식 (function Expression)은 정의된 함수를 변수에 할당하는 형태
```javascript
const sum = function (a, b) {
  return a + b;
}
```

이 둘의 주요 차이점은 호이스팅(hoisting)이다. 함수 선언식은 함수 전체가 호이스팅 되기 때문에
함수 선언 전에 함수를 사용할 수 있다. 반면 함수 표현식은 별도의 변수에 할당하는 형태라
변수의 선언부만 호이스팅하게 된다.  

# 실행 컨텍스트 (Execution Context)
자바스크립트 코드를 실행하기 위해 필요한 환경이 제공되는 범위
