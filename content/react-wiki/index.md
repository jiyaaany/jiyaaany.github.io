---
emoji: 💬
title: React 백과사전 📚
date: '2022-12-13 22:00:00'
author: 지걸
tags: react
categories: react
---

# Context
- 전역 상태를 관리하기 위해 사용  
여러 컴포넌트에 전달해줘야 하는 `props`의 경우(ex. 테마, 언어) `context`를 이용하면 단계마다 명시적으로 `props`를 넘겨주지
않아도 여러 컴포넌트가 이 값을 공유할 수 있다.

## Redux와의 차이
1. 미들웨어 (Middleware)  
reducer에서 처리되기 전, 원하는 작업을 수행할 수 있다.  
ex. 특정 액션을 무시하거나 액션이 발생했을 때 로그를 쌓는 등
2. 유용한 함수와 훅  
`useSelector`, `useDispatch`, `useStore`와 같은 훅을 통해 손쉽게 상태를 조회하거나 액션을 디스패치할 수 있다.
3. 하나의 커다란 상태  
redux는 모든 글로벌 상태를 하나의 객체에 넣어 사용하는 것이 필수이다.