---
emoji: 📚
title: [패스트캠퍼스] Next.js 완전정복
date: '2023-03-14 12:00:00'
author: 지걸
tags: Next.js
categories: TIL
---

# Next.js 프레임워크 구조
- `Pages`: url과 매칭되는 것들

# Date Fetching
- SSR: 서버 사이드 렌더링으로, `getServerSideProps` 함수를 활용해 만들 수 있다. 서버에
요청이 생길 때마다 외부 데이터를 조회해서 보여줄 수 있다.
- CSR: 클라이언트 사이드 렌더링으로, 일반 React를 사용하는 것과 같다.
- SSG: 정적 사이트 제너레이션, 빌드 타임 때 미리 필요한 데이터를 가져와 화면을 그려놓는다. `yarn dev`로 실행한 환경에서는
SSR과 동일하게 동작하고 빌드 후 실행했을 때 순기능을 확인할 수 있다. 빌드 시 가져온 데이터로 그려주기 때문에 아무리 새로고침을 해도 데이터가 변경되거나 리패치 되지 않는다.
- ISR: `getStaticProps` 안에서 동작하는거지만 특정 주기를 지정해주면 그 주기마다 리제너레이션하여 데이터를 업데이트할 수 있다.

> SSR은 매번 서버로 호출하기 때문에 서버 부하를 가져올 수 있어 SSG + ISR을 동시에 사용하는 것을 권장한다.

> ### SSR VS SSG
> SSR은 매번 서버에 요청이 이루어지므로 서버 부하가 올 수 있다. 따라서 빌드 시 파일을 생성하는 SSG를 사용하는 것이 성능 측면에서 더 좋은데
> 두가지 중 결정하는 가장 큰 요인은 사용자의 요청 없이 불러올 수 있는 데이터인가. 판단하는 것이다.
> 만약 사용자 요청 없이 불러올 수 있는 데이터라면 빌드 타임 때 생성하는 SSG 사용을 권장하고, 그렇지 않다면 SSR을 사용해야 한다.

# Layout
`pages/_app.js`를 활용해서 페이지에 공통적으로 보여지는 레이아웃들을 설정할 수 있다. 메인 Layout과 별개로 SubLayout도 만들어
`GetLayout` 함수를 통해 레이아웃을 지정해줄 수 있다.

# Routing
React는 별도로 `react-router` 패키지를 설치해주어야 하지만 Next.js는 file-system 기반의 라우터를 제공한다.
`/src/pages` 또는 `/pages` 디렉토리 내부에 라우터를 지정해주면 된다.
- `/src/pages`와 `/pages`가 모두 존재한다면 `/pages`가 우선순위가 높다.
- `[id]`, `[id].js`와 같은 형태로 와일드 카드를 지정할 수 있다. 파일 뿐만 아니라 디렉토리명으로도 설정 가능.
- Slug - 다양한 위계의 Dynamic Paths 제 
- `[...id].js` 형태의 파일은 와일드 카드를 여러 뎁스로 입력할 수 있다. `e.g. //localhost:3000/1/2/3`
- `[[id]].js` 형태는 와일드 카드를 굳이 입력하지 않아도 기본 페이지로 로딩된다. `e.g. //localhost:3000`
- router를 변경하는 세가지 방법
  1. `location.replace("url")` - 로컬 state가 유지되지 않음 (리렌더링)
  2. `router.push(url)` - 로컬 state 유지 / data fetching 새로 일어남
  3. `router.push(url, as, { shallow: true })` - 로컬 state 유지 / data fetching 일어나지 않음
- SSG로 생성할 목록은 `getStaticPaths` 훅을 통해 가져온다.
- `getStaticPaths`의 `fallback` 역할은 빌드 타임 때 생성되지 않은 page에 대한 처리를 정한다.
  - `blocking`: 안그리고 있다가 데이터가 있을때 기다렸다가 실행
  - `false`: 처리하지 않고 404
  - `true`: fallback 동작으로 로더 등을 보여줬다가 실행

## Shallow Routing
- Dynamic Routes: Slug를 사용해 구현
- 다중 slug: [user]/[info].js / [...slug].js
- 옵셔널 slug: [[...slug]].js
- Shallow Routing: router.push(url, undefined, { shallow: true })

