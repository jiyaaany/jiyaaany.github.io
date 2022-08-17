---
emoji: 😌
title: (그리디) 프로그래머스 큰 수 만들기 (level 2)
date: '2022-08-17 14:43:00'
author: 지걸
tags: algorithm greedy
categories: algorithm
---


```javascript
function solution(number, k) {
  let answer = [];
  let length = k;

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && answer.length && number[i] > answer[answer.length - 1]) {
      answer.pop();
      k--;
    }

    answer.push(number[i]);
  }

  return answer.join('').slice(0, number.length - length);
}
```

프로그래머스 그리디 코딩테스트 문제 중 `큰 수 만들기` 문제이다.
### 처음에는,
각 자릿 수에 들어갈 수 있는 숫자 중 (`number`의 일부) 가장 큰 값을 순차적으로 배열하도록 시도했다.
이렇게 해보았을 때도 시간초과 없이 `O(N^2)` 으로 작성할 수 있는데, 전체 테스트 케이스 중 10번에서 런타임 오류가 발생한다.
결국 10번에 대한 반례를 찾지 못하여 다른 방법으로 접근해보았다.

### 해결 방법
stack 자료구조를 사용해서 `number`를 순회하며 stack 에 이미 포함되어 있는 수보다 크거나 같을 경우
stack 에 추가해주었다. 그리고 k 만큼의 수를 제외한 값을 리턴해주었다.

이렇게 풀고나니 코드가 한결 짧고 깔끔하다 .. 삽질 열심히 했네 🥹