---
emoji: ๐
title: FEConf 2021
date: '2021-12-29 12:48:00'
author: ์ง๊ฑธ
tags:
categories: TIL
---
# ์ปดํฌ๋ํธ, ๋ค์ ์๊ฐํ๊ธฐ
```
React ์ปดํฌ๋ํธ์ ์์กด์ฑ: ?  
React ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค๋ ค๋ฉด ?๊ฐ ํ์ํ๋ค.
```
1. ๊ธฐ๋ฅ์ Type ๋ถ๋ฅ: props, hooks
2. ํน์ง์ Feature ๋ถ๋ฅ: ์คํ์ผ, ๋ก์ง, ์ ์ญ์ํ, ๋ฆฌ๋ชจํธ ๋ฐ์ดํฐ ์คํค๋ง
> **๋ฆฌ๋ชจํธ ๋ฐ์ดํฐ ์คํค๋ง ?**  
> API ์๋ฒ์์ ๋ด๋ ค์ฃผ๋ ๋ฐ์ดํฐ์ ๋ชจ์

## ํจ๊ป ๋๊ธฐ (Co-locate)
๋น์ทํ ๊ด์ฌ์ฌ๋ผ๋ฉด ๊ฐ๊น์ด ๊ณณ ํจ๊ป ๋๊ธฐ  
![img.png](img.png)
```typescript
import React from 'react'

import styled from '@emotion/styled'

const Something: React.FC = () => {
  const { ... } = useHooksForSomething()
  
  return <Container>Hello, World</Container>
}

// ๋ก์ง(Custom Hooks)
function useHooksForSomething() {
  // ...
}

// ์คํ์ผ(CSS-in-JS)
const Container = styled.div`
  background-color: red;
`
```

id ๊ฐ๋ง Props๋ก ์ ๋ฌ๋ฐ์ ๋ค๋ฅธ ์ปดํฌ๋ํธ ๊ฐ์ ์์กด์ฑ ์ค์ด๊ธฐ
```typescript
import { IArticle } from '~/api'

interface Props {
  article: IArticle
}
const Something: React.ExoticComponent<Props> = (props) => {
  return (
    <div>
      <h1>{props.article.title}</h1>
    </div>
  )
}
```

```typescript
import { useArticle } from '~/store'

interface Props {
  articleId: string
}
const Something: React.ExoticComponent<Props> = (props) => {
  return (
    <div>
      <h1>{article.title}</h1>
    </div>
  )
}
```

