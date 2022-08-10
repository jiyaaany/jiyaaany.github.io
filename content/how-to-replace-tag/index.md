---
emoji: 🧐
title: 동적으로 HTML 태그를 삽입하는 방법
date: '2022-08-10 14:17:00'
author: 지걸
tags: javascript
categories: javascript
---

# 시작하며
기존에 있던 태그를 수정하거나 값을 또 다른 태그로 감싸주어야 할 때 유용하게 사용할 수 있는 코드를 소개합니다.

## 정규식을 사용해 바꿀 부분 찾기
```javascript
new RegExp(`(${keyword})`, 'gi')
```
여기서 g 는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그이고, i 는 대소문자를 구별하지 않고
탐색할 수 있는 플래그입니다.

## 찾은 부분을 `replaceAll` 을 사용하여 변경하기
```javascript
ddududdudu.replaceAll(new RegExp(`(${keyword})`, 'gi'), '<span class="ddudu-class">$1</span>');
```