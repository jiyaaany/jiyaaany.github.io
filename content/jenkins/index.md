---
emoji: 💻
title: Jenkins 세미나
date: '2021-10-14 11:50:00'
author: 지걸
tags: jenkins aws
categories: TIL
---

# 사전설명
**'이런게 있구나'** 하고 넘어가도 내용들
- [ELB](https://aws.amazon.com/ko/elasticloadbalancing/?whats-new-cards-elb.sort-by=item.additionalFields.postDateTime&whats-new-cards-elb.sort-order=desc) 보다 Cluster가 우선시 된다.
>ELB TargetGroup이 3개로 지정되어 있어도, Cluster가 2개로 지정되어 있으면 2개의 인스턴스만 사용된다.
- EC2 인스턴스 안에는 Amazon Agent, Application 두 개의 컨테이너가 있다.
- Cluster로 지정되지 않은 spare 컨테이너가 N개 존재한다.
> spare 컨테이너가 많을 수록 성능이 좋을 것으로 예상  
> spare 컨테이너에서 배포가 시작되는데 1개에서 시작하는 것보다 2개 이상에서 동시에 배포되는 것이 속도가 빠르기 때문.
- Jenkins 배포 실행 시 spare 컨테이너에 배포가 시작되고, Cluster로 지정된 인스턴스를 해제하는 식으로 배포가 진행된다.
- Cluster에서 제외된 인스턴스는 drain 상태로 전환된다.

# Jenkins
[사전설명](#사전설명)의 단계대로 지정된 Pipeline Job에 의해 배포 과정이 진행된다.
- 파라미터로 받은 branch를 트래킹해서 변경 내용을 찾아낸다.
- drain 상태의 인스턴스를 찾아 배포가 시작된다.
- 배포된 인스턴스들로 Cluster를 재구성하고 배포 이후 작업들(Jira 업데이트 등)이 진행된다.
> 이 과정 중 한 곳이라도 오류가 발생하면 Jenkins 배포가 실패한다.