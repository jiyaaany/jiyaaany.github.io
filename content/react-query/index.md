---
emoji: π
title: React Query
date: '2021-11-16 14:50:00'
author: μ§κ±Έ
tags: react typescript react-query
categories: TIL
---

#μμνλ©°
μΉκ΅¬λ€κ³Ό νλ‘μ νΈλ₯Ό μ§ννλ©΄μ [React Query](https://react-query.tanstack.com/) λ₯Ό μ¬μ©νκ² λμμ΅λλ€. κ°λ¨ν μ°Ύμλ³΄λ apiλ±μ λΉλκΈ° ν΅μ μ λμμ£Όλ λΌμ΄λΈλ¬λ¦¬ λΌλ κ²μΌλ‘ νμνμ΅λλ€. κΈ°μ‘΄μλ `react`λ₯Ό μ¬μ©νμ¬ νλ‘μ νΈλ₯Ό μ§νν  λ μ¬λ¬ λΉλκΈ° ν΅μ μ ν΄λ³΄μμ§λ§ λ¨μ `axios`λ₯Ό ν΅ν΄ ν΅μ νλ κ²λ§ κ²½νν΄λ³΄μμ΅λλ€. `React Query`λ₯Ό μ΄ν΄λ³΄λ©° μ μ¨μΌνλμ§? `axios`λ§ μ¬μ©νμ λμ λ€λ₯Έ μ μ λ¬΄μμΈμ§ μμλ΄μλ€.  
> **22.02.24 μΆκ°**  
> μ°μν νν¬ μΈλ―Έλμμ React Queryλ₯Ό μκ°ν λ΄μ©μ΄ μμ΄ μΆκ° μ λ¦¬ν©λλ€.

# `React Query`
`React Query`λ μΉ μλΉμ€ μμ²­μ μν λ°μ΄ν°λ₯Ό κ΄λ¦¬νλλ° λμμ μ£Όλ λΌμ΄λΈλ¬λ¦¬ μλλ€. μ€μ  μμ²­μ μ¬μ ν `fetch` λλ `axios`λ₯Ό μ¬μ©νμ¬ νκ³ , `React Query`λ λΌμ΄ν μ¬μ΄ν΄μ μ μ ν μκ°μ μμ²­νλ μ½λλ₯Ό νΈμΆν©λλ€. λν μμ²­μ μν λ°μ΄ν°λ₯Ό μ μ₯ν΄λκ³ , νμν λ λ°μ΄ν°λ₯Ό μ κ³΅ν©λλ€.  
μ΄ μΈμλ `React Query`λ μΊμ± λ° μ¬μμ²­ κ°μ μλ§μ κΈ°λ₯μ μ κ³΅νμ§λ§, κ°μ₯ ν° μ₯μ μ μ½λλ₯Ό μ λ¦¬ννλ€λ κ²μλλ€.

## μ¬μ©λ²
```
npm i react-query
# or
yarn add react-query
```

λ°μ΄ν°λ₯Ό κ°μ ΈμμΌνλ μ»΄ν¬λνΈ μμμ `QueryClientProvider` μ»΄ν¬λνΈκ° νμν©λλ€.
```javascript
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
  
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

### `React Query` μ¬μ©νκΈ°
`useQuery` νμ μ¬μ©νμ¬ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ μ μμ΅λλ€.
```typescript
type BlaBla = {
  text: string;
}

const { status, error, data } = useQuery<BlaBla, Error>(
  ['blabla', { id: 1 }],
  getBlaBla
);
```
`useQuery`λ μ²« λ²μ§Έ μΈμλ‘ κ³ μ ν ν€ κ°μ κ°κ³ , λλ²μ§Έ μΈμλ‘ μ€μ  λ°μ΄ν°λ₯Ό μμ²­νλ ν¨μλ₯Ό λ°μ΅λλ€. κ·Έλ¦¬κ³  μ λ€λ¦­ νμ νλΌλ―Έν°λ‘ λ°μ΄ν°μ μλ¬μ νμμ λ°μ΅λλ€.

- `status`: λ°μ΄ν°λ₯Ό κ°μ Έμ€λ μνλ₯Ό μλ―Έν©λλ€. (`"idle"`, `"error"`, `"loading"`, `"success"` )
- `error`: λ°μ΄ν°λ₯Ό κ°μ Έμ€λ μ€ μλ¬κ° λ°μν κ²½μ° μλ¬ κ°μ²΄λ₯Ό ν¬ν¨ν©λλ€.
- `data`: μ±κ³΅μ μΌλ‘ κ°μ Έμ¨ λ°μ΄ν°λ₯Ό ν¬ν¨ν©λλ€.

#### `useQuery` Option
- enabled: μλμΌλ‘ queryλ₯Ό μ€νμν¬μ§ λ§μ§ μ¬λΆ (μ»΄ν¬λνΈ λ§μ΄νΈ μ μλ μ€ν λ°©μ§)
- select: μ±κ³΅ μ κ°μ Έμ¨ dataλ₯Ό κ°κ³΅

#### μμ°¨μ μΌλ‘ μ€ννκ³  μΆμ APIλ₯Ό νΈμΆν΄μΌ ν  λ
- enabled μ΅μμ `false`λ‘ λκ³  refetch ν¨μλ₯Ό μ μνλ€.
- enabled μ΅μμ μ΄ μ μ μ€ννλ APIμ μλ΅ κ° λλ νλλ₯Ό λ£λλ€.

#### `useQuery` μλ΅ κ°μ μ¬μ©ν΄ actionμ μμ±ν΄μΌ νλ κ²½μ°
- `useQuery` onSuccessμ μ μνλ€.

# Mutation
> Optimistic update ?  
> `useMutation`μ `onMutate`μ κ²½μ° Optimistic update μ μ© ν  λ μ μ©νλ€.  
> Optimistic updateλ API νΈμΆμ ν΄μΌνλ κ²½μ°μ, νΈμΆ μ  APIκ° λμν  κ²μ΄λΌκ³  μμνκ³  λ―Έλ¦¬ UIλ₯Ό μλ°μ΄νΈ ν΄λλ κ²μ΄λ€. (API νΈμΆ μ€ν¨ μ λ€μ λ‘€λ°±)

#`React Query`μ μ₯μ 
- async/await κ΅¬λ¬Έμ μ²λ¦¬νκΈ° μν΄ `useEffect`λ₯Ό μ¬μ©νμ§ μμλ λ©λλ€. μλ΅ λ°μ΄ν°λ₯Ό μνμ μ μ₯νκ³  μμ²­νλ λμ€μ μ»΄ν¬λνΈμ λ§μ΄νΈκ° ν΄μ λλ κ²½μ°λ₯Ό μ²λ¦¬ν  νμκ° μμ΅λλ€. μ΄λ° κ²λ€μ ν΅ν΄ `React Query`λ μ°λ¦¬μ μ½λλ₯Ό λ¨μνν  μ μκ² ν΄μ€λλ€.
- `React Query`λ λ€μ ν¬μ»€μ€κ° νμ±ν λμμ λ μλμΌλ‘ λ°μ΄ν°λ₯Ό λ€μ κ°μ Έμ΅λλ€. (νμμ λ°λΌ λΉνμ±νλ κ°λ₯ν©λλ€.)
- μμ²­ μ μ€λ₯κ° λ°μνλ©΄ μ΅λ 3λ²κΉμ§ μλμΌλ‘ μ¬μμ²­ν©λλ€. 

# λ§μΉλ©°
μ  νμ¬μμ μ νμ λ§λ€λ©° κ²ͺμλ λ¬Έμ λ€μ μ½κ² ν΄κ²°ν  μ μλλ‘ λμμ£Όλ λΌμ΄λΈλ¬λ¦¬λ€. (μ§κΈμ λμν  μ μμ§λ§..) 

## Refer
> https://www.carlrippon.com/getting-started-with-react-query-and-typescript/
