---
emoji: π
title: νλ‘κ·Έλλ¨Έμ€ κ³Όμ κ΄ κ³ μμ΄ μ¬μ§ κ²μ μ¬μ΄νΈλ₯Ό μ§ννλ©° μ¬μ©ν JavaScript
date: '2021-12-03 14:51:00'
author: μ§κ±Έ
tags: javascript
categories: TIL
---
# μμνλ©°
νλ‘κ·Έλλ¨Έμ€ κ³Όμ κ΄μ μλ [κ³ μμ΄ μ¬μ§ κ²μ μ¬μ΄νΈ](https://programmers.co.kr/skill_check_assignments/4) κ³Όμ λ₯Ό μ§ννλ©° JavaScript λ©΄μ  μ§λ¬ΈμΌλ‘ μμ£Ό λ§λλ κ°λμ λν΄ μ λ¦¬ν΄λ³΄μμ΅λλ€.

# JavaScript
## this
### κΈ°λ³Έ λ°μΈλ© (μ μ­κ°μ²΄)
μΌλ°μ μΌλ‘ `this`λ μλ°μ€ν¬λ¦½νΈ νκ²½μ μ μ­ κ°μ²΄μλλ€. (λΈλΌμ°μ μ window κ°μ²΄)  
`this`μ μ²«λ²μ§Έ λμ λ°©μμ μ μ­ κ°μ²΄(window)λ₯Ό context κ°μ²΄λ‘ κ°λ κ² μλλ€.

### μμμ  λ°μΈλ©
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
μ΄λ€ κ°μ²΄(foo)λ₯Ό ν΅ν΄ ν¨μκ° νΈμΆλλ€λ©΄ μ΄λμ `this`μ context κ°μ²΄λ νΈμΆν μ΄λ€ κ°μ²΄(foo)μλλ€.

```javascript
var b = 100;

this.blabla = foo.bar;
this.blabla(); // 100
```
μ²« λ²μ§Έ μ½λμ μ μ­ μ€μ½νμ μ μ½λλ₯Ό μΆκ°νλ€λ©΄ `this`μ context κ°μ²΄λ λ€μ μ μ­ κ°μ²΄(window)κ° λ©λλ€.  
μ μ­ μ€μ½νμμ μμ±ν λ³μλ μ μ­ κ°μ²΄μ λ±λ‘λκΈ° λλ¬Έμλλ€.

### λͺμμ  λ°μΈλ©
```javascript
function foo() {
  console.log(this);
}

var obj = { name: 'jigeol' };
foo.call(obj);
```
`call()` λ©μλλ μ²«λ²μ§Έ μΈμλ‘ λκ²¨μ£Όλ κ²μ΄ `this` context κ°μ²΄μλλ€. μ΄ μΈμλ `apply`, `bind` λ©μλλ₯Ό ν΅ν΄ `this` context κ°μ²΄λ₯Ό μ§μ ν΄μ£Όλ λ°©μμ λͺμμ  λ°μΈλ©μ΄λΌκ³  ν©λλ€.

### new λ°μΈλ©
```javascript
function foo(a) {
  this.a = a;
  this.b = 20;
}

var bar = new foo(2);
```
μλ°μ€ν¬λ¦½νΈμμ `new` ν€μλλ μλ°μ ν΄λμ€ μΈμ€ν΄μ€ νκ° μλλΌ `foo` ν¨μ μ€νκ³Ό κ°μ΅λλ€.

### λ°μΈλ©μ μ°μ  μμ
`new` λ°μΈλ© >= λͺμμ  λ°μΈλ© >>>> μμμ  λ°μΈλ© >= κΈ°λ³Έ λ°μΈλ©
> κΈ°λ³Έ λ°μΈλ©μ `new` λ°μΈλ©, λͺμμ  λ°μΈλ©, μμμ  λ°μΈλ© μΌμ΄μ€κ° μμ κ²½μ° λ°μλμ§ μμ΅λλ€.

#### `new` λ°μΈλ© & λͺμμ  λ°μΈλ© VS μμμ  λ°μΈλ©
```javascript
function foo(bar) {
  this.a = bar;
}

var obj1 = {
  foo: foo
}

obj1.foo(2) // μμμ  λ°μΈλ©
console.log(obj1.a) // 2

var obj2 = {};

obj1.foo.call(obj2, 3); // μμμ  λ°μΈλ©ν ν obj2λΌκ³  λͺμμ  λ°μΈλ©
console.log(obj1.a) // 2
console.log(obj2.a) // 3

var obj3 = new obj1.foo(10) // new λ°μΈλ©
console.log(obj1.a) // 2
console.log(obj2.a) // 3
console.log(obj3.a) // 10
```
μμμ  λ°μΈλ© ν κ°μ²΄(obj1)λ₯Ό λͺμμ  λ°μΈλ© & `new`λ°μΈλ©μ ν΄λ³΄μλ obj1 κ°μ²΄μ κ°μ λ³κ²½λμ§ μμ΅λλ€. μλ‘ μμ±λ κ°μ²΄λ€(obj2, obj3)μ μ μ©λ©λλ€.

#### `new` λ°μΈλ© VS λͺμμ  λ°μΈλ©
```javascript
function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1); // λͺμμ  λ°μΈλ©
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3); // new λ°μΈλ©
console.log(obj1.a); // 2
console.log(baz.a); // 3
```
### Arrow Function
νμ΄ν ν¨μλ‘ ννν  μ μλ λ¬Έλ²μμμ `this`λ νΉλ³νκ² μμ©ν©λλ€.  
νμ΄ν ν¨μκ° μ μΈλ μ€μ½νμ `this` context κ°μ²΄λ₯Ό μ¬μ©ν©λλ€.
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

## μ΄λ²€νΈ λ²λΈλ§ & μ΄λ²€νΈ μΊ‘μ³λ§
### addEventListener
κΈ°λ³Έμ μΌλ‘ μ΄λ²€νΈλ νμμμμμλΆν° μμμμλ‘ μ λ¬λ©λλ€.
```html
<section class="container">
  <div class="inner">
    <button class="close">λ²νΌμ΄μμ©</button>
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
μ κ°μ μ½λκ° μλ€λ©΄ λ²νΌμ ν΄λ¦­νμ λ μλμ κ°μ μ½μμ λͺ¨μ΅μ λ³Ό μ μμ΅λλ€. 
```
I'm close button!
I'm inner!
I'm container!
```
`addEventListener`λ μΈλ²μ§Έ μΈμλ‘ `useCapture`λΌλ νλΌλ―Έν°λ₯Ό λ°κ³  μμ΅λλ€. κΈ°λ³Έκ°μΌλ‘  `false`μ΄κ³  μΊ‘μ³λ§μ μ¬μ©ν κ±΄μ§λ₯Ό μ€μ νλ νλΌλ―Έν°μλλ€. 
μ μ½λ μ€ μ΄λ κ²λ§ λ°κΎΌλ€λ©΄?
```javascript
document.getElementsByClassName("container").addEventListener('click', () => {
  console.log("I'm container!");
}, true)
```
κ²°κ³Όλ μ΄λ μ΅λλ€.
```
I'm container!
I'm close button!
I'm inner!
```
