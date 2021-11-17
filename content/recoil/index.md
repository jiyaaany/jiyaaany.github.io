---
emoji: 💻
title: Recoil
date: '2021-10-27 17:33:00'
author: 지걸
tags: react typescript javascript recoil
categories: TIL
---
# 시작하며
[니팅](https://github.com/k-roffle/knitting-frontend) 프로젝트를 진행하며 recoil이라는 상태 관리 라이브러리르 처음 사용해보았다. 기존에 구성이 다 잡혀있어서 새로운 상태 추가, 기존에 있던 상태 사용 등의 것들만 해보았는데 프로젝트에서 recoil을 사용하는 방법과 atom, selector에 대한 개념적인 부분이 부족하다고 생각하여 [공식문서](https://recoiljs.org/ko/) 를 읽어보았다.

# Recoil
Recoil은 React를 위한 상태관리 라이브러리이다.
- 작고 React스러운  
Recoil은 React처럼 작동하고 생각합니다. 앱에 추가하여 빠르고 유연한 공유되는 상태를 사용해보세요.
- 데이터 흐름 그래프  
파생 데이터와 비동기 쿼리는 순수 함수와 효율적인 구독으로 관리됩니다.
- 교차하는 앱 관찰  
코드 분할을 손상시키지 않고 앱 전체의 모든 상태 변경을 관찰하여 지속성, 라우팅, 시간 이동 디버깅 또는 실행 취소를 구현합니다.
## 주요 개념
### 개요
Recoil을 사용하면 atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 **data-flow graph**를 만들 수 있다. Atoms는 컴포넌트가 구독할 수 있는 상태의 단위다. Selectors는 atoms 상태값을 동기 또는 비동기 방식을 통해 변환한다.
### Atoms
Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다. atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다.
```javascript
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14
});
```
Atom는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요하다. 키 값은 전역적으로 고유하도록 해야한다. React 컴포넌트의 상태처럼 기본값도 가진다.
컴포넌트에서 atom을 읽고 쓰려면 `useRecoilState`라는 훅을 사용한다. `useState`와 비슷하지만 컴포넌트 간에 공유될 수 있다는 차이가 있다.
```javascript
const [fontSize, setFontSize] = useRecoilState(fontSizeState);
```

#### 추가설명
`atom()`함수는 쓰기 가능한 `RecoilState` 객체를 반환한다. [자세한 설명](https://recoiljs.org/ko/docs/api-reference/core/atom/)  
**atom과 상호작용하기 위해 자주 사용되는 Hooks**
- `useRecoilState()`: atom을 읽고 쓰려고 할 때 사용하는 Hook
- `useRecoilValue()`: atom을 읽기만 할 때 사용하는 Hook
- `useSetRecoilState()`: atom에 쓰려고만 할 때 사용하는 Hook
- `useResetRecoilState()`: atom을 초기값으로 초기화할 때 사용하는 Hook


### Selectors
**Selector**는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)다. 상위의 atoms, selectors가 업데이트되면 하위의 selector 함수도 다시 실행된다. 컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링 된다.  
Selectors는 상태를 기반으로 파생되는 데이터를 계산하는데에 사용된다. 최소한의 상태 집합만 atoms에 저장하고 다른 파생 데이터는 selectors에 명시된 함수를 통해 계산함으로써 쓸모없는 상태의 보존을 방지한다.  
```javascript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';
    
    return `${fontSize}${unit}`;
  }
})
```
`get`속성은 계산될 함수다. 전달되는 `get` 인자를 통해 atoms와 다른 selectors에 접근할 수 있다. 다른 것들에 접근하면 종속 관계가 생성되므로, 다른 것들이 업데이트되면 이 함수도 다시 실행된다.  
Selectors는 `useRecoilValue()`를 사용해 읽을 수 있다. `useRecoilValue()`는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다.

## Recoil 시작하기
### RecoilRoot
recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 `RecoilRoot`가 필요하다. 루트 컴포넌트가 가장 좋은 장소다.

## 마치며
공식문서에선 [비동기 데이터 쿼리](https://recoiljs.org/ko/docs/guides/asynchronous-data-queries) 나 [테스팅](https://recoiljs.org/ko/docs/guides/testing) 방법에 대해서도 가이드해주고 있다. 실제 프로젝트에서 사용 시 문서를 참고하면 좋을 것 같다. 
