---
emoji: 🙈
title: CSS 애니메이션
date: '2022-05-04 13:24:00'
author: 지걸
tags: javascript CSS
categories: TIL
---

# `transition` VS `animation`
`transition`은 요소의 상태가 변할 때 애니메이션을 실행한다. `animation` 속성은 요소의 모양과 동작을 키프레임 단위로 변경할 수 있다.
키프레임 동작은 재생 횟수, 방향 등 여러 속성으로 제어할 수 있다.  
가장 큰 차이는 `transition` 은 요소의 상태가 바뀔 때의 상태를 애니메이션으로 표현하지만, `animation` 속성은 요소의 상태 변화와 상관없이
애니메이션을 실행한다. 또한 `@keyframse` 속성으로 프레임을 추가할 수 있다.

transition의 예)
```css
.box {
    width: 100px;
    height: 100px;
    transition: width 2s, height 2s; // 요소의 상태 변화
    
    &:hover {
        width: 200px;
        height: 200px;
    }
}
```

# `animation`
- `animation-name`: `@keyframes` 규칙을 준수 해 정의한 애니메이션 이름
- `animation-duration`: 애니메이션이 얼마에 걸쳐 일어날지 결정
- `animation-delay`: 로드 이후 어느 정도 텀을 두어 애니메이션이 시작될지 지정
- `animation-direction`: 애니메이션의 방향 지정
- `animation-iteration-count`: 애니메이션이 몇 번 반복될지 지정 `infinite`로 지정하면 무한반복
- `animation-play-state`: 애니메이션을 멈추거나 다시 시작
- `animation-timing-function`: 중간 상태들의 전환 간격을 지정
- `animation-fill-mode`: 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정

# animation의 성능 문제
- `margin`, `height` 속성은 애니메이션에 사용했을 때 성능 저하를 유발한다.  
- 윌보이드 - [부드러운 애니메이션 만드는 방법](https://www.youtube.com/watch?v=bEoLCZzWZX8)
  - 부드러운 애니메이션을 적용하려면 `reflow`와 `repaint`를 최소화 시켜야 한다.  
- [reflow / repaint가 발생하는 속성](https://docs.google.com/spreadsheets/u/0/d/1Hvi0nu2wG3oQ51XRHtMv-A_ZlidnwUYwgQsPQUg1R2s/pub?single=true&gid=0&output=html)

## reflow를 최소화하는 방법
1. 클래스 변화에 따른 스타일의 변화를 원할 경우, 최대한 DOM 구조 안쪽에 위치한 노드에 추가합니다.
2. 애니메이션이 들어간 요소는 가급적 `position: fixed` 또는 `position: absolute`로 지정합니다.
   - 다른 요소에는 영향을 끼치지 않으므로 해당 요소만 reflow가 발생합니다.
3. JS를 통해 스타일 변화를 줄 경우, 가급적 한번에 처리합니다.
4. 인라인 스타일을 최대한 배제합니다.
5. 테이블 레이아웃을 피하는 것이 좋습니다.
- 테이블 레이아웃은 넓이를 계산하면서 렌더링이 느려집니다. 꼭 필요한 경우를 제외하곤 테이블 레이아웃을 사용하지 않는 것이 좋습니다. 만약 사용한다면 CSS 속성 
`table-layout: fixed`를 사용하면 조금 더 빠르게 렌더링 할 수 있습니다.
6. CSS 하위선택자는 필요한 만큼 정리하는 것이 좋습니다.

변경을 미리 감지하여 알려주는 [will-change](https://wit.nts-corp.com/2017/06/05/4571) 방법도 있는데 이건 나중에 봐야지 ..  
애니메이션 키프레임의 경우 CPU를 많이 사용하여 자칫 부하를 가져다줄 수 있는데 다른 방법으로 GPU를 사용하도록 유도할 수 있다. [링크](http://daplus.net/css-css-%ED%82%A4-%ED%94%84%EB%A0%88%EC%9E%84-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-cpu-%EC%82%AC%EC%9A%A9%EB%9F%89%EC%9D%B4-%EB%86%92%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%A0%87%EA%B2%8C/)

# Ref
https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
https://webclub.tistory.com/621
https://wit.nts-corp.com/2017/06/05/4571
http://daplus.net/css-css-%ED%82%A4-%ED%94%84%EB%A0%88%EC%9E%84-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-cpu-%EC%82%AC%EC%9A%A9%EB%9F%89%EC%9D%B4-%EB%86%92%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%A0%87%EA%B2%8C/
