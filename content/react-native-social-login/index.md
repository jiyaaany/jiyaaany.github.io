---
emoji: ๐ฌ
title: RN ์์ ๋ก๊ทธ์ธ ๋ชจ๋ ํํค์ณ ๋ณด์ ! ๐
date: '2021-10-17 22:29:00'
author: ์ง๊ฑธ
tags: react-native typescript
categories: experience
---
# ์์ํ๋ฉฐ
[๊ทผ์ก๋งจ](https://github.com/jiyaaany/muscleman) ์ด๋ผ๋ ๋ชจ๋ฐ์ผ ์ดํ๋ฆฌ์ผ์ด์ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉฐ ๊ฐ๋ฐ ์ธ์ด๋ก **[React Native](https://reactnative.dev/)** ๋ฅผ ์ฑํํ๊ณ , ์์ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ์ถ๊ฐํ๊ฒ ๋์๋ค.
>[์ฌ์  ์ค๋น]  
RN >= 0.60 (RN <= 0.59์ ๊ฒฝ์ฐ ํจํค์ง ์ค์น๋ฒ์ด ์์ดํ  ์ ์์ต๋๋ค.

# ์นด์นด์ค
## ์ ํ๋ฆฌ์ผ์ด์(ํ๋ก์ ํธ) ์ถ๊ฐ
1. ๋จผ์  [Kakao Developers](https://developers.kakao.com/) ์ฌ์ดํธ์ ์ ์ํด **๋ด ์ ํ๋ฆฌ์ผ์ด์** ๋ฉ๋ด์์ ์ ํ๋ฆฌ์ผ์ด์ ์ถ๊ฐ๋ฅผ ํด์ค๋๋ค.
![](https://images.velog.io/images/jiyaaany/post/827afc82-7c66-46e3-b681-3df37ac7d10f/image.png)
1-1. ์ฑ ์ด๋ฆ, ์ฌ์์๋ช ์๋ ฅ ์ ๊ฐ๋จํ ์ ํ๋ฆฌ์ผ์ด์์ ์์ฑํ  ์ ์์ต๋๋ค.
![](https://images.velog.io/images/jiyaaany/post/4c45871b-1d93-45f3-975b-248f6f8620d4/image.png)
2. ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์นด์นด์ค ๋ก๊ทธ์ธ์ด ๋นํ์ฑํ ๋์ด ์๊ธฐ ๋๋ฌธ์ ์ ํ๋ฆฌ์ผ์ด์ > ์นด์นด์ค ๋ก๊ทธ์ธ ๋ฉ๋ด์์ ํ์ฑํ ์์ผ์ค๋๋ค.
![img.png](img.png)
3. ์นด์นด์ค ๋ก๊ทธ์ธ ํ์ฑํ ๋ถ๋ถ ํ๋จ์ ์๋ Redirect URI๋ฅผ ์ค์ ํด์ค๋๋ค. ๊ณต์ ๋ฌธ์์์๋ ์๋ ๋๊ฐ์ง์ ๊ท์น์ ์ง์ผ Redirect URI๋ฅผ ์ค์ ํด์ผ ํ๋ค๊ณ  ๊ฐ์ด๋ํ๊ณ  ์์ต๋๋ค.
- Redirect URI๋ HTTP/HTTPS ํ๋กํ ์ฝ ๋ฐ 80, 443 ํฌํธ๋ฅผ ํ์ฉํฉ๋๋ค.
- Redirect URI๋ HTTP/HTTPS ํ๋กํ ์ฝ์ ๊ตฌ๋ถํ๋ฏ๋ก ๊ฐ๊ฐ ๋ฑ๋กํด์ผ ํฉ๋๋ค.
![img_1.png](img_1.png)
4. ์ ํ๋ฆฌ์ผ์ด์ > ์นด์นด์ค ๋ก๊ทธ์ธ > ๋์ํญ๋ชฉ ๋ฉ๋ด์ ์ ์ํ์ฌ ์นด์นด์ค ๋ก๊ทธ์ธ ์ ์ ๊ณต ๋ฐ์ ๋ฐ์ดํฐ๋ค์ ์ค์ ํ  ์ ์์ต๋๋ค. ์๋ ๊ฐ์ธ์ ๋ณด ํ์ด๋ธ์์ ์ ๊ณต๋ฐ์ ํญ๋ชฉ์ ์ค์ ํ๊ณ  ์ฐ์ธก ์๋จ์ **๋์ ํ๋ฉด ๋ฏธ๋ฆฌ๋ณด๊ธฐ** ๋ฒํผ์ ํตํด ์นด์นด์ค ๋ก๊ทธ์ธ ์ ๋ธ์ถ๋๋ ๋ชจ๋ฌ์ ํ์ธํด๋ณผ ์ ์์ต๋๋ค.
![img_2.png](img_2.png)

## ํจํค์ง ์ค์น
์ ๋ [React Native ์นด์นด์ค ๋ก๊ทธ์ธ ํจํค์ง](https://github.com/react-native-seoul/react-native-kakao-login) ๋ฅผ ์ฌ์ฉํด ์ฐ๋์ ์งํํด๋ณด๋ ค๊ณ  ํฉ๋๋ค.
```
yarn add @react-native-seoul/kakao-login
```
iOS์ ๊ฒฝ์ฐ ์๋ ๋ช๋ น์ด๋ก pod ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น๊ฐ ๋ณ๋๋ก ํ์ํฉ๋๋ค.
```
npx pod-install
```
## iOS ์ธํ
### ์ค์  ํ์ผ ๋ณ๊ฒฝ
๋จผ์  `ios` ๋๋ ํ ๋ฆฌ ํ์์ `info.plist` ์ค์ ํ์ผ์ ์์ ํด์ค๋๋ค.
```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
          <string>kakao{์ฑ ์์ด๋}</string>
        </array>
    </dict>
</array>

<key>KAKAO_APP_KEY</key>
<string>{์ฑ ์์ด๋}</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>kakaokompassauth</string>
    <string>storykompassauth</string>
    <string>kakaolink</string>
</array>
```

### [Swift Bridging Header](https://stackoverflow.com/questions/31716413/xcode-not-automatically-creating-bridging-header) ์ถ๊ฐ
[ํจํค์ง ๊ณต์๋ฌธ์](https://github.com/react-native-seoul/react-native-kakao-login) `README.MD`์ ์๊ฐ๋ ๊ฒ์ฒ๋ผ ์ ๋งํฌ๋ฅผ ํตํด `Swift Bridging Header`๋ฅผ ์ถ๊ฐํฉ๋๋ค.
๋จผ์  Xcode์์ `ํ๋ก์ ํธ ๋๋ ํ ๋ฆฌ/ios` ๊ฒฝ๋ก๋ฅผ ์ด์ด์ค๋๋ค. (๋ก๋ฉํ๋๋ฐ ํ ์ธ์ ๊ฑธ๋ฆผ..)

Bridging Header ์น์์ด ์์ ๊ฒฝ์ฐ, ํ๋ก์ ํธ ๊ฒฝ๋ก ์๋ Swift ํ์ผ ํ๋ ์์ฑํด์ฃผ๋ฉด ์๋์ ๊ฐ์ ๋ชจ๋ฌ์ด ๋จ๋ฉด์ Bridging Header์ ์์ฑํ  ์ ์๋ค.
![img_5.png](img_5.png)

### `AppDelegate.m`
๋ค์์ผ๋ก  ์นด์นด์คํก ์ฑ์ด ๊น๋ ค์์ ๊ฒฝ์ฐ ์ฌ๋ฐ๋ฅธ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๊ธฐ ์ํด `AppDelegate.m` ํ์ผ์ ์๋ ๋ด์ฉ์ ์ถ๊ฐํด์ค๋๋ค. 
```
// import
#import <RNKakaoLogins.h>

// openURL ํจ์ ์ถ๊ฐ
- (BOOL)application:(UIApplication *)app
     openURL:(NSURL *)url
     options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
 if([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
    return [RNKakaoLogins handleOpenUrl: url];
 }

 return NO;
}

// optional
dispatch_async(dispatch_get_global_queue( DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^(void){
      dispatch_async(dispatch_get_main_queue(), ^(void){
        if ([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
          [RNKakaoLogins handleOpenUrl: url];
        }
      });
  });
```

### Bundle Identifier ํ์ธ
Xcode์์ Project => Targets ์๋ ์ ํ ํ General ํญ์ผ๋ก ์ด๋ํ์ฌ Bundle Identifier๊ฐ ๋ณธ์ธ์ ์นด์นด์ค ์ฑ์ ๋ฒ๋คID์ ๋์ผํ์ง ํ์ธํฉ๋๋ค.
![img_4.png](img_4.png)
![img_5.png](img_5.png)
![img_6.png](img_6.png)

## Android
### ํค ํด์(Key Hash) ๋ฑ๋ก
[๋งํฌ](https://developers.kakao.com/docs/latest/ko/getting-started/sdk-android-v1#key-hash) ๋ฅผ ํตํด ํค ํด์๋ฑ๋ก์ ์งํํฉ๋๋ค. ๋๋ฒ๊ทธ, ๋ฆด๋ฆฌ์ฆ ํค ํด์ ๊ฐ์ ๋ฑ๋กํ๋ ๋ฐฉ๋ฒ์ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.
1. ์ด์์ฒด์ ์ ๋ฐ๋ฅธ ๋ช๋ น์ด๋ฅผ ํตํด ํค ํด์๋ฅผ ์์ฑ
2. [๋ด ์ ํ๋ฆฌ์ผ์ด์] > [ํ๋ซํผ] > [Android ํ๋ซํผ ๋ฑ๋ก]
3. [ํค ํด์] ํญ๋ชฉ์์ ์์ฑํ ํค ํด์๋ฅผ ์๋ ฅ ํ ์ ์ฅ  
![img_3.png](img_3.png)

#### ๋๋ฒ๊ทธ ํค ํด์
```
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
```
React Native 0.60.x ๋ถํฐ ๊ธฐ๋ณธ์ ์ผ๋ก ๋๋ฒ๊น ํค ํด์๊ฐ ํฌํจ๋ฉ๋๋ค. `{PROJECT_DIR}/android/app` ๊ฒฝ๋ก์ `debug.keystore` ํ์ผ์ ์ฐพ์ต๋๋ค. ์๋ ๋ช๋ น์ด๋ฅผ ํตํด ํค ํด์ ๊ฐ์ ์ถ์ถํ๊ณ  ์นด์นด์ค ๊ฐ๋ฐ์ ์ฌ์ดํธ์ ๋ฑ๋กํด์ค๋๋ค.
```
keytool -exportcert -alias androiddebugkey -keystore ~./android/app/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
```

#### ๋ฆด๋ฆฌ์ฆ ํค ํด์
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

### Manifest ํ์ผ ์์ 
`android/app/src/main/AndroidManifest.xml` ํ์ผ์์ `allowBackup`์ `true`๋ก ๋ณ๊ฒฝํด์ค๋๋ค.
```
...
android:allowBackup="true"
...
```

### Redirect URI ์ค์ 
`android/app/src/main/AndroidManifest.xml`
```
<activity android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity">
  <intent-filter>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />

      <!-- Redirect URI: "kakao{NATIVE_APP_KEY}://oauthโ -->
      <data android:host="oauth"
          android:scheme="kakao{์นด์นด์ค ๋ค์ดํฐ๋ธ ์ฑ key}" />
  </intent-filter>
</activity>
```

### `strings.xml` ํ์ผ ์์ 
```
<string name="kakao_app_key">{์นด์นด์ค ๋ค์ดํฐ๋ธ ์ฑ key}</string>
```

### kotlin์ ํด์๊ฐ๋ฅํ๋๋ก ์์ 
`android/build.gradle` ํ์ผ์์ ๋ค์๊ณผ ๊ฐ์ด ์์ ํฉ๋๋ค.
```
 buildscript {
   ext {
     ...
     kotlinVersion = '1.3.41'
   }
   dependencies {
     ...
     classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
   }
 }
```

# ๊ตฌ๊ธ
## ์ ํ๋ฆฌ์ผ์ด์(ํ๋ก์ ํธ) ์ถ๊ฐ
๊ตฌ๊ธ๋ ๋ง์ฐฌ๊ฐ์ง๋ก ํ๋ก์ ํธ๋ฅผ ์์ฑํฉ๋๋ค.
![](https://images.velog.io/images/jiyaaany/post/8b093780-b576-48a3-9db4-0c2256337e5c/image.png)

## ํจํค์ง ์ค์น
[google-signin](https://github.com/react-native-google-signin/google-signin) ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.
```
yarn add @react-native-google-signin/google-signin

# and

npx pod-install
```

## Android ์ค์ 
Firebase๋ฅผ ์ฌ์ฉํ์ง ์๋๋ค๋ฉด [Configure a Google API Project](https://developers.google.com/identity/sign-in/android/start#configure-a-google-api-project) ๊ฐ์ด๋๋ฅผ ๋ฐ๋ผ ์ค์ ์ ์งํํฉ๋๋ค.  
1. ์๋ ํ๋ก์ ํธ ๊ตฌ์ฑ ๋ฒํผ์ ํด๋ฆญํด ๋์ ํ๋ก์ ํธ๋ฅผ ์ ํํด์ค๋๋ค.
![img_6.png](img_6.png)
2. ํจํค์ง๋ช๊ณผ ํค์คํ ์ด SHA-1 ๊ฐ์ ์๋ ฅํด์ค๋๋ค.  
![img_7.png](img_7.png)  
ํจํค์ง๋ช์ `Androidmanifest.xml` ํ์ผ์์ ์ฐธ์กฐํ๋ฉด ๋๊ณ , SHA-1 ๊ฐ์ ์ ๋ช๋ น์ด๋ฅผ ํตํด ์ฐพ์๋ผ ์ ์๋ค.
3. `build.gradle` ํ์ผ ์์ 
```
ext {
    ...
    googlePlayServicesAuthVersion = "19.2.0"
}
dependencies {
    ...
    classpath 'com.google.gms:google-services:4.3.10'
}
repositories {
    google()
}
```
4. `android/app/build.gradle` ํ์ผ ์์   
๊ฐ์ฅ ์๋์ ์ถ๊ฐ
```
apply plugin: 'com.google.gms.google-services'
```

## iOS ์ค์ 
1. ์ฑ ๋ฑ๋ก
Xcode์์ ํ์ธํ ๋ฒ๋ค ID๋ฅผ ์๋ ฅํด์ค๋๋ค.
2. ๊ตฌ์ฑ ํ์ผ ๋ค์ด๋ก๋
`GoogleService-Info.plist` ํ์ผ์ ๋ค์ด๋ฐ์ Xcode ํ๋ก์ ํธ ๋ฃจํธ ๊ฒฝ๋ก์ ์ถ๊ฐํฉ๋๋ค.
3. Firebase SDK ์ถ๊ฐ  
3-1. Xcode ํ๋ก์ ํธ๋ฅผ ์ฐ ํ File(ํ์ผ) > Swift Package > Add Package Dependency ์ด๋  
3-2. ๋ฉ์์ง๊ฐ ํ์๋๋ฉด Filebase iOS SDK ์ ์ฅ์ URL์ ์๋ ฅ  
3-3. ์ฌ์ฉํ  SDK ๋ฒ์  ์ ํ  
3-4. ์ฌ์ฉํ  Firebase ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ ํ
![img_12.png](img_12.png)

7. ํด๋ผ์ด์ธํธ ID ๋ง๋ค๊ธฐ
![img_8.png](img_8.png)
* Bundle ID๋ Android์์ ์ฌ์ฉํ๋ Bundle Identifier ๊ฐ์ ์ฌ์ฉํ๋ฉด ๋ฉ๋๋ค.  
![img_9.png](img_9.png)
2. ์์ฑ๋ ํน์ ๊ธฐ์กด์ ์ฌ์ฉํ๋ ํด๋ผ์ด์ธํธ ID๋ฅผ URL Schemes์ ์ง์   
URL Schemes์ ํด๋ผ์ด์ธํธ ID๋ฅผ ์ญ์ผ๋ก ์๋ ฅํฉ๋๋ค.
```
eg.
Client Id: 123123.blabla.com
URL Schemes: com.blabla.123123
```

# ๋ค์ด๋ฒ
## ํจํค์ง ์ค์น
```
yarn add @react-native-seoul/naver-login

npx pod-install
```

## iOS ์ค์ 
1. `Info.plist` ํ์ผ ์์ 
```javascript
<key>LSApplicationQueriesSchemes</key>
<array>
 <string>naversearchapp</string>
 <string>naversearchthirdlogin</string>
</array>
```

# ์ ํ
## ํจํค์ง ์ค์น
```
yarn add @invertase/react-native-apple-authentication

npx pod-install
```

## iOS ์ค์ 
