---
emoji: 💻
title: 자주 쓰이는 쉘 명령어
date: '2021-10-22 09:58:00'
author: 지걸
tags: linux cmd zsh
categories: TIL
---
# 사용 중인 포트 찾고 kill하기
**찾기**
```
lsof -i :{PORT}
```
**kill**
```
kill -9 {PID}
```
PID는 찾기 명령어를 통해 알아낼 수 있다.