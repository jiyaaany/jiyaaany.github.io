---
emoji: 😻
title: 고양이 검색 과제
date: '2022-09-07 17:29:00'
author: 지걸
tags: react javascript
categories: react TIL
---
# Grid
- `display: grid`: 요소를 격자 형태로 배치
- `display: inline-grid`: 요소를 격자 형태로 배치하는 것은 동일하지만 `inline` 속성과 동일하게 내용 크기 만큼만 자리를 차지한다.
- `grid-template-columns`: grid 요소의 한 컬럼에 배치할 하위 요소들의 사이즈를 정하는 속성

# Event
- `currentTarget` VS `target`: currentTarget 은 실제 이벤트가 발생한 요소를 가져오고 target 은 이벤트가 등록된 요소를 반환한다.

# Button
1. `input type='button` 일 경우
   buttonElement 에서 value 속성을 주면 버튼의 텍스트를 설정할 수 있다.
2. `button` 태그 일 경우
   button 태그일 경우 buttonElement 에서 innerText를 주어 버튼 내의 텍스트를 변경할 수 있다.