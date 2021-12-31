---
emoji: 😎
title: FEConf 2021
date: '2021-12-29 12:48:00'
author: 지걸
tags:
categories: TIL
---
# 컴포넌트, 다시 생각하기
```
React 컴포넌트의 의존성: ?  
React 컴포넌트를 만들려면 ?가 필요하다.
```
1. 기능적Type 분류: props, hooks
2. 특징적Feature 분류: 스타일, 로직, 전역상태, 리모트 데이터 스키마
> **리모트 데이터 스키마 ?**  
> API 서버에서 내려주는 데이터의 모양

## 함께 두기 (Co-locate)
비슷한 관심사라면 가까운 곳 함께 두기  
![img.png](img.png)
```typescript
import React from 'react'

import styled from '@emotion/styled'

const Something: React.FC = () => {
  const { ... } = useHooksForSomething()
  
  return <Container>Hello, World</Container>
}

// 로직(Custom Hooks)
function useHooksForSomething() {
  // ...
}

// 스타일(CSS-in-JS)
const Container = styled.div`
  background-color: red;
`
```

id 값만 Props로 전달받아 다른 컴포넌트 간의 의존성 줄이기
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

## 데이터를 ID 기반으로 정리하기
데이터 정규화(Nomalization)
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
> 데이터 정규화는 [normalizr](https://github.com/paularmstrong/normalizr) 패키지를 사용해 쉽게 할 수 있다.

# 왜 나는 React를 사랑하는가

## 발표자
안희종님 | 플렉스팀

## 왜 나는 널 사랑하는가
- 클리어한 멘탈 모델, 작고 단단한 코어
  - Learn Once, Write AnyWhere (한번 배우면 여러 환경에서 사용할 수 있다는 의미)
- 꾸준히 성장하는 거대한 커뮤니티
- 도전적인 과제, 우아한 해결책
  - Fiber, Hooks, Suspense, ...

## React는 UI 프로그래밍 언어이다?

| 프로그래밍 언어 | 리액트 |
|----------|----------|
|값 | React Element|
|함수 | React Component|
|try-catch | Error Boundary|
|정적 타입 체크 | prop-types|
|엔진 | Reconciler|
|어셈블 | 호스트 환경|
> **Reconciler ?**  
> 모든 렌더러와 공유되는 내용으로 React 코드를 해석하고 실행하는 역할을 한다.

## react VS react-dom
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```
react와 react-dom이 나누어져 있는 것도 react는 모든 렌더러와 공유되는 것들을 포함하고 있고, react-dom은 브라우저 환경(DOM)을 위한 것들이 포함되어 있다.


## 우리가 작성하는 자바스크립트가 어떻게 동작하는가?
![img_1.png](img_1.png)  
우리가 작성하는 소스코드는 V8이라는 자바스크립트 엔진을 통해 CPU가 해석할 수 있는 어셈블리어로 변환된다. 
> V8 엔진?  
> 크롬, node.js에 내장되어 있는 엔진이다.

## React의 환원
| 문제 | 환원된 문제 | 답안지 | 결과물 |
|----------|----------|----------|----------|
|특정 트리의 모든 컴포넌트가 공유하는 값을 정의할 수단 | 참조하는 시점에 둘러싼 환경을 기준으로 평가되는 값| 동적 스코핑 | Context |
|싱글 스레드 환경 내 렌더링이 느린 컴포넌트가 UI 반응성을 저해하는 상황 방지 | 하나의 실행 주체로 서로 우선순위가 다른 여러 작업이 동시에 실행되는 듯 보이게 하기| 운영체제의 스케줄링, 비선점형 스케줄리의 Fiber | Fiber Reconciler |
|함수 컴포넌트의 제약 제거, 상태 로직의 응집성, 재사용성 증대 | 특정 '효과'(상태, 라이프사이클, 비동기)를 React가 제공한 핸들러에 위임할 수단| 대수적 효과 | Hooks |
|비동기 데이터 수집 과정의 선언적 처리 | | | Suspense |

# 마치며
지난번에 봤던 FEConf 강의 중 좋았던 강의를 정리해보았는데 역시 어렵다. 이런 컴포넌트 분리의 기준은 프로젝트마다 다르기 때문에 많이 경험해보고 직접 분리하는 과정도 많이 겪어봐야 더 와닿을 것 같다. 
## Refer
https://www.youtube.com/watch?v=HYgKBvLr49c
