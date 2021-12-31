---
emoji: 🌎
title: 브라우저는 어떤 과정을 통해 렌더링 될까?
date: '2021-12-31 10:57:00'
author: 지걸
tags: browser CS
categories: TIL
---
# 시작하며
기존에 알고 있던 브라우저 렌더링 과정과 추가적으로 알게 된 개념인 Reflow, Repaint를 정리하는 글입니다.

# 브라우저 렌더링
1. 브라우저가 URI를 통해 서버로 요청한다.
2. 서버는 요청한 데이터를 HTML로 파싱할 수 있는 형태로 응답한다.
3. 응답 받은 데이터를 파싱하여 DOM, CSSOM을 생성한다.
4. DOM 트리와 CSSOM 트리를 매핑하여 Render 트리를 생성한다.
5. Render 트리를 바탕으로 Layout을 그리고 화면에 보여준다.

## Reflow & Repaint
Reflow는 요소의 추가, 변경, 삭제로 인해 Layout 단계를 다시 수행하는 것을 말합니다. 이때 Render 트리 요소를 바탕으로 크기와 위치를 다시 계산하게 됩니다.  
> **Reflow가 발생할 수 있는 상황**
> - 페이지 초기 렌더링 시 Layout 단계
> - 윈도우 사이즈가 변경될 때
> - 노드가 추가되거나 제거될 때
> - 요소의 위치, 크기가 변경되었을 때 (margin, padding, border, width, height 등)
> - 폰트가 변경되거나 텍스트, 이미지가 변경될 때

Repaint는 Render 트리에 다시 그리는 과정을 말합니다. Reflow 후에 발생되거나 스타일 속성이 변경되었을 때 발생합니다.

```
Reflow와 Repaint 과정이 많이 발생될 경우 다시 계산하고 그리는 작업이 수행되기 때문에 성능 저하 문제가 생길 수 있습니다. 
그래서 우리는 Repaint, Reflow 가 발생하는 횟수를 최소화하는 것이 좋습니다.
```

# 마치며
## Refer
https://velog.io/@shyunju7/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%EB%A9%B4%EC%A0%91-%ED%9B%84%EA%B8%B0
