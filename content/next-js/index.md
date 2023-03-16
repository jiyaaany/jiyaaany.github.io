---
emoji: 📚
title: Next.js 공식문서 번역
date: '2023-02-15 12:00:00'
author: 지걸
tags: Next.js
categories: TIL
---

# Getting Started (시작하기)
애플리케이션 루트 경로에 `pages`와 `public` 디렉토리가 생성된다.
- `pages`: 디렉토리 내부의 파일 명은 라우터와 연결된다. 예를 들어, `pages/about.js`는 `/about` 과 매핑된다.
- `public`: 이미지, 폰트 등 정적 리소스를 저장한다. `public` 폴더 안 파일들은 base URL(`/`)으로 코드가 실행되기 전에 참조할 수 있다. 

Next.js는 페이지 개념을 중심으로 만들어졌다. 페이지란 `pages` 디렉토리 내부의 `.js`, `.jsx`, `.ts`, or `.tsx` 타입의 리액트 컴포넌트를 말한다.
뿐만 아니라 파일 이름을 통해 [dynamic route](https://nextjs.org/docs/routing/dynamic-routes) 파라미터를 설정할 수 있다.

`pages` 디렉토리 안의 `index.js` 파일은 시작을 위한 파일이다. 사용자가 애플리케이션을 방문했을 때 렌더링 되는 페이지이다.  

지금까지 우리는:
- 자동 컴파일과 [번들링](https://nextjs.org/docs/advanced-features/compiler)
- [React Fast Refresh](https://nextjs.org/blog/next-9-4#fast-refresh)
- `pages/`의 [정적 generation 및 서버 사이드 렌더링](https://nextjs.org/docs/basic-features/data-fetching/overview)
- base URL과 매핑되는 `public/` 디렉토리를 통한 [정적 파일 제공](https://nextjs.org/docs/basic-features/static-file-serving)

# Basic Features (기본적인 기능)
## Pages
`pages/` 디렉토리의 각 페이지는 파일 이름을 기반으로 라우터와 연결된다.

**예**: `pages/about.js` 리액트 컴포넌트를 만들었다면 그것은 `/about`으로 접근할 수 있다.

### Pages with Dynamic Routes
Next.js는 동적 라우팅 페이지를 지원한다. 예를 들어, `pages/posts/[id].js` 파일을 만들었다면,
그것은 `posts/1`, `posts/2` 등으로 접근이 가능할 수 있다.

### Pre-rendering
기본적으로, Next.js는 모든 페이지를 미리 렌더링한다. 이것은 Next.js는 client-side에서 모든 것을 수행하는게 아니라 
미리 각 페이지의 HTML을 생성한다는 의미이다. Pre-rendering은 성능과 SEO 측면에서 더 나은 결과를 가져올 수 있다.

생성된 각 HTML은 해당 페이지에 필요한 최소한의 자바스크립트 코드와 연관되어 있다. 브라우저로부터 해당 페이지를 요청 받았을 때,
자바스크립트 코드가 실행되면서 페이지를 완전히 상호작용하게 만든다. (이 프로세스를 *hydration*이라고 함.)

### Pre-rendering의 두가지 형태
Next.js는 pre-rendering의 두가지 형태를 갖고있다: **Static Generation**과 **Server-side Rendering**.
이것은 **언제** HTML을 생성하는지에 차이가 있다.
- Static Generation (추천): HTML이 **빌드**될 때 생성되어 각 요청에 의해 재사용된다.
- Server-side Rendering: HTML이 각 요청 때 생성된다.

중요한건, Next.js는 각 페이지를 어떻게 사용할지에 따라 pre-rendering 을 선택적으로 사용할 수 있다. 
다수의 페이지를 위한 Static Generation과 그 외의 페이지들을 위한 Server-side Rendering을 동시에 사용하는 "hybrid" Next.js 앱을 만들 수 있다.

성능상의 이유로 Server-side Rendering 보다는 **Static Generation** 사용을 추천한다. 정적으로 생성된 페이지는
별도의 구성 없이 CDN으로부터 캐싱되어 성능을 향상시킬 수 있다. 그러나 경우에 따라 Server-side Rendering만 사용해야할 수 있다.

Static Generation 또는 Server-side Rendering과 함께 Client-side data fetching 또한 사용할 수 있다. 
무조건 클라이언트 측 자바스크립트에서 렌더링 되어야하는 페이지의 경우를 뜻한다. 

## Static Generation
Static Generation을 사용하는 페이지라면, 해당 페이지의 HTML은 빌드 시에 생성된다. `next build` 명령어를 실행했을 때 HTML이 생성된다는 뜻이다. 
HTML은 각 요청 시에 재사용된다. 이것 또한 CDN을 통해 캐싱된다.

Next.js에서는 데이터의 유무와 상관없이 정적으로 페이지를 생성할 수 있다.

### Static Generation without data
기본적으로, Next.js는 데이터를 가져오지 않고 Static Generation을 사용하여 pre-render 된다.
```javascript
function About() {
    return <div>About</div>
}

export default About
```

이 페이지는 사전에 렌더링 될 때 외부 데이터를 가져올 필요가 없다. 이러한 경우 Next.js는 HTML 페이지를 빌드 시에 생성한다.

### Static Generation with data
몇몇 페이지들은 pre-rendering을 위한 외부 데이터를 가져와야하는 경우가 있다.
이러한 경우 Next.js에서 제공되는 두가지 함수를 사용할 수 있다: 
1. 외부 데이터가 **페이지 내용**과 의존되는 경우: `getStaticProps`
2. 외부 데이터가 **경로**와 의존되는 경우: `getStaticPaths` (일반적으로 `getStaticProps`와 함께 사용)

**예**: 블로그에서 글 목록을 가져오는 경우

사전 렌더 시 데이터를 가져오기 위해 Next.js는 동일한 파일에서 `getStaticProps` 비동기 함수를 `export` 한다.
이 함수는 빌드 타임 때 호출되며 사전 렌더링 시 가져온 데이터를 page의 `props`로 전달한다.
```javascript
export default function Blog({ posts }) {
    
}

export async function getStaticProps() {
    const res = await fetch('https://.../posts');
    const posts = await res.json();
    
    return {
        props: {
            posts,
        },
    }
}
```

**`getStaticPaths()`**
```javascript
export async function getStaticPaths() {
    const res = await fetch('https://.../posts');
    const posts = await res.json();
    
    const paths = posts.map(post => ({
        params: { id: posts.id },
    }));
    
    return { paths, fallback: false };
}
```

### 언제 Static Generation을 사용해야할까?
언제든 가능하다면 **Static Generation(데이터가 있든 없든)** 을 사용하는 것을 권장한다.
왜냐하면 페이지는 한번 빌드되고 CDN으로부터 제공되기 때문에 모든 요청을 서버가 렌더링 해주는 것보다 더욱 빠르다.

# Server-side Rendering
Server-side Rendering을 사용하기 위해서는 `getServerSideProps` 비동기 함수를 `export` 해야 한다.
이 함수는 매 요청마다 서버로부터 호출된다.

예를 들어, 페이지에서 자주 업데이트 되는 데이터를 렌더링해야 한다고 가정해보면 아래와 같이 `Page`에 전달하는
`getServerSideProps`를 작성할 수 있다.
```javascript
export default function Page({ data }) {
    
}

export async function getServerSideProps() {
    const res = await fetch('https://.../data');
    const data = await res.json();
    
    return { props: { data }};
}
```

보는 것과 같이 `getServerSideProps`는 `getStaticProps`와 비슷하다. 그러나 다른 점은 `getServerSideProps`는
빌드 때만 호출되는게 아니라 매 요청마다 호출된다는 점이다.

# Data Fetching Overview (데이터 가져오기 개요)
Next.js에서 데이터 가져오기를 사용하면 애플리케이션에 따라 다양한 방법으로 콘텐츠를 렌더링할 수 있다.
**Server-side Rendering** 또는 **Static Generation** 과 같은 pre-rendering을 포함하고
런타임 시 수정 또는 콘텐츠 생성을 위한 Incremental Static Regeneration이 있다.

## getServerSideProps
만약 페이지로부터 `getServerSideProps`(Server-Side Rendering) 가 호출된다면 Next.js는
`getServerSideProps`에서 반환된 데이터를 사용하여 각 요청을 위한 페이지를 미리 렌더링한다.

`getServerSideProps`는 오직 페이지에서만 사용할 수 있다. page가 아닌 파일에서는 사용할 수 없다.
### 언제 getServerSideProps를 사용해야 할까
요청 시 반드시 데이터를 가져와야하는 페이지를 렌더링하는 경우에만 `getServerSideProps` 를 사용해야 한다.
`getServerSideProps`를 사용하는 페이지는 요청 시 서버 측에서 렌더링되며 cache-control 헤더가 구성된 경우에만 캐싱된다.

만약 요청 동안에 데이터를 렌더링할 필요가 없다면, 클라이언트 사이드 또는 `getStaticProps` 를 통해 데이터를 가져오는 것을
고려해야 한다.

## getServerSideProps or API Routes
서버에서 데이터를 가져오는 것을 원한다면 [API Route](https://nextjs.org/docs/api-routes/introduction)에 도달한 다음 `getServerSideProps`에서 해당 API를 호출하고 싶을 수도 있다.
그것은 서버에서 실행 중인 `getServerSideProps`와 API Routes로 인해 추가적인 request를 발생시키기 때문에 이는 불필요하고 비효율적인 접근이다.

이어지는 예제를 보면, API route는 CMS로부터 데이터를 가져오는 데 사용된다. 그러면 API route는 `getServerSideProps`로부터 직접 호출된다.
이렇게 하면 추가 호출이 발생하여 성능이 저하된다. 대신에 `getServerSideProps` 내부로 API Route에서 사용되는 로직을 import하면 된다.
이것은 CMS, 데이터베이스 또는 다른 API를 `getServerSideProps` 안에서 직접 호출하는 것을 의미한다. 

## getServerSideProps with Edge API Routes
`getServerSideProps`는 Serverless 및 Edge Runtimes에서 사용될 수 있으며 둘 다 props를 설정할 수 있다.
그러나, 현재 Edge Runtime은 reponse 객체에 접근 권한이 없다. 즉 예를 들어 `getSErverSideProps`에서 쿠키를 추가할 수 없다는 의미이다.
response 객체에 접근 권한을 갖기 위해서는 기본 런타임인 Node.js 런타임 환경을 계속 사용해야 한다.

예처럼, config 파일을 수정하여 per-page basis를 위한 runtime을 명시적으로 세팅할 수 있다.
```javascript
export const config = {
    runtime: 'nodejs',
}
```

## Fetching data on the client side
자주 업데이트 되는 데이터를 포함하는 페이지라면 데이터를 사전에 렌더링할 필요없이 client side에서 데이터를 가져올 수 있다.
사용자 상세 데이터를 예로 들어본다면
- 첫째, 데이터 없이 즉시 페이지를 보여준다. 페이지 일부는 Static Generation을 사용하여 사전에 렌더링될 수 있다. 누락된 데이터의 로딩 상태를 보여줄 수 있다.
- 그리고 client side에서 데이터를 가져오고 준비되었을 때 보여준다. 

이것은 예를 들어 사용자의 대시보드 페이지에 적합하다. 왜냐하면 대시보드는 private하고 사용자의 상세 페이지이며 SEO와 관련이 없기 때문에 사전 렌더링이 필요하지 않다.
데이터는 자주 업데이트되므로 요청 시 가져와야 한다.

## Using getServerSideProps to fetch data at request time
아래 예제는 request time에 어떻게 데이터를 가져오고 결과를 사전에 렌더링 하는지 보여준다.
```javascript
function Page({ data }) {
    
}

export async function getServerSideProps() {
    const res = await fetch('https://.../data');
    const data = await res.json();
    
    return { props: { data } };
}

export default Page
```

## Caching with Server-Side Rendering (SSR)
동적 응답을 캐싱하기 위해 `getServerSideProps` 안의 caching headers(`Cache-Control`)을 사용할 수 있다. 예를 들어, `stale-while-revalidate`를 사용해보자.
```javascript
export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    
    return {
        props: {},
    }
}
```

## Does getServerSideProps render an error page
만약 `getServerSideProps` 내부에 에러가 있다면 `pages/500.js` 파일을 보여줄 것이다.
이것을 어떻게 만드는지에 대해 자세한 내용은 [500 page](https://nextjs.org/docs/advanced-features/custom-error-page#500-page) 문서를 확인해보면 된다.
개발하는 동안에는 이 파일이 사용되지 않고 dev overlay 가 대신 보여진다. 
