---
emoji: 🤷🏻‍♀️
title: Vue 꿀팁 🍯 
date: '2022-01-21 15:29:00'
author: 지걸
tags: vue
categories: TIL
---
# 시작하며
Vue 프레임워크에서 조건부 렌더링을 위한 디렉티브는 `v-if`와 `v-show`가 있습니다. 이번에는 두 가지 디렉티브의 차이점에 대해 알아봅시다.

# v-if VS v-show
## `v-if`
디렉티브의 값이 `true`이면 렌더링 되고 `false`이면 렌더링 되지 않습니다. 2.1.0 버전부터 `v-else-if` 디렉티브도 추가되어 기존에 if문을 사용하던대로 디렉티브를 사용할 수 있습니다.

```javascript
<template>
  <div>
    <span v-if="true">v-if</span>
    <span v-else-if="true">v-else-if</span>
    <span v-else>v-else</span>
  </div>
</template>
```

## `v-show`
`v-if`와 마찬가지로 디렉티브 값이 `true`일 때 렌더링 됩니다.
```javascript
<template>
  <div>
    <span v-show="true">보이기</span>
  </div>
</template>
```

# `nextTick`
Vue에서 `nextTick`으로 감싼 뒤 callback을 통해 DOM을 조작할 수 있다. 이렇게 되면 데이터 갱신 후 UI까지 렌더링한 후에 `nextTick` 함수를 최종적으로 수행한다. 데이터가 업데이트되고 난 직후,
UI가 갱신될 때 DOM을 찾지 못하는 현상을 개선하고자 사용한다.  
ex.
```vue
// 데이터를 변경합니다.
vm.msg = 'Hello'
// 아직 DOM 업데이트가 되지 않았습니다.
Vue.nextTick(function () {
  // DOM이 업데이트 되었습니다.
});
```

## 차이점
가장 큰 차이점은 `v-if`는 실제 컴포넌트가 제거되고 생성되는 반면 `v-show`는 css의 `display` 속성만 변경된다는 점입니다.

# 마치며
## Refer
https://kr.vuejs.org/v2/guide/conditional.html  
https://vuejs-kr.github.io/jekyll/update/2017/01/19/vuejs-nexttick-example/  
https://kr.vuejs.org/v2/api/#Vue-nextTick  
https://doozi316.github.io/vuejs/2020/08/10/Vue4/