---
emoji: 💬
title: Typescript 🤙🏻
date: '2021-10-27 16:26:00'
author: 지걸
tags: typescript
categories: TIL
---
# 시작하며
Typescript 3.5 버전에서 `Omit`이라는 헬퍼타입이 추가되었다. Omit은 **빼다** 라는 뜻을 가지고 있다. 타입스크립트의 [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) 에 보면 Omit 외에도 여러 가지 타입이 있는데,

- `Exclude<Type, ExcludedUnion>`  
`Type` 타입에서 `ExcludedUnion` 타입을 제거한 새로운 타입을 만드는 타입이다.
```typescript
type T = Exclude<"a" | "b" | "c", "a">;
type T = "b" | "c";
```

- `Pick<Type, Keys>`  
`Type`(`Todo`)에서 키 속성 집합(문자열 리터럴 또는 문자열 리터럴 조합 -> `title`, `completed`)을 선택하여 새로운 유형을 생성한다.
```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

# `Omit<Type, Keys>`
`Type`에서 모든 속성을 선택한 다음 `Keys`(문자열 리터럴 또는 문자열 리터럴의 조합)을 제거하여 새로운 유형을 생성한다.
```typescript
type TodoPreviw = Omit<Todo, "description">;

const todo: TodoPreviw = {
  title: 'Clean room',
  completed: false,
}
```

# `infer`
Typescript `infer` 키워드는 조건식에 따라 참일 경우 사용할 수 있다. 
`Element<number> extends Element<infer U>`와 같은 타입이 있다고 했을 때, `U`타입은 `number`로 추론(infer)할 수 있다.  


# 마치며
타입스크립트를 처음 사용할 때 일일이 선언해줘야한다는 번거로움이 있었는데 여러 헬퍼타입으로 타입을 재사용할 수 있도록 발전하고 있다. 다른 헬퍼타입들도 공부해두면 여러 번 선언되는 것을 막을 수 있을 것 같다.

## Refer
https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys  
https://www.youtube.com/watch?v=yhxF6ycENlg
