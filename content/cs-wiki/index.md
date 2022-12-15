---
emoji: 💬
title: CS 백과사전 📚
date: '2022-12-15 12:00:00'
author: 지걸
tags: CS
categories: CS
---

# SOP VS CORS
## SOP (Same-Origin Policy, 동일 출처 정책)
하나의 출처(Origin)에서 로드된 자원이 다른 호스트나 프로토콜, 포트번호와
상호작용하지 못하도록 요청 발생을 제한하며 동일 출처(Same Origin)에서만 접근이 가능한 정책

## CORS (Cross-Origin Resource Sharing, 교차 출처 리소스 공유)
자신의 출처와 다른 출처에서 리소스를 불러오려면 올바른 CORS 헤더를 포함한 응답을 반환해야 한다.
### CORS 해결 방법
1. 동일 출처 사용
2. 서버에서 Access-Control-Allow-Origin 헤더 추가  
서버에서 모든 클라이언트 요청을 허가하는 `Access-Control-Allow-Origin: *` 헤더를 추가하면 된다. 
이렇게 설정할 경우 전체 호스트에 대한 요청을 허용하기 때문에 보안에 취약할 수 있다.
3. Proxy  
Proxy 서버는 클라이언트와 서버 중간에 위치하며 프록시 서버에서 `Access-Control-Allow-Origin: *`
헤더를 담아 응답해 주면 된다.

# OSI-Layer
## 물리 계층 (Physical Layer)
- 0과 1의 나열을 아날로그 신호로 바꾸어 전선으로 흘려 보내고, (**encoding**)
- 아날로그 신호가 들어오면 0과 1의 나열로 해석하여 (**decoding**)
- 물리적으로 연결된 두 대의 컴퓨터가 0과 1의 나열을 주고받을 수 있게 하는 모듈 (**module**)

### 어디에 구현되어 있을까?
- PHY 칩
- 사실 1계층 모듈은 하드웨어적으로 구현되어 있다.

## 데이터 링크 계층 (Data-Link Layer)
- 같은 네트워크에 있는 여러 대의 컴퓨터들이 데이터를 주고받기 위해서 필요한 모듈
- Framing은 Data-link Layer에 속하는 작업들 중 하나입니다.

### 어디에 구현되어 있을까?
- 랜카드
- 하드웨어

## 네트워크 계층 (Network Layer)
- 수많은 네트워크들의 연결로 이루어지는 inter-network 속에서
- 어딘가에 있는 목적지 컴퓨터로 데이터를 전송하기 위해,
- IP 주소를 이용해서 길을 찾고 (**routing**)
- 자신 다음의 라우터에게 데이터를 넘겨주는 것 (**forwarding**)

### 어디에 구현되어 있을까?
- 운영체제의 커널에 소프트웨어적으로 구현되어 있다.

## 전송 계층 (Transfer Layer)
- Port 번호를 사용하여
- 도착지 컴퓨터의 최종 도착지인 프로세스에까지
- 데이터가 도달하게 하는 모듈

### 어디에 구현되어 있을까?
- 운영체제의 커널에 소프트웨어적으로 구현되어 있다.

## 어플리케이션 계층 (Application Layer)
- HTTP