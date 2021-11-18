---
emoji: 📚
title: 사용하면서 배우는 React Router 
date: '2021-11-10 15:16:00'
author: 지걸
tags: react typescript react-router
categories: TIL
---
# 시작하며
토이프로젝트를 진행하며 [React Router](https://reactrouter.com/) 에 대해 알게된 점을 기록해두자 !

# 정리
## `exact`
`exact` 키워드는 정확히 일치 되었을 때만 지정된 컴포넌트를 보여주는 속성이다. 만약 `exact` 키워드 없이 라우터를 지정한다면 `{URL}/`, `{URL}/1` 모두 같은 컴포넌트를 렌더링한다.
```javascript
<Route exact path={PATH} component={COMPONENT} />
```

### `<Swtich>`와의 차이
`exact` 키워드만으로는 에러가 발생했을 때의 처리가 어렵다. 아래와 같은 라우터가 있을 때 지정되지 않은 url에 접근할 경우 `Error404` 컴포넌트를 렌더링 하지 않는다는 것을 확인할 수 있다. 

```javascript
<Router>
  <Route exact path="/" component={Foo} />
  <Route path="/bar" component={Bar} />
  <Route component={Error404} />
</Router>
```
이 문제를 해결하기 위한 방법으로 나온 것이 `<Switch>`이다. `<Swtich>`는 첫번째로 매칭되는 `path`를 가진 컴포넌트를 렌더링 시킨다. 이것이 `exact`와 다른점이며, 지정되지 않은 url에 접근 시 `Error404` 컴포넌트를 렌더링 시킨다는 것을 확인할 수 있다.

## `strict`
`strict` 키워드는 trailing slash가 있을 경우에만 일치한다.. 추가로 슬래시 뒤에 URL이 있는 경우엔 영향을 미치지 않는다.  

|path|location.path|match|
|------|---|---|
|`/one`|`/one`|`no`|
|`/one`|`/one/`|`yes`|
|`/one`|`/one/two`|`yes`|

`exact` 키워드와 함께 사용할 경우 이렇게 작동한다.

|path|location.path|match|
|------|---|---|
|`/one`|`/one`|`yes`|
|`/one`|`/one/`|`no`|
|`/one`|`/one/two`|`no`|

## `sensitive`
`sensitive` 키워드는 `case`를 검사한다.

|path|location.path|sensitive|match|
|------|---|---|----|
|`/one`|`/one`|`true`|`yes`|
|`/One`|`/one`|`true`|`no`|
|`/One`|`/one`|`false`|`yes`|
