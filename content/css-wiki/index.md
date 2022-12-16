---
emoji: 💬
title: CSS 백과사전 📚
date: '2022-12-16 21:00:00'
author: 지걸
tags: CSS
categories: CSS
---

# 마진 상쇄 (Margin-collapsing)
> MDN  
> 블록의 top 및 bottom 마진은 때로 결합되는 마진 중 크기가
> 가장 큰 마진으로 결합(combine, 상쇄(collapsed)) 됩니다.

어떤 두 개의 블록 요소의 상하 마진이 겹칠 때 한 쪽의 값만 적용되는 현상이다.
## 마진 상쇄가 일어나는 상황
1. 인접 형제 박스 간 상하 마진이 겹칠 때  
겹쳐진 두 마진 중 더 큰 마진 값으로 상쇄해 렌더링한다. 
2. 빈 요소의 상하 마진이 겹칠 때  
'빈 요소'란 높이(height)가 0인 상태의 요소를 말한다.
- height / min-height / padding / border 등 상하로 늘어나는 값을 명시적으로 주지 않을 경우
- 내부에 Inline 콘텐츠가 존재하지 않는 요소
3. 부모 박스와 첫 번째 자식 박수의 마진이 겹칠 때  
그래서 이럴 경우 부모 박스에 padding을 주어 간격을 유지하는 것이 안전하다.

## 마진 상쇄 규칙
- 마진 상쇄는 인접한 두 요소가 온전한 **block-level** 요소일 때만 적용  
  (inline, inline-block, table-cell, table-caption 요소는 block-level이 아님)
- 마진 값이 0이더라도 상쇄 규칙은 적용
- 좌우 마진은 겹치더라도 상쇄 X

## 마진 상쇄 규칙 예외
- `position: absolute`
- `float: left / right` (단, clear 되지 않은 상태)
- `display: flex` 일 때 내부 flex box item
- `display: grid` 일 때 내부 grid item