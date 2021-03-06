---
emoji: ๐
title: Nuxt - Data Fetching
date: '2022-01-07 12:33:00'
author: ์ง๊ฑธ
tags: nuxt vue javascript
categories: TIL
---
# ์์ํ๋ฉฐ
Nuxt ๊ณต์ ๋ฌธ์์ ์๋ [Data Fetching](https://nuxtjs.org/docs/features/data-fetching) w์ ๊ด๋ จ๋ ๋ด์ฉ์ ๋ฒ์ญํ ๊ธ์๋๋ค.

# Data Fetching
> Nuxt์์๋ API๋ก๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ 2๊ฐ์ง ๋ฐฉ๋ฒ์ด ์์ต๋๋ค. `fetch` ๋ฉ์๋์ `asyncData` ๋ฉ์๋๋ฅผ ์ฌ์ฉํด ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค.

Nuxt๋ client-side ์ดํ๋ฆฌ์ผ์ด์์์ ๋ฐ์ดํฐ๋ฅผ ๋ก๋ฉํ๊ธฐ ์ํ ์ ํต์ ์ธ Vue์ ํจํด์ ์ ๊ณตํฉ๋๋ค. (์ปดํฌ๋ํธ์ `mounted()` ํ์์๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ)
๊ทธ๋ฌ๋ ๋ฒ์ฉ์ ์ผ๋ก๋ server-side ๋ ๋๋ง ๋์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋๋ก Nuxt์ ํน์ ํ๋ค์ ์ฌ์ฉํด์ผ ํฉ๋๋ค.
์ด๋ ๊ฒ ํ๋ฉด ํ์ด์ง์ ํ์ํ ๋ชจ๋  ๋ฐ์ดํฐ์ ํจ๊ป ํ์ด์ง๋ฅผ ๋ ๋๋ง ํ  ์ ์์ต๋๋ค.

Nuxt์ ๋น๋๊ธฐ ๋ฐ์ดํฐ๋ฅผ ๋ก๋ฉํ๋ ๋๊ฐ์ง hooks:  
- `asyncData`: ์ด ํ์ page ์ปดํฌ๋ํธ์์๋ง ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค. ์ด ํ์ client-side ๋ ๋๋ง ๋์ ๋ก๋ฉ๋๋ ๊ณต๊ฐ์ ํ์ํ์ง ์์ต๋๋ค.
๋์ ์, ์ด ํ์ ํด๊ฒฐ๋  ๋๊น์ง ํ์ด์ง ์ด๋์ ๋ง๊ณ  ์คํจํ  ๊ฒฝ์ฐ ์๋ฌ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ค๋๋ค.
- `fetch` (Nuxt 2.12+): ์ด ํ์ ๋ชจ๋  ์ปดํฌ๋ํธ์์ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ก๋ฉ ์ํ(client-side ๋ ๋๋ง ์ค)์ ์๋ฌ๋ฅผ ๋ ๋๋ง ํ๊ธฐ ์ํ shortcuts๋ฅผ ์ ๊ณตํฉ๋๋ค.

์ ํ๋ค์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ฌ์ฉํ  ์ ์์ต๋๋ค. HTTP API ์์ฒญ์ ์ํ [@nuxt/axios](https://axios.nuxtjs.org/) ๋ [@nuxt/http](https://http.nuxtjs.org/) ๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ ๊ถ์ฅํฉ๋๋ค.
์ธ์ฆ header ์ค์ ์ ์ํ ๊ฐ์ด๋์ ๊ฐ์ ์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ ๋ํ ๋ ๋ง์ ์ ๋ณด๋ documentation๋ฅผ ์ฐพ์๋ณด์๊ธฐ ๋ฐ๋๋๋ค. 

> ๋ง์ฝ `fetch`๋ `asyncData`๋ฅผ mixin ๋ด์ ์ ์ํ๊ณ  page ์ปดํฌ๋ํธ์์๋ ์ ์ํ๋ ๊ฒฝ์ฐ, mixin ํจ์๋ ๋ฎ์ฌ์์ด์ง๋๋ค.

## The fetch hook
> Nuxt 2.12 ์ด์ ์ page ์ปดํฌ๋ํธ์์๋ง ๋์๋๊ณ  ์ปดํฌ๋ํธ์์ ์ ๊ทผํ  ์ ์๋ `fetch` ํ๊ณผ๋ ๋ค๋ฆ๋๋ค. ๋ง์ฝ `fetch()`๊ฐ `context` argument๋ฅผ ์ฌ์ฉํ  ์ ์๋ค๋ฉด,
> ๊ทธ๊ฒ์ ๋ ๊ฑฐ์ fetch ์ผ๋ก ์ทจ๊ธ๋ฉ๋๋ค. ์ด๊ฒ์ deprecated ๋์์ผ๋ฉฐ `asyncData` ๋๋ anonymouse middleware๋ก ๊ต์ฒดํ์ฌ์ผ ํฉ๋๋ค.
> 
`fetch`๋ ์ปดํฌ๋ํธ๊ฐ ์์ฑ๋ ํ server-side ๋ ๋๋ง ๋์ client์์ ๋ถ๋ ค์ง๋๋ค. fetch ํ์ promise(๋ช์์ , ๋๋ `async/await`๋ฅผ ์ฌ์ฉํ ์์์ )๋ฅผ ๋ฐํํฉ๋๋ค. 
- ์๋ฒ์์๋ ์ด๊ธฐ ํ์ด์ง ๋ ๋ ์ 
- ํด๋ผ์ด์ธํธ์์๋ ์ปดํฌ๋ํธ๊ฐ mounted ๋๊ณ  ์ผ์  ์๊ฐ ๊ฒฝ๊ณผ

> static hosting์์, fetch ํ์ page ์์ฑ ์ค์๋ง ๋ถ๋ฆฝ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ๊ฒฐ๊ณผ๋ ํด๋ผ์ด์ธํธ์์ ์ฌ์ฉํ  ์ ์๋๋ก ์บ์ฑ๋ฉ๋๋ค. 
> ์บ์ ์ถฉ๋์ ๋ฐฉ์งํ๋ ค๋ฉด ์ปดํฌ๋ํธ์ ์ด๋ฆ์ ์ง์ ํ๊ฑฐ๋ ๊ณ ์ ํ fetchKey๋ฅผ ์ ๊ณตํด์ผ ํฉ๋๋ค.

### Usage
#### Fetching data
fetch ํ ๋ด์์๋ ์ปดํฌ๋ํธ์ `this` ๊ฐ์ฒด์ ์ ๊ทผํ  ์ ์์ต๋๋ค.
> ๋ค๋ฅธ ์์ฑ์ ์์ ํ๋ ค๋ฉด `data()` ์์ ๋ฏธ๋ฆฌ ์ ์ธํด์ผ ํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  fetch์์ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ data์์ ์ ์ธํ ์์ฑ์ ํ ๋นํ  ์ ์์ต๋๋ค. 

#### Changing fetch behavior
`fetchOnServer`: `Boolean` ๋๋ `Function` (default: `true`) ํ์ด์ง๊ฐ server-rendering ๋ `fetch`๊ฐ ํธ์ถ๋ฉ๋๋ค.  

`fetchKey`: `String` ๋๋ `Function` (์ปดํฌ๋ํธ scope ID ๋๋ ์ปดํฌ๋ํธ๋ช์ด ๊ธฐ๋ณธ) ์ปดํฌ๋ํธ์ fetch ๊ฒฐ๊ณผ๋ฅผ ์๋ณํ  ์ ์๋ key (๋๋ ๊ณ ์  ํค๋ฅผ ์์ฑํ๋ ํจ์) (Nuxt 2.15+ ์ฌ์ฉ ๊ฐ๋ฅ).
ํ์ด์ง๊ฐ server-rendered ๋  ๋ ์ด ํค๋ ์๋ฒ ์ธก ๊ฒฐ๊ณผ๋ฅผ `fetch()` ํด๋ผ์ด์ธํธ ์ธก ๊ตฌ์ฑ ์์ ๋ฐ์ดํฐ ์ ๋งคํํ๋ ๋ฐ ์ฌ์ฉ๋ฉ๋๋ค. [์๋ณธ PR](https://github.com/nuxt/nuxt.js/pull/8466) ์์ ๋ ๋ง์ ์ ๋ณด๋ฅผ ์ป์ ์ ์์ต๋๋ค.

`fetchDelay`: `Integer` (default: `200`), ์ต์ ์คํ ์๊ฐ์ ์ด๋จ์๋ก ์ค์ ํ๋ค. (๋น ๋ฅธ ๊น๋นก์์ ํผํ๊ธฐ ์ํด)

`fetchOnServer`๋ ์ฐธ/๊ฑฐ์ง, `fetch`๋ clinet-side์์๋ง ํธ์ถํ  ์ ์๊ณ , server-side ์ปดํฌ๋ํธ์์๋ `$fetchState.pending`๋ `true`๋ฅผ ๋ฐํํ๋ค. 

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
`fetch` ํ์ ๋ค์๊ณผ ๊ฐ์ ํน์ฑ์ ๊ฐ์ง ์ปดํฌ๋ํธ์ ๋ ๋ฒจ์์ `this.$fetchState`์ ๋ํ๋๋๋ค.
- `pending`์ clinet-side ์์ `fetch`๊ฐ ํธ์ถ๋์์ ๋ `Boolean` ๊ฐ์ ๋ํ๋๋๋ค.
- `error`๋ `fetch` ํ์ผ๋ก๋ถํฐ `null`์ด๊ฑฐ๋ `Error`๋ฅผ ๋ฐํํ ๊ฒฝ์ฐ์๋๋ค.
- `timestamp`๋ ๋ง์ง๋ง fetch๋ฅผ ๋ํ๋ด๋ ์๊ฐ์๋๋ค. `keep-alive`๋ฅผ ์ฌ์ฉํด ์บ์ฑํ๋๋ฐ ์ ์ฉํฉ๋๋ค.

์ถ๊ฐ๋ก Nuxt์์ ๋ถ๋ ค์ง๋ fetch ์ธ์๋, ์ปดํฌ๋ํธ ๋ด์์ `this.$fetch()`๋ฅผ ํตํด fetch๋ฅผ ํธ์ถํ  ์ ์๋ค. (e.g. ๋น๋๊ธฐ ๋ฐ์ดํฐ๋ฅผ ๋ฆฌ๋ก๋)
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
> fetch ํ ๋ง๊ณ ๋ `this.$nuxt.context`๋ฅผ ์ฌ์ฉํด Nuxt **context** ์ ์ ๊ทผํ  ์ ์๋ค.

### Listening to query string changes
`fetch` ํ์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ฟผ๋ฆฌ ์คํธ๋ง์ด ๋ณ๊ฒฝ๋์์ ๋ ํธ์ถ๋์ง ์๋๋ค. ์ฟผ๋ฆฌ ๋ณ๊ฒฝ์ ๊ฐ์ํ๋ ค๋ฉด `$route.query`๋ฅผ ์ถ๊ฐํด์ผํ๋ค.
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
`<nuxt />`์ `<nuxt-child />`์ปดํฌ๋ํธ์ `keep-alive` ๋๋ ํฐ๋ธ๋ฅผ ์ฌ์ฉํด ์ด๋ฏธ ๋ฐฉ๋ฌธํ ํ์ด์ง์์ ํธ์ถํ `fetch`๋ฅผ ์ ์ฅํ  ์ ์์ต๋๋ค.
```javascript
<template>
  <nuxt keep-alive />
</template>
```
๋ํ `<nuxt>` ์ปดํฌ๋ํธ์ `keep-alive-props` ๋ฑ์ [props](https://vuejs.org/v2/api/#keep-alive) ๋ฅผ ๊ตฌ์ฑํ  ์ ์์ต๋๋ค.
```javascript
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```
10๊ฐ์ ํ์ด์ง ์ปดํฌ๋ํธ๋ง ์ ์ฅ๋ฉ๋๋ค.

### Error handling
> ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ์ค ์๋ฌ๊ฐ ๋ฐ์ํ๋ค๋ฉด ์ ์์ ์ธ Nuxt ์ค๋ฅ ํ์ด์ง๊ฐ ๋ก๋๋์ง ์์ต๋๋ค. `fetch()` ๋ด์ Nuxt `redirect`๋ `error` ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ง ์๋ ๋์ ์
> ์ปดํฌ๋ํธ ๋ด์์ `$fetchState.error`๋ฅผ ์ฌ์ฉํด ์ฒ๋ฆฌํด์ผ ํฉ๋๋ค.

๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ์ค error๊ฐ ์๋ค๋ฉด `$fetchState.error`๋ฅผ ํ์ธํด ์๋ฌ ๋ฉ์์ง๋ฅผ ๋ณผ ์ ์๋ค.
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
Nuxt๋ ๋ง์ง๋ง `fetch` ํธ์ถ(ssr ํฌํจ)์ `this.$fetchState.timestamp`์ ๋ด์๋๊ณ  ์์ต๋๋ค. 
`activated`ํ์ด ํฌํจ๋ ์์ฑ์ ์ฌ์ฉํ์ฌ `fetch`์ 30์ด ์บ์๋ฅผ ์ถ๊ฐํ  ์ ์์ต๋๋ค.
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
๋ง์ง๋ง `fetch` ํธ์ถ์ด 30์ด ์ ์ธ ๊ฒฝ์ฐ ๋์ผ ํ์ด์ง๋ก์ ํ์์ด ํธ์ถ๋์ง ์์ต๋๋ค.

## Async Data
> `asyncData`๋ **pages**์์๋ง ์ฌ์ฉํ  ์ ์๊ณ  ํ ๋ด์์ `this`์ ์ ๊ทผํ  ์ ์์ต๋๋ค.

`asyncData`๋ ๋ฒ์ฉ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ์ํ ๋ค๋ฅธ ํ์๋๋ค. ๋น๋๊ธฐ ์ํ๋ฅผ ์ ์ฅํ๊ธฐ ์ํ ์์ฑ ์ ์๊ฐ ํ์ํ `fetch`์ ๋ฌ๋ฆฌ `asyncData`๋ 
์ปดํฌ๋ํธ์ ๋ก์ปฌ state์ ๋ฐํ ๊ฐ์ ๋ณํฉํ๊ธฐ๋ง ํ๋ฉด ๋ฉ๋๋ค. ์ฌ๊ธฐ @nuxt/http ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ ์์ ๊ฐ ์์ต๋๋ค.

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

`fetch`์ ๋ฌ๋ฆฌ `asyncData` ํ์ผ๋ก ๋ฆฌํด๋ promise๋ route ์ ํ ์ค์ ํด๊ฒฐ๋ฉ๋๋ค. ์ด๊ฒ์ client-side ์ ํ ์ค์๋ "loading placeholder"๊ฐ ํ์๋์ง ์๋๋ค๋๊ฑธ ์๋ฏธํฉ๋๋ค.
(loading bar๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์์๊ฒ ๋ก๋ ์ํ๋ฅผ ๋ํ๋ผ ์ ์์). 
๋์  Nuxt๋ ๋ค์ ํ์ด์ง๋ ์๋ฌ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ฃผ๊ธฐ ์ ์ `asyncData` ํ์ด ์๋ฃ๋  ๋๊น์ง ๊ธฐ๋ค๋ฆฝ๋๋ค. 

์ด ํ์ page-level ์ปดํฌ๋ํธ์์๋ง ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค. `fetch`์๋ ๋ค๋ฅด๊ฒ `asyncData`๋ ์ปดํฌ๋ํธ์ `this`์ ์ ๊ทผํ  ์ ์์ต๋๋ค.
๋์ , argument๋ก [the context](https://nuxtjs.org/docs/concepts/context-helpers/) ๋ฅผ ๋ฐ์ต๋๋ค. ์ด๊ฒ์ ์ฌ์ฉํด ๋ช๋ช์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๊ณ  Nuxt๋ ์๋์ผ๋ก
์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ์ ๋ฆฌํด ๊ฐ์ฒด๋ฅผ ๋ณํฉํ  ์ ์์ต๋๋ค.

๋ค์ ์์๋, API๋ก๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ๋ ๊ถ์ฅํ๋ @nuxt/http ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ต๋๋ค.

### Async data in components?
์ปดํฌ๋ํธ๋ `asyncData`๋ฅผ ๊ฐ๊ณ  ์์ง ์๊ธฐ ๋๋ฌธ์ ์ปดํฌ๋ํธ ๋ด์์ ์ง์  server-side ๋น๋๊ธฐ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค.
์ ํ์ ๊ทน๋ณตํ๊ธฐ ์ํด 3๊ฐ์ง ์ต์์ ์ฌ์ฉํ  ์ ์์ต๋๋ค. 

1. Nuxt 2.12 ์ดํ ๋ฒ์ ์์๋ถํฐ ์ฌ์ฉ ๊ฐ๋ฅํ [์๋ก์ด `fetch` hook](https://nuxtjs.org/docs/features/data-fetching/#the-fetch-hook) ์ ์ฌ์ฉํฉ๋๋ค.
2. `mounted` ํ ์์์ API ํธ์ถ์ ํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  loaded ์์ ์ data ์์ฑ์ ์ง์ ํฉ๋๋ค. ๋จ์ : server side rendering ์์๋ ์๋ํ์ง ์์ต๋๋ค. 
3. page ์ปดํฌ๋ํธ์ `asyncData` ์์์ API๋ฅผ ํธ์ถํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ํ์ ์ปดํฌ๋ํธ๋ก data๋ฅผ props๋ก ์ ๋ฌํฉ๋๋ค. Server rendering์ ์ ๋์ํฉ๋๋ค. 
๋จ์ : ๋ค๋ฅธ ์ปดํฌ๋ํธ์์ ๋ฐ์ดํฐ๋ฅผ ๋ก๋ฉํ๊ธฐ ์ํด page์ `asyncData`๋ ๊ฐ๋์ฑ์ด ๋จ์ด์ง ์ ์์ต๋๋ค.

### Listening to query changes
๊ธฐ๋ณธ์ ์ผ๋ก `asyncData`๋ query string ๋ณ๊ฒฝ์ ์ํด ํธ์ถ๋์ง ์์ต๋๋ค. page ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ  ๋์ฒ๋ผ ๋์์ ๋ณ๊ฒฝํ๋ ค๋ฉด page ์ปดํฌ๋ํธ์ 
`watchQuery` ์์ฑ์ผ๋ก ๋ฐ๋ ํ๋ผ๋ฏธํฐ๋ฅผ ์ค์ ํ  ์ ์์ต๋๋ค.
