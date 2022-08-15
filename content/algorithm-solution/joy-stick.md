---
emoji: 😌
title: [그리디] 프로그래머스 조이스틱 (level 2)
date: '2022-08-15 21:50:00'
author: 지걸
tags: algorithm greedy
categories: algorithm 
---

```javascript
function solution(name) {
  let answer = 0;
  const length = name.length;

  let unicodeA = 65;
  let unicodeZ = 90;

  for (let i in name) {
    let unicodeAlphabet = Math.abs(unicodeA - name[i].charCodeAt(0)) > 13
    ? Math.abs(unicodeZ - name[i].charCodeAt(0)) + 1
      : Math.abs(unicodeA - name[i].charCodeAt(0));
    answer += unicodeAlphabet;
  }

  let move = length - 1;

  for (let i = 0; i < length; i++) {
    let nextIdx = i + 1
    while (nextIdx < length && name[nextIdx] === 'A') {
      nextIdx++;
    }
    let distance = Math.min(i, length - nextIdx);
    move = Math.min(move, i + length - nextIdx + distance);
  }

  answer += move;
  return answer;
}

console.log('hh', solution('JAN'));
```

프로그래머스 그리디 코딩테스트 문제 중 조이스틱 문제이다.
가장 찾기 어려웠던 포인트는 `unicodeAlphabet` 을 구하는 것인데, 기존에는 13 이라는 상수를 쓰지 않고
어떻게든 계산식을 만들어보려고 했으나, A-Z 로 이동하는 것까지 감안해야하는 것과 단순 unicode 를 구할 경우 1의 오차가 생기는 예외들을
처리하지 못했다.

13번째 알파벳인 'O' 부터는 Z에서 출발하는 것이 더 이득이다. 알파벳과 같이 개수가 한정되어 있는 경우
상수를 사용하여 쉽게 풀 수 있다.
