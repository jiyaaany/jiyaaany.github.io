---
emoji: π¬
title: Typescript π€π»
date: '2021-10-27 16:26:00'
author: μ§κ±Έ
tags: typescript
categories: TIL
---
# μμνλ©°
Typescript 3.5 λ²μ μμ `Omit`μ΄λΌλ ν¬νΌνμμ΄ μΆκ°λμλ€. Omitμ **λΉΌλ€** λΌλ λ»μ κ°μ§κ³  μλ€. νμμ€ν¬λ¦½νΈμ [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) μ λ³΄λ©΄ Omit μΈμλ μ¬λ¬ κ°μ§ νμμ΄ μλλ°,

- `Exclude<Type, ExcludedUnion>`  
`Type` νμμμ `ExcludedUnion` νμμ μ κ±°ν μλ‘μ΄ νμμ λ§λλ νμμ΄λ€.
```typescript
type T = Exclude<"a" | "b" | "c", "a">;
type T = "b" | "c";
```

- `Pick<Type, Keys>`  
`Type`(`Todo`)μμ ν€ μμ± μ§ν©(λ¬Έμμ΄ λ¦¬ν°λ΄ λλ λ¬Έμμ΄ λ¦¬ν°λ΄ μ‘°ν© -> `title`, `completed`)μ μ ννμ¬ μλ‘μ΄ μ νμ μμ±νλ€.
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
`Type`μμ λͺ¨λ  μμ±μ μ νν λ€μ `Keys`(λ¬Έμμ΄ λ¦¬ν°λ΄ λλ λ¬Έμμ΄ λ¦¬ν°λ΄μ μ‘°ν©)μ μ κ±°νμ¬ μλ‘μ΄ μ νμ μμ±νλ€.
```typescript
type TodoPreviw = Omit<Todo, "description">;

const todo: TodoPreviw = {
  title: 'Clean room',
  completed: false,
}
```

# λ§μΉλ©°
νμμ€ν¬λ¦½νΈλ₯Ό μ²μ μ¬μ©ν  λ μΌμΌμ΄ μ μΈν΄μ€μΌνλ€λ λ²κ±°λ‘μμ΄ μμλλ° μ¬λ¬ ν¬νΌνμμΌλ‘ νμμ μ¬μ¬μ©ν  μ μλλ‘ λ°μ νκ³  μλ€. λ€λ₯Έ ν¬νΌνμλ€λ κ³΅λΆν΄λλ©΄ μ¬λ¬ λ² μ μΈλλ κ²μ λ§μ μ μμ κ² κ°λ€.

## Refer
https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys  
https://www.youtube.com/watch?v=yhxF6ycENlg