---
emoji: π»
title: input change, input μ΄λ²€νΈ
date: '2021-10-21 14:40:00'
author: μ§κ±Έ
tags: javascript html5
categories: TIL
---
# μμνλ©°
input μμμ κ°μ΄ λ³κ²½λ  λ μΊμΉν  μ μλ μ΄λ²€νΈλ `input`κ³Ό `change`κ° μλ€. μ΄ λμ μ°¨μ΄μ μ λν΄ μμλ³΄μ.

# `input` VS `change`
`input` μ΄λ²€νΈλ `change` μ΄λ²€νΈμ λ€λ₯΄κ² `value`κ° λ°λ λλ§λ€ λ°λμ μΌμ΄λλ€. [stackoverflow λ΅λ³](https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element)μ λ μμΈν μ°¨μ΄μ μ μ€λͺν΄μ£Όκ³  μλ€.  
`oninput`: μ¬μ©μ μΈν°νμ΄μ€λ₯Ό ν΅ν΄ νμ€νΈ λ΄μ©μ΄ λ³κ²½λ  λ λ°μνλ€. (νμ€νΈ λ΄μ©μ λ³κ²½μ¬ν­)  
`onchange`: κ°μ μ ννκ±°λ μ΅μ μ ννμλ§μ, νκΈ μλ ₯μ κ²½μ° νκΈμκ° μμ±λ λ€ λ€λ₯Έ ν€λ₯Ό μλ ₯(μ: μν° ν€)μ΄ μΌμ΄λμΌ λ°μλλ€. `<input>`, `<select>`, `<textarea>` νκ·Έμμ μ¬μ©μ΄ κ°λ₯νλ€.
- `<input>`: κ°μ λ³κ²½ + ν¬μ»€μ€ μ΄λ
- `<select>`: μ΅μμ΄ λ³κ²½λμμ λ

# Ref
https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element  
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event