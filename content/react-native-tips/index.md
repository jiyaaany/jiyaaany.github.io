---
emoji: π±
title: React Native νκ²½ μνκ³Ό νΈλ¬λΈ μν
date: '2021-10-21 18:47:00'
author: μ§κ±Έ
tags: react-native typescript
categories: experience
---

# νκ²½μΈν
## μ€μΉ
```
brew install node
brew install watchman
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```
## Android
### 1. μλλ‘μ΄λ μ€νλμ€ μ€μΉ
[μλλ‘μ΄λ μ€νλμ€](https://developer.android.com/studio/index.html) λ₯Ό μ€μΉνκ³  μλ ν­λͺ©λ€μ μ²΄ν¬ν΄μ€λ€.
- Android SDK
- Android SDK Platform
- Android Virtual Device
### 2. Android SDK μ€μΉ
μλλ‘μ΄λ μ€νλμ€ SDK Managerμμ Android 10.0 λ²μ μ μ²΄ν¬νμ¬ μ€μΉν΄μ€λ€.
![img_4.png](img_4.png)
- Inter x86 Atom_64 System Image or Google APIs Inter x86 Atom System Image
"SDK Tools" ν­μΌλ‘ μ΄λνμ¬ μλ λκ°μ§ ν­λͺ©μ μ²΄ν¬ν ν Apply ν΄μ€λ€.
- "Android SDK Build-Tools" 29.0.2 
- "Android SDK Command-line Tools (latest)"
### 3. `ANDROID_HOME` νκ²½ λ³μ
```
vi ~/.zshrc
```

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

μλ λͺλ Ήμ΄λ₯Ό ν΅ν΄ νκ²½λ³μκ° μ μ§μ λμλμ§ νμΈνλ€.
```
source ~/.zshrc
echo $ANDROID_HOME
```

# λͺλ Ήμ΄λ€
## μν νμΈ
μλ λͺλ Ήμ΄λ₯Ό ν΅ν΄ νκ²½ μΈνμ΄ μλμλμ§λ₯Ό νμΈν  μ μλ€.
```
npx @react-native-community/cli doctor
```
**[μ€ν κ²°κ³Ό]**
![img.png](img.png)

# νλ€
## μ€ν μ€λ₯
`yrun` λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ€ν μ μ€λ₯λλ μν©μ μ νλ©΄ λ¨Όμ  `Xcode`λ `Android Studio`λ₯Ό ν΅ν΄ ν΄λΉ λλ ν λ¦¬λ₯Ό μ΄μ΄ λΉλ ν μμΈμ μ°Ύλ κ²μ΄ λΉ λ₯΄κ³  μΉμ νλ€.

## No bundle URL present
![img_2.png](img_2.png)
iOS λλ°μ΄μ€μμ No bundle URL present μλ¬κ° λ°μν  κ²½μ° νλ‘μ νΈ λ£¨νΈ λλ ν λ¦¬μμ λ€μ λͺλ Ήμ μ€νν΄ iOS λΉλ λλ ν λ¦¬λ₯Ό μ­μ νκ³  μΈμ(8081 ν¬νΈ)μ μ­μ νλ€.
```
rm -rf ios/build/; kill $(lsof -t -i:{PORT}); react-native run-ios
```
### Optional
λ€μ λͺλ ΉμΌλ‘ Bash κ΅¬μ±νμΌ `.bashrc`μ μΆκ°νμ¬ μ΄λ¬ν μ€λ₯κ° λ°μνμ§ μλλ‘ νλ€.
```
echo "alias rni=\"kill \$(lsof -t -i:8081); rm -rf ios/build/; react-native run-ios\"" >> ~/.bashrc; source ~/.bashrc
```

## Android μ€ν μ€λ₯
```
General error during semantic analysis: Unsupported class file major version 60
```

### μμΈ
μ μ€λ₯μ μμΈμ jdk λ²μ μ΄ μ§μλμ§ μλ λ²μ μ΄λΌμ λ°μνλ€. jdk μ¬λ¬ λ²μ μ΄ μ€μΉ λμ΄μλ κ²½μ° λ²μ μ λͺμν΄μ£Όμ§ μμΌλ©΄ μ΄λ° μ€λ₯κ° λ°μν  μ μλ€. (μ΄λμ κ²½μ° jdk 16 λ²μ μΌλ‘ μ§μ λμ΄ μμλ€.)

### ν΄κ²°
1. μ€μΉλμ΄μλ jdk λ²μ  νμΈ
```
/usr/libexec/java_home -V

Matching Java Virtual Machines (3):
16.0.2 (x86_64) "Oracle Corporation" - "OpenJDK 16.0.2" /Users/jigeol/Library/Java/JavaVirtualMachines/openjdk-16.0.2/Contents/Home
15.0.4 (x86_64) "Azul Systems, Inc." - "Zulu 15.34.17" /Users/jigeol/Library/Java/JavaVirtualMachines/azul-15.0.4/Contents/Home
1.8.0_292 (x86_64) "AdoptOpenJDK" - "AdoptOpenJDK 8" /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
/Users/jigeol/Library/Java/JavaVirtualMachines/openjdk-16.0.2/Contents/Home
```

2. jdk λ²μ  λ³κ²½
```
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
```
3. λ³κ²½λ λ²μ  νμΈ
```
java -version
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
```

# React Native Absolute imports
```typescript
// AS-IS
import foo from '../../../../../foo';

// TO-BE
import foo from 'src/foo'
```

1. ν¨ν€μ§ μ€μΉ
```
ya -D babel-plugin-module-resolver
```
2. `babel.config.ts`
```typescript
plugins: [
[
  'module-resolver',
  {
    root: ['.'],
    extensions: [
      '.ios.ts',
      '.android.ts',
      '.ts',
      '.ios.tsx',
      '.android.tsx',
      '.tsx',
      '.jsx',
      '.js',
      '.json',
    ],
    alias: {
      '@src': './src',
    },
  },
],
```
3. `tsconfig.json`
```typescript
"baseUrl": "./src",
 "paths": {
   "@src/*": ["./*"]
 },    
```
4. μΊμ λΉμ°κ³  μ¬μμ
```
yst --reset-cache
```

# React Native μ± μ΄λ¦ λ³κ²½
1. `app.json` νμΌ μμ 
```typescript
{
  "displayName": "{APP_NAME}"
}
```
2. `strings.xml` νμΌ μμ 
```typescript
<string name="app_name"> { APP_NAME }</string>
```
3. `Info.plist` νμΌ μμ 
```
<key>CFBundleDisplayName</key>
<string>{APP_NAME}</string>
```

# ScrollView VS FlatList
μ± κ°λ°μ νλ©° μ€ν¬λ‘€λλ μ€ν¬λ¦°μ κ°λ°ν΄μΌνλλ° [React Native ScrollView](https://reactnative.dev/docs/scrollview) λ¬Έμλ₯Ό λ³΄λ `FlatList`λΌλ κ²λ μλ€λ μ¬μ€μ μκ² λμμ΅λλ€.  
λ¬Έμμμ μκ°νκ³  μλ λ΄μ©μΌλ‘λ `ScrollView`λ νκΊΌλ²μ λͺ¨λ  νμ κ΅¬μ±μμλ₯Ό λ λλ§ νκΈ° λλ¬Έμ μ½νμΈ κ° λ§μ μ€ν¬λ¦°μ κ²½μ° λΆνκ° μκΈΈ μ μλ€κ³  ν©λλ€. (λ λλ§ μλ λλ €μ§, λ©λͺ¨λ¦¬ μ¬μ©λ μ¦κ°)  
λ°λ©΄ `FlatList`λ ν­λͺ©μ΄ λνλμΌ νλ μμ μ λ‘λ©μ νκ³  λ©λͺ¨λ¦¬μ μ²λ¦¬ μκ°μ μ μ½νκΈ° μν΄ νλ©΄μ λ³΄μ΄μ§ μλ μμλ€μ μ κ±°νλ€κ³  ν©λλ€.
