---
emoji: 📚
title: Memoization
date: '2021-12-29 17:23:00'
author: 지걸
tags: react
categories: TIL
---
# 시작하며
React를 주언어로 사용하고자 하는데 이야기를 나누다보니 Memoization의 개념에 대해 잘 모르고 있는 것 같아 정리해봅니다.

# Memoization
- 이전 연산의 결과값을 **저장**해두고 동일한 입력이 들어오면 재활용하는 방법
- Memoized 된 내용을 재사용할 시, 가상 DOM에서 바뀐 부분을 확인하지 않아 성능이 향상됨.

## 1. Redux
Recoil이 아무리 편하긴 해도 .. Redux 공부도 꾸준히 해야겠다 ^^.

## 2. React.memo
컴포넌트를 `React.memo()`로 래핑 시, 렌더링 결과를 Memoizing하고 다음 렌더링에서 Props가 일치한다면 Memoizing된 내용을 재사용합니다.

## 3. useMemo
`React.memo`와 흡사한데 `useMemo`는 함수의 결과 값을 Memoizing하여 불필요한 연산을 줄입니다.  
(함수를 `useMemo`로 래핑)

```javascript
const computeExpensiveValue(a, b) = 비싼 값 계산;
const memoizedValue = useMemo(() => computedExpensiveValue(a, b), [a, b]);
```

`useMemo`의 [dependency]가 변경되었을 때만 다시 계산함.

## 4. useCallback
`useMemo`는 특정 결과 값을 재사용하는 반면, `useCallback`은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다.
```javascript
const App = () => {
  const onToggle = useCallback(id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, [users]);
  
  return <CreateUser onToggle={onToggle} />;
}
```
> 메모제이션용 메모리가 추가로 필요하므로, 불필요한 Props 비교를 줄이기 위해서 `useCallback`, `useMemo`, `React.memo`는 컴포넌트의 성능을 실제로 개선할 수 있는 상황에서만 사용
