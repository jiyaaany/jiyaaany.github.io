---
emoji: 📚
title: React Query
date: '2021-11-16 14:50:00'
author: 지걸
tags: react typescript react-query
categories: TIL
---

#시작하며
친구들과 프로젝트를 진행하면서 [React Query](https://react-query.tanstack.com/) 를 사용하게 되었습니다. 간단히 찾아보니 api등의 비동기 통신을 도와주는 라이브러리 라는 것으로 파악했습니다. 기존에도 `react`를 사용하여 프로젝트를 진행할 때 여러 비동기 통신을 해보았지만 단순 `axios`를 통해 통신하는 것만 경험해보았습니다. `React Query`를 살펴보며 왜 써야하는지? `axios`만 사용했을 때와 다른 점은 무엇인지 알아봅시다.

# `React Query`
`React Query`는 웹 서비스 요청에 의한 데이터를 관리하는데 도움을 주는 라이브러리 입니다. 실제 요청은 여전히 `fetch` 또는 `axios`를 사용하여 하고, `React Query`는 라이프 사이클의 적절한 시간에 요청하는 코드를 호출합니다. 또한 요청에 의한 데이터를 저장해두고, 필요한 때 데이터를 제공합니다.  
이 외에도 `React Query`는 캐싱 및 재요청 같은 수많은 기능을 제공하지만, 가장 큰 장점은 코드를 정리화한다는 것입니다.

## 사용법
```
npm i react-query
# or
yarn add react-query
```

데이터를 가져와야하는 컴포넌트 상위에 `QueryClientProvider` 컴포넌트가 필요합니다.
```javascript
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
  
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

### `React Query` 사용하기
`useQuery` 훅을 사용하여 데이터를 가져올 수 있습니다.
```typescript
type BlaBla = {
  text: string;
}

const { status, error, data } = useQuery<BlaBla, Error>(
  ['blabla', { id: 1 }],
  getBlaBla
);
```
`useQuery`는 첫 번째 인자로 고유한 키 값을 갖고, 두번째 인자로 실제 데이터를 요청하는 함수를 받습니다. 그리고 제네릭 타입 파라미터로 데이터와 에러의 타입을 받습니다.

- `status`: 데이터를 가져오는 상태를 의미합니다. (`"idle"`, `"error"`, `"loading"`, `"success"` )
- `error`: 데이터를 가져오는 중 에러가 발생한 경우 에러 객체를 포함합니다.
- `data`: 성공적으로 가져온 데이터를 포함합니다.

#`React Query`의 장점
- async/await 구문을 처리하기 위해 `useEffect`를 사용하지 않아도 됩니다. 응답 데이터를 상태에 저장하고 요청하는 도중에 컴포넌트의 마운트가 해제되는 경우를 처리할 필요가 없습니다. 이런 것들을 통해 `React Query`는 우리의 코드를 단순화할 수 있게 해줍니다.
- `React Query`는 다시 포커스가 활성화 되었을 때 자동으로 데이터를 다시 가져옵니다. (필요에 따라 비활성화도 가능합니다.)
- 요청 시 오류가 발생하면 최대 3번까지 자동으로 재요청합니다. 

# 마치며
전 회사에서 제품을 만들며 겪었던 문제들을 쉽게 해결할 수 있도록 도와주는 라이브러리다. (지금은 도입할 수 없지만..) 

## Refer
> https://www.carlrippon.com/getting-started-with-react-query-and-typescript/