## ๋ฐ์ดํฐ๋ฅผ ID ๊ธฐ๋ฐ์ผ๋ก ์ ๋ฆฌํ๊ธฐ
๋ฐ์ดํฐ ์ ๊ทํ(Nomalization)
```javascript
{
  entities: {
    articles: {
      '123': {
        id: '123',
        author: '1',
        title: 'blog post',
        comments: ['325']
      }
    }
  }
}
```
> ๋ฐ์ดํฐ ์ ๊ทํ๋ [normalizr](https://github.com/paularmstrong/normalizr) ํจํค์ง๋ฅผ ์ฌ์ฉํด ์ฝ๊ฒ ํ  ์ ์๋ค.

# ์ ๋๋ React๋ฅผ ์ฌ๋ํ๋๊ฐ

## ๋ฐํ์
์ํฌ์ข๋ | ํ๋ ์คํ

## ์ ๋๋ ๋ ์ฌ๋ํ๋๊ฐ
- ํด๋ฆฌ์ดํ ๋ฉํ ๋ชจ๋ธ, ์๊ณ  ๋จ๋จํ ์ฝ์ด
  - Learn Once, Write AnyWhere (ํ๋ฒ ๋ฐฐ์ฐ๋ฉด ์ฌ๋ฌ ํ๊ฒฝ์์ ์ฌ์ฉํ  ์ ์๋ค๋ ์๋ฏธ)
- ๊พธ์คํ ์ฑ์ฅํ๋ ๊ฑฐ๋ํ ์ปค๋ฎค๋ํฐ
- ๋์ ์ ์ธ ๊ณผ์ , ์ฐ์ํ ํด๊ฒฐ์ฑ
  - Fiber, Hooks, Suspense, ...

## React๋ UI ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์ด๋ค?

| ํ๋ก๊ทธ๋๋ฐ ์ธ์ด | ๋ฆฌ์กํธ |
|----------|----------|
|๊ฐ | React Element|
|ํจ์ | React Component|
|try-catch | Error Boundary|
|์ ์  ํ์ ์ฒดํฌ | prop-types|
|์์ง | Reconciler|
|์ด์๋ธ | ํธ์คํธ ํ๊ฒฝ|
> **Reconciler ?**  
> ๋ชจ๋  ๋ ๋๋ฌ์ ๊ณต์ ๋๋ ๋ด์ฉ์ผ๋ก React ์ฝ๋๋ฅผ ํด์ํ๊ณ  ์คํํ๋ ์ญํ ์ ํ๋ค.

## react VS react-dom
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```
react์ react-dom์ด ๋๋์ด์ ธ ์๋ ๊ฒ๋ react๋ ๋ชจ๋  ๋ ๋๋ฌ์ ๊ณต์ ๋๋ ๊ฒ๋ค์ ํฌํจํ๊ณ  ์๊ณ , react-dom์ ๋ธ๋ผ์ฐ์  ํ๊ฒฝ(DOM)์ ์ํ ๊ฒ๋ค์ด ํฌํจ๋์ด ์๋ค.


## ์ฐ๋ฆฌ๊ฐ ์์ฑํ๋ ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ์ด๋ป๊ฒ ๋์ํ๋๊ฐ?
![img_1.png](img_1.png)  
์ฐ๋ฆฌ๊ฐ ์์ฑํ๋ ์์ค์ฝ๋๋ V8์ด๋ผ๋ ์๋ฐ์คํฌ๋ฆฝํธ ์์ง์ ํตํด CPU๊ฐ ํด์ํ  ์ ์๋ ์ด์๋ธ๋ฆฌ์ด๋ก ๋ณํ๋๋ค. 
> V8 ์์ง?  
> ํฌ๋กฌ, node.js์ ๋ด์ฅ๋์ด ์๋ ์์ง์ด๋ค.

## React์ ํ์
| ๋ฌธ์  | ํ์๋ ๋ฌธ์  | ๋ต์์ง | ๊ฒฐ๊ณผ๋ฌผ |
|----------|----------|----------|----------|
|ํน์  ํธ๋ฆฌ์ ๋ชจ๋  ์ปดํฌ๋ํธ๊ฐ ๊ณต์ ํ๋ ๊ฐ์ ์ ์ํ  ์๋จ | ์ฐธ์กฐํ๋ ์์ ์ ๋๋ฌ์ผ ํ๊ฒฝ์ ๊ธฐ์ค์ผ๋ก ํ๊ฐ๋๋ ๊ฐ| ๋์  ์ค์ฝํ | Context |
|์ฑ๊ธ ์ค๋ ๋ ํ๊ฒฝ ๋ด ๋ ๋๋ง์ด ๋๋ฆฐ ์ปดํฌ๋ํธ๊ฐ UI ๋ฐ์์ฑ์ ์ ํดํ๋ ์ํฉ ๋ฐฉ์ง | ํ๋์ ์คํ ์ฃผ์ฒด๋ก ์๋ก ์ฐ์ ์์๊ฐ ๋ค๋ฅธ ์ฌ๋ฌ ์์์ด ๋์์ ์คํ๋๋ ๋ฏ ๋ณด์ด๊ฒ ํ๊ธฐ| ์ด์์ฒด์ ์ ์ค์ผ์ค๋ง, ๋น์ ์ ํ ์ค์ผ์ค๋ฆฌ์ Fiber | Fiber Reconciler |
|ํจ์ ์ปดํฌ๋ํธ์ ์ ์ฝ ์ ๊ฑฐ, ์ํ ๋ก์ง์ ์์ง์ฑ, ์ฌ์ฌ์ฉ์ฑ ์ฆ๋ | ํน์  'ํจ๊ณผ'(์ํ, ๋ผ์ดํ์ฌ์ดํด, ๋น๋๊ธฐ)๋ฅผ React๊ฐ ์ ๊ณตํ ํธ๋ค๋ฌ์ ์์ํ  ์๋จ| ๋์์  ํจ๊ณผ | Hooks |
|๋น๋๊ธฐ ๋ฐ์ดํฐ ์์ง ๊ณผ์ ์ ์ ์ธ์  ์ฒ๋ฆฌ | | | Suspense |

# ๋ง์น๋ฉฐ
์ง๋๋ฒ์ ๋ดค๋ FEConf ๊ฐ์ ์ค ์ข์๋ ๊ฐ์๋ฅผ ์ ๋ฆฌํด๋ณด์๋๋ฐ ์ญ์ ์ด๋ ต๋ค. ์ด๋ฐ ์ปดํฌ๋ํธ ๋ถ๋ฆฌ์ ๊ธฐ์ค์ ํ๋ก์ ํธ๋ง๋ค ๋ค๋ฅด๊ธฐ ๋๋ฌธ์ ๋ง์ด ๊ฒฝํํด๋ณด๊ณ  ์ง์  ๋ถ๋ฆฌํ๋ ๊ณผ์ ๋ ๋ง์ด ๊ฒช์ด๋ด์ผ ๋ ์๋ฟ์ ๊ฒ ๊ฐ๋ค. 
## Refer
https://www.youtube.com/watch?v=HYgKBvLr49c
