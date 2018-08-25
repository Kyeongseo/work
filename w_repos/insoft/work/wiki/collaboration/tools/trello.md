# Label 정책 - (2015년 1월 8일 기준)
5개의 Label 을 정의하여 사용하고 있습니다.
정의된 내용은 모든 보드 (Board) 에 동일하게 적용됩니다.
(Board 별로 다른 Label 을 정의하여 사용하지 않습니다.)

- Notfication
- Knowledge
- Issue
- Request for Proposal (or Semina)
- Backlog

![Trello Label.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/kwLqosVyQEK6muuWd75t_Trello%20Label.PNG)


### Board 별 사용자 정의 Label
- 위의 이미 지정된 Label 이외에 Board 에서 필요한 Label 을 생성하여 사용할 수 있습니다.
- Label 을 생성할 때, Color 는 No Color 를 선택합니다.

![Lable user defined.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/U2PUxBBiTTGHMNMTmght_Lable%20user%20defined.PNG)


### 기타
추가 및 변경이 필요한 Label 는 [Trello](http://www.trello.com) 에 Card 를 만들어서 요청하시면 됩니다.
요청한 건은 협의를 하여 반영됩니다.

기타...각 Label 에 대한 설명은 보완하겠습니다.

---

# Trello 를 이용한 Collaboration

## 개요
우리본부의 Trello 를 이용한 Collaboration 에 대하여 설명합니다.

Trello 사용은 원활한 의사소통, 내용공유, 협업을 위하여 도입하였습니다.
(좋은 Tool 을 소개해준 박규태 차장에게 감사~)
Issue, 논의가 필요한 사항들은 Card 생성을 통해서 시작 됩니다.
제목은 작성할 내용의 무엇인지를 알기 쉽도록 작성합니다.
Description 에는 상세 내용을 작성합니다. (Trello 는 Markdown syntax 를 지원합니다.)
Member 는 Card 와 1차 연관이 있는 사람을 추가합니다.
Card 에 등록된 Members 는 Card 생성과 변경에 따른 Notification 을 받게 됩니다.
1차 연관이 있는 Members 와 기타 사람들은 자유롭게 Comment 를 작성할 수 있습니다.
각자가 남겨준 Comment 는 소중한 기록이 됩니다.
Comment 작성 중에 특정한 Member 를 지목할 경우는 @ + ID or Name 의 형태로 지목하게 되고,
지목된 사람은 해당 Card 의 Member 가 아니라도, Notification 을 받게 됩니다.

## Promise for Collaboration

각자가 구성하는 업무, 내용을 편하게 작성 바랍니다.
단, 가급적 빠짐없이 작성 바랍니다.
Card 를 만드는 기준은 제약, 제한 없습니다.
큰 내용을 하나로 만들 수 도 있고, 몇개의 작은 내용으로 나누어서 여러개의 Cards 를 만들 수 도 있습니다.
변경또한 자유롭습니다.
지켜야할 원칙은 하나입니다. 빠짐없이 Card 으로 등록하여서, 기록하는 것 입니다.




##Board

##List


##Card

##Member

##Comment

##from To Do to Done

---

# Trello 사용 가이드

## 개요

Trello(https://trello.com)는 일반 이슈, 혹은 프로젝트 중 문제가 발생하면 이를 기록하고 함께 논의/해결하기 위해서 사용합니다.
Trello에는 사업본부 일반 이슈나 프로젝트 진행 중 발생한 기획, 설계, 커뮤니케이션 이슈 등 걸림돌이 되는 모든 것을 기록합니다.
다만 개발 소스코드(Git)와 연관되어 개발자가 코드 수정을 해야하는 bug, feature 등 개발 이슈에 대해서는 GitLab에 따로 이슈를 등록하여 개발자의 시각으로 좀 더 상세히 기록합니다.

## 자신의 업무 확인

Trello에 로그인한 후 우상단에 있는 종 모양의 아이콘을 클릭하면 알림(Notifications)을 확인할 수 있습니다. 이 아이콘이 빨간색으로 변해 있으면 아직 확인하지 않은 알림이 있는 상태입니다.   

![trello 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/xA99yBRBK6G9Yy9OB0aw_trello%20001.png)

아래와 같은 경우에 알림이 옵니다.

- 자신이 멤버로 있는 카드에 변화가 있을 때
  - 카드가 다른 목록(list)으로 이동한 경우
  - 누군가 댓글(comment)를 달았을 때
- 누군가 자신의 댓글에 답변(replies)을 달거나, 자신을 언급(mentions)했을 때
  - 댓글 아래에 있는 Reply 링크를 클릭하면 답변을 달 수 있음
  
알림(Notificatons)은 이메일로도 주기적으로 옵니다. 설정을 변경하지 않았다면, 한시간에 한 번씩 체크하여 변경사항이 있을 경우에 이메일로 보내줍니다.
