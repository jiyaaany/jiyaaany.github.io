---
emoji: 🙀
title: 프로그래머스 과제관 고양이 사진 검색 사이트를 진행하며 사용한 JavaScript
date: '2021-12-03 14:51:00'
author: 지걸
tags: javascript
categories: TIL
---
# 시작하며
프로그래머스 과제관에 있는 [고양이 사진 검색 사이트](https://programmers.co.kr/skill_check_assignments/4) 과제를 진행하며 JavaScript 면접 질문으로 자주 만나는 개념에 대해 정리해보았습니다.

# JavaScript
## this
### 기본 바인딩 (전역객체)
일반적으로 `this`는 자바스크립트 환경의 전역 객체입니다. (브라우저의 window 객체)  
`this`의 첫번째 동작 방식은 전역 객체(window)를 context 객체로 갖는 것 입니다.

### 암시적 바인딩
```javascript
function zzz() {
  console.log(this.a);
}

var foo = {
  a: 20,
  bar: zzz,
  bla: function() {
    console.log(this.a);
  }
}

foo.bar() // 20
foo.bla() // 20
```
어떤 객체(foo)를 통해 함수가 호출된다면 이때의 `this`의 context 객체는 호출한 어떤 객체(foo)입니다.

```javascript
var b = 100;

this.blabla = foo.bar;
this.blabla(); // 100
```
첫 번째 코드의 전역 스코프에 위 코드를 추가한다면 `this`의 context 객체는 다시 전역 객체(window)가 됩니다.  
전역 스코프에서 생성한 변수는 전역 객체에 등록되기 때문입니다.

### 명시적 바인딩
```javascript
function foo() {
  console.log(this);
}

var obj = { name: 'jigeol' };
foo.call(obj);
```
`call()` 메서드는 첫번째 인자로 넘겨주는 것이 `this` context 객체입니다. 이 외에도 `apply`, `bind` 메서드를 통해 `this` context 객체를 지정해주는 방식을 명시적 바인딩이라고 합니다.

### new 바인딩
```javascript
function foo(a) {
  this.a = a;
  this.b = 20;
}

var bar = new foo(2);
```
자바스크립트에서 `new` 키워드는 자바의 클래스 인스턴스 화가 아니라 `foo` 함수 실행과 같습니다.

### 바인딩의 우선 순위
`new` 바인딩 >= 명시적 바인딩 >>>> 암시적 바인딩 >= 기본 바인딩
> 기본 바인딩은 `new` 바인딩, 명시적 바인딩, 암시적 바인딩 케이스가 있을 경우 발생되지 않습니다.

#### `new` 바인딩 & 명시적 바인딩 VS 암시적 바인딩
```javascript
function foo(bar) {
  this.a = bar;
}

var obj1 = {
  foo: foo
}

obj1.foo(2) // 암시적 바인딩
console.log(obj1.a) // 2

var obj2 = {};

obj1.foo.call(obj2, 3); // 암시적 바인딩한 후 obj2라고 명시적 바인딩
console.log(obj1.a) // 2
console.log(obj2.a) // 3

var obj3 = new obj1.foo(10) // new 바인딩
console.log(obj1.a) // 2
console.log(obj2.a) // 3
console.log(obj3.a) // 10
```
암시적 바인딩 한 객체(obj1)를 명시적 바인딩 & `new`바인딩을 해보아도 obj1 객체의 값은 변경되지 않습니다. 새로 생성된 객체들(obj2, obj3)에 적용됩니다.

#### `new` 바인딩 VS 명시적 바인딩
```javascript
function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1); // 명시적 바인딩
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3); // new 바인딩
console.log(obj1.a); // 2
console.log(baz.a); // 3
```
### Arrow Function
화살표 함수로 표한할 수 있는 문법에서의 `this`는 특별하게 작용합니다.  
화살표 함수가 선언된 스코프의 `this` context 객체를 사용합니다.
```javascript
var a = 10;
var b = 20;
var obj = {
  a: 1,
  func: () => console.log(this.a)
}

obj.func(); // 10

// Arror Function
function test() {
  console.log(this);
  return () => console.log(this.b);
}

var f1 = test();
f1(); // 20
var context = { b: 999 };
var f2 = test.call(context);
f2(); // 999

// function()
function test2() {
  console.log(this);
  return funtion() {
    console.log(this.b);
  }
}

var f3 = test2();
f3(); // 20
var f4 = test2.call(context);
f4(); // 20
```

## 이벤트 버블링 & 이벤트 캡쳐링
### addEventListener
기본적으로 이벤트는 하위요소에서부터 상위요소로 전달됩니다.
```html
<section class="container">
  <div class="inner">
    <button class="close">버튼이에용</button>
  </div>
</section>
```
```javascript
document.getElementsByClassName("container").addEventListener('click', () => {
  console.log("I'm container!");
})

document.getElementsByClassName("inner").addEventListener('click', () => {
  console.log("I'm inner!");
})

document.getElementsByClassName("close").addEventListener('click', () => {
  console.log("I'm close button!");
})
```
위 같은 코드가 있다면 버튼을 클릭했을 때 아래와 같은 콘솔의 모습을 볼 수 있습니다. 
```
I'm close button!
I'm inner!
I'm container!
```
`addEventListener`는 세번째 인자로 `useCapture`라는 파라미터를 받고 있습니다. 기본값으론 `false`이고 캡쳐링을 사용할건지를 설정하는 파라미터입니다. 
위 코드 중 이렇게만 바꾼다면?
```javascript
document.getElementsByClassName("container").addEventListener('click', () => {
  console.log("I'm container!");
}, true)
```
결과는 이렇습니다.
```
I'm container!
I'm close button!
I'm inner!
```
