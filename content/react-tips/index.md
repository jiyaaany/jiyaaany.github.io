---
emoji: ๐ฌ
title: React ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉฐ ๊ฒช์ ์ด๋ ค์๊ณผ ํด๊ฒฐ!๐ง
date: '2021-10-26 14:38:00'
author: ์ง๊ฑธ
tags: react typescript javascript
categories: TIL
---

# unknown prop ๊ฒฝ๊ณ 
## ์ค๋ฅ์ฝ๋
![img.png](img.png)
```javascript
React does not recognize the `isInvalid` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `isinvalid` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
```
## ์์ธ

# React ์ ๋ ๊ฒฝ๋ก ์ค์ 
import ๊ตฌ๋ฌธ์ ์๋ ๊ฒฝ๋ก๋ก ์ง์ ํ  ๊ฒฝ์ฐ ํ์ผ์ด ์ด๋๋๊ฑฐ๋ ๋ฑ์ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋ ์ค๋ฅ๊ฐ ๋ฐ์ํ  ์ ์๊ธฐ ๋๋ฌธ์ ์ ๋ ๊ฒฝ๋ก๋ก ๋ณ๊ฒฝํ์ฌ ์ฌ์ฉํ๋ค.
## ํด๊ฒฐ๋ฐฉ๋ฒ
### tsconfig.json
```typescript
{
  "compileOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

# import๋ฌธ ์ ๋ ฌ
import๋ฌธ์ด ๊ธธ์ด์ง ๊ฒฝ์ฐ ๊ฐ๋์ฑ์ ์ํด ์ฐ์ ์์๋ฅผ ์ค์ ํ์ฌ ์ ๋ ฌํ๋ค. [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) ํจํค์ง์ `import/order`์ ์ฌ์ฉํ๋ค.
1. ์ค์น
```
ya eslint-plugin-import -g
```
2. ์ค์ 
```

```
