---
emoji: 💻
title: Vue 프로젝트에서 공통 함수 세팅하기
date: '2021-10-15 12:14:00'
author: 지걸
tags: vue nuxt javascript
categories: experience
---

# 시작하며
매 프로젝트를 구축할 때마다 하는 고민 **'공통 모듈을 어떻게 관리할까?'**. 이번 프로젝트를 진행하면서도 어김없이 이 질문에 대한 고민을 해보았다. 규모가 꽤 있는 Vue 프로젝트를 시작 단계부터 참여했던 경험이 없었기 때문에 여러 아티클을 찾아보았다.

> **[환경]**   
Vue2 + Nuxt.js

# 플러그인으로 작성하기
Vue 공식문서에서는 [플러그인](https://kr.vuejs.org/v2/guide/plugins.html)에 대해 설명하고 있다. 공통으로 사용할 js 파일을 `/assets` `/plugins` 이나 선호하는 곳에 만들어준다.

```typescript
import Vue from 'vue'
import { store } from "~/store";

Vue.use(MyPlugin)

MyPlugin.install = (Vue) => {
  Vue.getBlabla = () => {
    return store.getBlabla
  }
}
```
사용은 이렇게
```typescript
this.$getBlabla()
```

## Refer  
> https://song8420.tistory.com/385?category=891243  
> https://kr.vuejs.org/v2/guide/plugins.html

# 마치며
리서치 후 프로젝트에 적용하는 과정에서 Nuxt + TypeScript의 벽에 부딪혀 위 방법으로는 실패했다.. (조금 더 리서치가 필요하다.)