# API Routes
- API Routes는 Routing과 동일하게 파일기반이고 다이나믹 패스를 사용할 수 있다. (와일드카드)
- Response
  - res.status(code) - API 응답 결과를 코드로 리턴할 수 있다.
  - res.json(body) - 응답 결과로 받은 데이터를 가져올 수 있다.
  - res.redirect(code, url) - 응답 결과에 대한 코드를 첫 번째 파라미터로 주고, 두번째 파라미터로 다음으로 호출할 API 주소를 입력할 수 있다.
  - res.send(body) - `json()`과 유사하지만 string/object/Buffer 등 다양한 형태의 값을 리턴할 수 있다.

# 조금 더 심화 내용
Next.js는 Rust로 만들어진 [SWC](https://github.com/swc-project/swc) 컴파일러를 사용하고 있다. SWC 컴파일러는 javascript 코드를
transform하고 minify하는 역할을 한다. 트랜스파일러를 하는 Babel과 minify의 Terser를 대체하고 있다.

> 바벨이란?  
> 바벨은 트랜스파일러로 자바스크립트 최신 문법을 구 버전 브라우저에서도 동작할 수 있도록 치환해주는 역할

## Preview Mode
`getStaticProps`는 빌드 타임에 실행되는 훅이지만 Preview Mode로 두 가지 쿠키가 생성된다면 Request time에도
`getStaticProps` 훅을 실행할 수 있다.  

## Dynamic Import
`React.lazy` 기능을 확장하여 Next.js에서 컴포넌트를 Lazy load하는 방법이다.
```javascript
// good
import Button from 'components/Button';

// better
import dynamic from 'next/dynamic';

const Button = dynamic(() => { import('components/Button') }, {
  loading: () => <div>Loading...</div>
})
```

## Automatic Static Optimization
자동적으로 정적인 것은 최적화를 진행하는 기능, 정적 페이지는 .html 파일로 생성하고 요청에 맞춰 동작하는 페이지는 .js 파일로 빌드한다.
`getInitialProps`나 `getServerSideProps`가 있다면 .js파일로 빌드
 
## Router의 query값 
Router의 query 값은 CSR의 경우 초기에 `undefined`일 수 있다. 서버 사이드 렌더링을 사용할 경우 hydration 이후
실제 입력된 query 값만 사용할 수 있다.

## Static HTML Export
`next export` 명령어를 통해 의도적으로 정적 파일로 export 할 수 있다. 이 기능을 사용할 경우 Next.js에서 제공하는
기능 중 Node 서버가 있어야만 하는 것들(Image, API Routes)은 사용하지 못한다.

## [Custom App](https://nextjs.org/docs/advanced-features/custom-app)
- Persisting layout between page changes
  - 페이지 변경 시에도 고정된 레이아웃을 사용할 때
- Keeping state when navigating pages
  - 페이지가 navigate 되어도 유지하고 싶은 상태가 있을 때
- Inject additional data into pages
  - 페이지에 추가적인 데이터를 주입하고 싶을 때
- [Add global CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet 

## 웹 성능 측정 (Web Vitals)
- Largest Contentful Paint(최대 콘텐츠풀 페인트, LCP): 로딩 성능 측정, 사용자가 의미있는 콘텐츠를 볼 때까지 얼마만큼의 시간이 걸리는가, 우수한 사용자 경험을 제공하려면 _2.5초_ 이내에 LCP가 발생해야 한다. (적을수록 좋음)
- First Input Delay(최초 입력 지연, FID): 상호작용 측정, 우수한 사용자 경험을 제공하려면 페이지 당 _100밀리초_ 이하 (적을수록 좋음)
- Cumulative Layout Shift(누적 레이아웃 시프트, CLS): 시각적 안정성 측정, 우수한 사용자 경험을 제공하려면 페이지에서 _0.1 이하_ 유지 (적을수록 좋음)
- (추가) Total Block Time(총 차단 시간, TBT): 사용자가 인터랙션하기 까지 블럭타임이 어느정도 발생하는지 측정 
- 

