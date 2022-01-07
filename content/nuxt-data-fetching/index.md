---
emoji: 👀
title: Nuxt - Data Fetching
date: '2022-01-07 12:33:00'
author: 지걸
tags: nuxt vue javascript
categories: TIL
---
# 시작하며
Nuxt 공식 문서에 있는 [Data Fetching](https://nuxtjs.org/docs/features/data-fetching) w에 관련된 내용을 번역한 글입니다.

# Data Fetching
> Nuxt에서는 API로부터 데이터를 가져오는 2가지 방법이 있습니다. `fetch` 메서드와 `asyncData` 메서드를 사용해 데이터를 가져올 수 있습니다.

Nuxt는 client-side 어플리케이션에서 데이터를 로딩하기 위한 전통적인 Vue의 패턴을 제공합니다. (컴포넌트의 `mounted()` 훅에서데이터를 가져오는 것)
그러나 범용적으로는 server-side 렌더링 때에 데이터를 가져올 수 있도록 Nuxt의 특수 훅들을 사용해야 합니다.
이렇게 하면 페이지에 필요한 모든 데이터와 함께 페이지를 렌더링 할 수 있습니다.

Nuxt의 비동기 데이터를 로딩하는 두가지 hooks:  
- `asyncData`: 이 훅은 page 컴포넌트에서만 사용 가능합니다. 이 훅은 client-side 렌더링 동안 로딩되는 공간을 표시하지 않습니다.
대신에, 이 훅은 해결될 때까지 페이지 이동을 막고 실패할 경우 에러 페이지를 보여줍니다.
- `fetch` (Nuxt 2.12+): 이 훅은 모든 컴포넌트에서 사용 가능합니다. 그리고 로딩 상태(client-side 렌더링 중)와 에러를 렌더링 하기 위한 shortcuts를 제공합니다.

위 훅들은 데이터를 가져오는 라이브러리에서 사용할 수 있습니다. HTTP API 요청을 위한 [@nuxt/axios](https://axios.nuxtjs.org/) 나 [@nuxt/http](https://http.nuxtjs.org/) 를 사용하는 것을 권장합니다.
인증 header 설정을 위한 가이드와 같은 이 라이브러리들에 대한 더 많은 정보는 documentation를 찾아보시기 바랍니다. 

> 만약 `fetch`나 `asyncData`를 mixin 내에 정의하고 page 컴포넌트에서도 정의하는 경우, mixin 함수는 덮여씌어집니다.

## The fetch hook
> Nuxt 2.12 이전의 page 컴포넌트에서만 동작되고 컴포넌트에서 접근할 수 없는 `fetch` 훅과는 다릅니다. 만약 `fetch()`가 `context` argument를 사용할 수 있다면,
> 그것은 레거시 fetch 으로 취급됩니다. 이것은 deprecated 되었으며 `asyncData` 또는 anonymouse middleware로 교체하여야 합니다.
> 
`fetch`는 컴포넌트가 생성된 후 server-side 렌더링 동안 client에서 불려집니다. fetch 훅은 promise(명시적, 또는 `async/await`를 사용한 암시적)를 반환합니다. 
- 서버에서는 초기 페이지 렌더 전
- 클라이언트에서는 컴포넌트가 mounted 되고 일정 시간 경과

> static hosting에서, fetch 훅은 page 생성 중에만 불립니다. 그리고 결과는 클라이언트에서 사용할 수 있도록 캐싱됩니다. 
> 캐시 충돌을 방지하려면 컴포넌트의 이름을 지정하거나 고유한 fetchKey를 제공해야 합니다.

### Usage
#### Fetching data
fetch 훅 내에서는 컴포넌트의 `this` 객체에 접근할 수 있습니다.
> 다른 속성을 수정하려면 `data()` 안에 미리 선언해야 합니다. 그리고 fetch에서 가져온 데이터는 data에서 선언한 속성에 할당할 수 있습니다. 

#### Changing fetch behavior
`fetchOnServer`: `Boolean` 또는 `Function` (default: `true`) 페이지가 server-rendering 때 `fetch`가 호출됩니다.  

`fetchKey`: `String` 또는 `Function` (컴포넌트 scope ID 또는 컴포넌트명이 기본) 컴포넌트의 fetch 결과를 식별할 수 있는 key (또는 고유 키를 생성하는 함수) (Nuxt 2.15+ 사용 가능).
페이지가 server-rendered 될 때 이 키는 서버 측 결과를 `fetch()` 클라이언트 측 구성 요소 데이터 에 매핑하는 데 사용됩니다. [원본 PR](https://github.com/nuxt/nuxt.js/pull/8466) 에서 더 많은 정보를 얻을 수 있습니다.

`fetchDelay`: `Integer` (default: `200`), 최소 실행 시간을 초단위로 설정한다. (빠른 깜빡임을 피하기 위해)

`fetchOnServer`는 참/거짓, `fetch`는 clinet-side에서만 호출할 수 있고, server-side 컴포넌트에서는 `$fetchState.pending`는 `true`를 반환한다. 

```javascript
export default {
  data: () => ({
    posts: []
  }),
  async fetch() {
    this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  },
  fetchOnServer: false,
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
  fetchKey: 'site-sidebar',
  // alternatively, for more control, a function can be passed with access to the component instance
  // It will be called in `created` and must not depend on fetched data
  fetchKey(getCounter) {
    // getCounter is a method that can be called to get the next number in a sequence
    // as part of generating a unique fetchKey.
    return this.someOtherData + getCounter('sidebar')
  }
}
```

#### Accessing the fetch state
`fetch` 훅은 다음과 같은 특성을 가진 컴포넌트의 레벨에서 `this.$fetchState`을 나타냅니다.
- `pending`은 clinet-side 에서 `fetch`가 호출되었을 때 `Boolean` 값을 나타냅니다.
- `error`는 `fetch` 훅으로부터 `null`이거나 `Error`를 반환한 경우입니다.
- `timestamp`는 마지막 fetch를 나타내는 시간입니다. `keep-alive`를 사용해 캐싱하는데 유용합니다.

추가로 Nuxt에서 불려지는 fetch 외에도, 컴포넌트 내에서 `this.$fetch()`를 통해 fetch를 호출할 수 있다. (e.g. 비동기 데이터를 리로드)
```vue
<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains">{{ mountain.title }}</li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```
> fetch 훅 말고도 `this.$nuxt.context`를 사용해 Nuxt **context** 에 접근할 수 있다.

### Listening to query string changes
`fetch` 훅은 기본적으로 쿼리 스트링이 변경되었을 때 호출되지 않는다. 쿼리 변경을 감시하려면 `$route.query`를 추가해야한다.
```javascript
export default {
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    // Called also on query changes
  }
}
```
### Caching
`<nuxt />`와 `<nuxt-child />`컴포넌트에 `keep-alive` 디렉티브를 사용해 이미 방문한 페이지에서 호출한 `fetch`를 저장할 수 있습니다.
```javascript
<template>
  <nuxt keep-alive />
</template>
```
또한 `<nuxt>` 컴포넌트에 `keep-alive-props` 등의 [props](https://vuejs.org/v2/api/#keep-alive) 를 구성할 수 있습니다.
```javascript
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```
10개의 페이지 컴포넌트만 저장됩니다.

### Error handling
> 데이터를 가져오는 중 에러가 발생한다면 정상적인 Nuxt 오류 페이지가 로드되지 않습니다. `fetch()` 내의 Nuxt `redirect`나 `error` 메서드를 사용하지 않는 대신에
> 컴포넌트 내에서 `$fetchState.error`를 사용해 처리해야 합니다.

데이터를 가져오는 중 error가 있다면 `$fetchState.error`를 확인해 에러 메시지를 볼 수 있다.
```vue
<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```

### Using `activated` hook
Nuxt는 마지막 `fetch` 호출(ssr 포함)을 `this.$fetchState.timestamp`에 담아두고 있습니다. 
`activated`훅이 포함된 속성을 사용하여 `fetch`의 30초 캐시를 추가할 수 있습니다.
```vue
<template> ... </template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
    async fetch() {
      this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    }
  }
</script>
```
마지막 `fetch` 호출이 30초 전인 경우 동일 페이지로의 탐색이 호출되지 않습니다.

## Async Data
> `asyncData`는 **pages**에서만 사용할 수 있고 훅 내에서 `this`에 접근할 수 없습니다.

`asyncData`는 범용 데이터를 가져오기 위한 다른 훅입니다. 비동기 상태를 저장하기 위한 속성 정의가 필요한 `fetch`와 달리 `asyncData`는 
컴포넌트의 로컬 state와 반환 값을 병합하기만 하면 됩니다. 여기 @nuxt/http 라이브러리를 사용한 예제가 있습니다.

```vue
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return { post }
    }
  }
</script>
```

`fetch`와 달리 `asyncData` 훅으로 리턴된 promise는 route 전환 중에 해결됩니다. 이것은 client-side 전환 중에는 "loading placeholder"가 표시되지 않는다는걸 의미합니다.
(loading bar를 사용하여 사용자에게 로드 상태를 나타낼 수 있음). 
대신 Nuxt는 다음 페이지나 에러 페이지를 보여주기 전에 `asyncData` 훅이 완료될 때까지 기다립니다. 

이 훅은 page-level 컴포넌트에서만 사용 가능합니다. `fetch`와는 다르게 `asyncData`는 컴포넌트의 `this`에 접근할 수 없습니다.
대신, argument로 [the context](https://nuxtjs.org/docs/concepts/context-helpers/) 를 받습니다. 이것을 사용해 몇몇의 데이터를 가져올 수 있고 Nuxt는 자동으로
컴포넌트의 데이터와 리턴 객체를 병합할 수 있습니다.

다음 예시는, API로부터 데이터를 가져올 때 권장하는 @nuxt/http 라이브러리를 사용했습니다.

### Async data in components?
컴포넌트는 `asyncData`를 갖고 있지 않기 때문에 컴포넌트 내에서 직접 server-side 비동기 데이터를 가져올 수 없습니다.
제한을 극복하기 위해 3가지 옵션을 사용할 수 있습니다. 

1. Nuxt 2.12 이후 버전에서부터 사용 가능한 [새로운 `fetch` hook](https://nuxtjs.org/docs/features/data-fetching/#the-fetch-hook) 을 사용합니다.
2. `mounted` 훅 안에서 API 호출을 합니다. 그리고 loaded 시점에 data 속성을 지정합니다. 단점: server side rendering 에서는 작동하지 않습니다. 
3. page 컴포넌트의 `asyncData` 안에서 API를 호출합니다. 그리고 하위 컴포넌트로 data를 props로 전달합니다. Server rendering은 잘 동작합니다. 
단점: 다른 컴포넌트에서 데이터를 로딩하기 위해 page의 `asyncData`는 가독성이 떨어질 수 있습니다.

### Listening to query changes
기본적으로 `asyncData`는 query string 변경에 의해 호출되지 않습니다. page 컴포넌트를 작성할 때처럼 동작을 변경하려면 page 컴포넌트의 
`watchQuery` 속성으로 받는 파라미터를 설정할 수 있습니다.
