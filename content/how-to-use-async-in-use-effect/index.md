---
emoji: 🧐
title: useEffect 훅에서 async 를 사용하는 방법
date: '2022-08-09 13:00:00'
author: 지걸
tags: react
categories: react
---

# useEffect 훅 안에서 async 를 사용하는 방법
`useEffect` 훅 안에서 `async` 를 사용하는 방법은 두가지가 있습니다.
첫 번째는 익명함수를 사용하는 방법이고 두 번째는 Promise 를 해결하여 async 를 쓰지 않아도 되게끔 처리하는 것입니다.  

## 1. 익명함수를 사용하기
아래와 같이 async 로 감싼 익명함수를 생성해 await 구문을 사용할 수 있습니다.
```javascript
useEffect(() => {
  (async () => {
    await axios.post('blabla.com');
  })();
}, []);
```

## 2. Promise 해결
이 방법은 더 일반적인 방법으로 Promise then() 구문을 사용하여 해결할 수 있습니다.
```javascript
useEffect(() => {
  axios.post('blabla.com').then(response => response);  
}, []);
```