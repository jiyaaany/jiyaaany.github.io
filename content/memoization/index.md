---
emoji: ๐
title: Memoization
date: '2021-12-29 17:23:00'
author: ์ง๊ฑธ
tags: react
categories: TIL
---
# ์์ํ๋ฉฐ
React๋ฅผ ์ฃผ์ธ์ด๋ก ์ฌ์ฉํ๊ณ ์ ํ๋๋ฐ ์ด์ผ๊ธฐ๋ฅผ ๋๋๋ค๋ณด๋ Memoization์ ๊ฐ๋์ ๋ํด ์ ๋ชจ๋ฅด๊ณ  ์๋ ๊ฒ ๊ฐ์ ์ ๋ฆฌํด๋ด๋๋ค.

# Memoization
- ์ด์  ์ฐ์ฐ์ ๊ฒฐ๊ณผ๊ฐ์ **์ ์ฅ**ํด๋๊ณ  ๋์ผํ ์๋ ฅ์ด ๋ค์ด์ค๋ฉด ์ฌํ์ฉํ๋ ๋ฐฉ๋ฒ
- Memoized ๋ ๋ด์ฉ์ ์ฌ์ฌ์ฉํ  ์, ๊ฐ์ DOM์์ ๋ฐ๋ ๋ถ๋ถ์ ํ์ธํ์ง ์์ ์ฑ๋ฅ์ด ํฅ์๋จ.

## 1. Redux
Recoil์ด ์๋ฌด๋ฆฌ ํธํ๊ธด ํด๋ .. Redux ๊ณต๋ถ๋ ๊พธ์คํ ํด์ผ๊ฒ ๋ค ^^.

## 2. React.memo
์ปดํฌ๋ํธ๋ฅผ `React.memo()`๋ก ๋ํ ์, ๋ ๋๋ง ๊ฒฐ๊ณผ๋ฅผ Memoizingํ๊ณ  ๋ค์ ๋ ๋๋ง์์ Props๊ฐ ์ผ์นํ๋ค๋ฉด Memoizing๋ ๋ด์ฉ์ ์ฌ์ฌ์ฉํฉ๋๋ค.

## 3. useMemo
`React.memo`์ ํก์ฌํ๋ฐ `useMemo`๋ ํจ์์ ๊ฒฐ๊ณผ ๊ฐ์ Memoizingํ์ฌ ๋ถํ์ํ ์ฐ์ฐ์ ์ค์๋๋ค.  
(ํจ์๋ฅผ `useMemo`๋ก ๋ํ)

```javascript
const computeExpensiveValue(a, b) = ๋น์ผ ๊ฐ ๊ณ์ฐ;
const memoizedValue = useMemo(() => computedExpensiveValue(a, b), [a, b]);
```

`useMemo`์ [dependency]๊ฐ ๋ณ๊ฒฝ๋์์ ๋๋ง ๋ค์ ๊ณ์ฐํจ.

## 4. useCallback
`useMemo`๋ ํน์  ๊ฒฐ๊ณผ ๊ฐ์ ์ฌ์ฌ์ฉํ๋ ๋ฐ๋ฉด, `useCallback`์ ํน์  ํจ์๋ฅผ ์๋ก ๋ง๋ค์ง ์๊ณ  ์ฌ์ฌ์ฉํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํฉ๋๋ค.
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
> ๋ฉ๋ชจ์ ์ด์์ฉ ๋ฉ๋ชจ๋ฆฌ๊ฐ ์ถ๊ฐ๋ก ํ์ํ๋ฏ๋ก, ๋ถํ์ํ Props ๋น๊ต๋ฅผ ์ค์ด๊ธฐ ์ํด์ `useCallback`, `useMemo`, `React.memo`๋ ์ปดํฌ๋ํธ์ ์ฑ๋ฅ์ ์ค์ ๋ก ๊ฐ์ ํ  ์ ์๋ ์ํฉ์์๋ง ์ฌ์ฉ
