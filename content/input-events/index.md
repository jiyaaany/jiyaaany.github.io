---
emoji: 💻
title: input change, input 이벤트
date: '2021-10-21 14:40:00'
author: 지걸
tags: javascript html5
categories: TIL
---
# 시작하며
input 요소의 값이 변경될 때 캐치할 수 있는 이벤트는 `input`과 `change`가 있다. 이 둘의 차이점에 대해 알아보자.

# `input` VS `change`
`input` 이벤트는 `change` 이벤트와 다르게 `value`가 바뀔 때마다 반드시 일어난다. [stackoverflow 답변](https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element)에 더 자세한 차이점을 설명해주고 있다.  
`oninput`: 사용자 인터페이스를 통해 텍스트 내용이 변경될 때 발생한다. (텍스트 내용의 변경사항)  
`onchange`: 값을 선택하거나 옵션 선택하자마자, 한글 입력의 경우 한글자가 완성된 뒤 다른 키를 입력(예: 엔터 키)이 일어나야 발생된다. `<input>`, `<select>`, `<textarea>` 태그에서 사용이 가능하다.
- `<input>`: 값의 변경 + 포커스 이동
- `<select>`: 옵션이 변경되었을 때

# Ref
https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element  
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event