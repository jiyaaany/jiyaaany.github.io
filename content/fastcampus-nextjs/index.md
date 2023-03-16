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
