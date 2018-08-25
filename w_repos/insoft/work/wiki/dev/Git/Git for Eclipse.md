# Git for Eclipse
SourceTree 툴을 이용하는 것도 좋지만, 가장 친숙한 tool인 eclipse(STS)에서 git을 사용하는 방법을 가이드합니다.

- Git Install in eclipse
- 프로젝트와 로컬저장소
- 원격저장소 설정
- commit 과 push
- branch 생성하기
- branch 변경하기
- branch Merge 하기
- 원격저장소로부터 로컬저장소로 프로젝트로 만들기까지..

# Git intstall in eclipse(STS)
Eclipse 에서는 Git을 지원하는 많은 plugin들이 있습니다. 그 중 권장 드리는 plugin은 Eclipse EGit 입니다.
설치 방법은 아래와 같습니다.

![이미지 1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uu1o4hJtRk2MhEhRgYDx_%EC%9D%B4%EB%AF%B8%EC%A7%80%201.png)

Eclipse Marketplace를 실행합니다.

![이미지 2.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/SmpdxiBTfuf4qhHYau4A_%EC%9D%B4%EB%AF%B8%EC%A7%80%202.png)

"EGit" 으로 검색면 EGit- Git Team Provider 라는 항목이 있습니다. 
해당 항목을 Install 하시면 설치 후, Eclipse를 재시작하게 됩니다.

![이미지 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9tkioVJ1S9SKQfBslNVg_%EC%9D%B4%EB%AF%B8%EC%A7%80%20001.png)

재시작 후, Open Perspective 에서 Other를 선택합니다.

![이미지 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/EVjGRsvBTLO9qec1mor8_%EC%9D%B4%EB%AF%B8%EC%A7%80%20002.png)

Git 항목을 선택합니다.

![이미지 003.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/smMeVU7TP2BJtSK7P5lT_%EC%9D%B4%EB%AF%B8%EC%A7%80%20003.png)

오른쪽 상단에 보시면 Git 이라는 항목이 추가되고 화면이 전환됩니다.
설치 완료!

# 프로젝트와 로컬저장소
우리가 사용할 프로젝트를 생성합니다.

![이미지 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/qHB3xoRdT6Sr5bsgWytE_%EC%9D%B4%EB%AF%B8%EC%A7%80%20001.png)

일반 Project를 선택합니다.(일반적으로 어떠한 프로젝트가 될지 모르기때문에 차후, 변경하도록합니다)

![이미지 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/KX9GW8NfR5ubzPVA6zDH_%EC%9D%B4%EB%AF%B8%EC%A7%80%20002.png)

![이미지 003.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/heAwQiOOS3OY3x3yV0qV_%EC%9D%B4%EB%AF%B8%EC%A7%80%20003.png)

프로젝트 명을 입력하고 project 생성을 완료합니다.

해당 프로젝트에서 Team > Share Project 를 선택합니다.
![이미지 004.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/1oPRwX0ZQVe3jb5vSyun_%EC%9D%B4%EB%AF%B8%EC%A7%80%20004.png)

우리가 사용할 Git을 선택하고

![이미지 005.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/FyNnTmWKRRaWXpMNSZtp_%EC%9D%B4%EB%AF%B8%EC%A7%80%20005.png)

아직 우리는 gitlab에 원격저장소만을 가지고 있습니다.
우선 로컬저장소를 생성하여야 합니다.

![이미지 006.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/VXTg4sFZTYuizs87NeEI_%EC%9D%B4%EB%AF%B8%EC%A7%80%20006.png)

**여기서 주의할 점이 있습니다. 이 설정을 그대로 사용하게되면 우리가 예상하는 형태와는 다른 형태로 gitlab에 등록됩니다.**
"Use or create repository in parent folder of project" 항목을 check 합니다.
이렇게 설정하면 eclipse에서 사용하는 workspace를 그대로 로컬저장소를 사용하게 됩니다.

![이미지 007.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/DF4bayCnTbCpa7HhoqKK_%EC%9D%B4%EB%AF%B8%EC%A7%80%20007.png)

아래 project를 선택하면, 하단에 Create Repository가 활성화 됩니다. 해당 버튼을 클릭합니다.

![이미지 008.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/mD4gTdNQKLzalpMxz7Jw_%EC%9D%B4%EB%AF%B8%EC%A7%80%20008.png)

Create Repository를 클릭합니다.

![이미지 010.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/RFvZNw5aQYuDS48WW3yQ_%EC%9D%B4%EB%AF%B8%EC%A7%80%20010.png)

Git Repositories 화면을 보시면 위와 같이 생성되어있습니다.
지금까지 한 작업 **로컬저장소** 를 생성한 것입니다.

# 원격저장소 설정
이제 **원격저장소**를 설정할 차례입니다.

![이미지 018.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/x5qi929MQncadILHStzt_%EC%9D%B4%EB%AF%B8%EC%A7%80%20018.png)

gitlab 원격저장소의 이름을 정해줍니다.

![이미지 019.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PNHuzwmTwWTBDt8ykbvN_%EC%9D%B4%EB%AF%B8%EC%A7%80%20019.png)

Change 클릭하면

![이미지 020.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bDmOyuixRJa9dApRRN5l_%EC%9D%B4%EB%AF%B8%EC%A7%80%20020.png)

gitlab 원격저장소 주소를 입력합니다.

![이미지 039.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dFsJtjNMQVm8Rby17Wyn_%EC%9D%B4%EB%AF%B8%EC%A7%80%20039.png)

주소는 여기서 HTTPS URL을 복사합니다.

**SSH 키를 사용하게되면 여러가지 설정을 해야하지만, HTTPS를 사용하게 되면 gitlab 계정만 입력하면 됩니다.**

![이미지 021.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Q33xUISuOoetAhzAaqlw_%EC%9D%B4%EB%AF%B8%EC%A7%80%20021.png)

Finish 선택하고 Save를 선택합니다.

![이미지 023.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jOxYRDZZTyOUBleqF2TJ_%EC%9D%B4%EB%AF%B8%EC%A7%80%20023.png)

화면 처럼 원격저장소가 설정된것을 확인할 수 있습니다.

![이미지 024.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6MbYSt9VSamZOyaGSpmD_%EC%9D%B4%EB%AF%B8%EC%A7%80%20024.png)

프로젝트 화면으로 돌아와서 보면 프로젝트에 gitlab 명칭과 NO-HEAD 라는 부분을 확인할 수 있습니다.
NO-HEAD 라는 것은 아직 commit을 하지 않았기 때문에 어느 branch 인지 모른다는 소리입니다.;;

![이미지 025.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CWF1hEmrSlaHnlJHgbYY_%EC%9D%B4%EB%AF%B8%EC%A7%80%20025.png)

프로젝트와 연동이 끝났습니다.

# commit 과 push
자 이제 파일을 하나 만들어봅시다.

![이미지 026.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dueQpD0R6Sf7O4j8paQP_%EC%9D%B4%EB%AF%B8%EC%A7%80%20026.png)

파일을 생성해서 'I am best programmer!' 라고 입력했습니다.

![이미지 027.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/VTSf9mnxS7q7LHpohfFJ_%EC%9D%B4%EB%AF%B8%EC%A7%80%20027.png)

commit을 위해서 이제 **team > Synchronize Workspace** 를 선택합니다.

![이미지 028.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/oL6cM3RsShacd483eYmj_%EC%9D%B4%EB%AF%B8%EC%A7%80%20028.png)

살짝 설정해줄 부분이 있습니다. Git staging 정보입니다.

![이미지 029.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PjjKRueTRjqxxc4S66bV_%EC%9D%B4%EB%AF%B8%EC%A7%80%20029.png)

Ohter를 선택하고

![이미지 030.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/TF1d7DVHQAeoZuvnTuYf_%EC%9D%B4%EB%AF%B8%EC%A7%80%20030.png)

Git Staging 을 선택합니다.

![이미지 031.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/QBCy4adKTvGQ6MdCbSG6_%EC%9D%B4%EB%AF%B8%EC%A7%80%20031.png)

하단에 위와 같은 화면이 나옵니다. 어디서 많이 본 화면이죠? SourceTree 툴에서도 동일한 UI를 볼 수 있습니다.

![이미지 032.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/97DKibsfQTCu847lv8W7_%EC%9D%B4%EB%AF%B8%EC%A7%80%20032.png)

연필 모양의 아이콘을 클릭하면 eclipse에 설정된 자신의 서명을 추가할 수 있습니다.
**(서명만 추가했다고 Commit Message를 입력하지 않으면 안됩니다!!)**

![이미지 033.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ut9HwxQWWUmQ7T2U602g_%EC%9D%B4%EB%AF%B8%EC%A7%80%20033.png)

Commit Message를 입력하고 Commit!
자 이제 이 파일은 **로컬저장소**에 commit 되었습니다.
Commit and Push를 선택하게 되면 commit을 하고, 원격저장소에도 push하게 됩니다.

![이미지 034.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nXZ0quJTAOwX1MtsRw2A_%EC%9D%B4%EB%AF%B8%EC%A7%80%20034.png)

수동으로 push 하는 방법은 아래와 같이 **Team > Push Branch 'master'** 를 선택하면

![이미지 035.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/M6fkwvuBQJqAJVHfKPV4_%EC%9D%B4%EB%AF%B8%EC%A7%80%20035.png)

push할 원격저장소 remote와 branch를 선택할 수 있습니다.
** 다른 원격저장소(remote) push하고 싶으시면 변경하면 됩니다 쉬워요!**
Next!

![이미지 036.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/IF6EHIfKS82pUrgCKvB1_%EC%9D%B4%EB%AF%B8%EC%A7%80%20036.png)

Finish!!

![이미지 037.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/fab5rXUSSLu1Mx95a0ae_%EC%9D%B4%EB%AF%B8%EC%A7%80%20037.png)

잠시 기다리면 결과창이 보여집니다.

![이미지 038.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/arATR7CpQ8K6emKIHEIB_%EC%9D%B4%EB%AF%B8%EC%A7%80%20038.png)

# branch 생성하기
branch를 생성하는 경우는 다음과 같습니다.
기본적으로 master branch는 master권한이 없는 이상은 master branch에 commit도 push도 할 수 없습니다.
일반적으로 개발자들은 master brancn를 받은 다음 자신이 작업할 branch를 생성합니다.

![이미지 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/rmUHJgGeSFCF9JP0SjJK_%EC%9D%B4%EB%AF%B8%EC%A7%80%20001.png)

아래와 같이 brancname을 입력하고 Finish!

![이미지 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/T1qmMJCtRxa19QOSjLFv_%EC%9D%B4%EB%AF%B8%EC%A7%80%20002.png)

프로젝트가 뭔가 달라졌습니다. master로 되어있던 branch 명이 lovejava로 변경되었군요
이제 여기에 작업을 합니다.

![이미지 004.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/chx3eoXAS6aaysl3Yol8_%EC%9D%B4%EB%AF%B8%EC%A7%80%20004.png)

작업을하고 commit and push~!

![이미지 005.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/IU8FZYuFT6ehfxBYxJKs_%EC%9D%B4%EB%AF%B8%EC%A7%80%20005.png)

![이미지 007.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LvkWjuKHSvaJbD6xUbTf_%EC%9D%B4%EB%AF%B8%EC%A7%80%20007.png)

![이미지 008.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6xgXtLIqSamSZ6kHoujk_%EC%9D%B4%EB%AF%B8%EC%A7%80%20008.png)

![이미지 009.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/wO0JUCBhR1t4g7ZzzCVt_%EC%9D%B4%EB%AF%B8%EC%A7%80%20009.png)

![이미지 010.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0RqII8HnRXaMcqcGtK4a_%EC%9D%B4%EB%AF%B8%EC%A7%80%20010.png)

# branch 변경하기
간단합니다. 아래 처럼 원하는 branch로 변경하면 해당 branch로 변경됩니다.

![이미지 015.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/DwJF1A4tTTKuCuxsBTns_%EC%9D%B4%EB%AF%B8%EC%A7%80%20015.png)

# branch Merge 하기
Merge의 개념은 병합하는것입니다. 
**쉽게 설명하자면, 다른 branch에 commit된 내용을 현 branch로 가져오는 것입니다.**


branch를 master로 변경하고,

![이미지 016.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZEjAX3CiSkasuCOHX8mN_%EC%9D%B4%EB%AF%B8%EC%A7%80%20016.png)

Merge를 선택합니다.

![이미지 018.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZejcwLlSRXeMDZGmTSDv_%EC%9D%B4%EB%AF%B8%EC%A7%80%20018.png)

lovejava branch로 부터 가져오는 것입니다.

![이미지 019.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zRxy4kkMQ4yY9ZLVCHS7_%EC%9D%B4%EB%AF%B8%EC%A7%80%20019.png)

merge 결과창입니다.

![이미지 020.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/4KrTFoYtTM6RIBiDM47l_%EC%9D%B4%EB%AF%B8%EC%A7%80%20020.png)

merge를 하고 난 이후에는 commit을 해야 로컬저장소에 저장이 됩니다.
물론 push를 해야지 원격저장소에도 저장이 되겠죠?

![이미지 021.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bJPYg4kaQdasDG9TD7o1_%EC%9D%B4%EB%AF%B8%EC%A7%80%20021.png)

gitlab에 network 에서 보시면 어떤식으로 작업이 진행되었는지 보실 수 있습니다.

# 원격저장소로부터 로컬저장소로 프로젝트로 만들기까지..
아마도 가장 많이 사용하게 될 방법일것 같습니다.
조금 복잡하지만 차근차근 해보죠..

- 새로운 프로젝트를 생성한다.
- 로컬 저장소를 생성한다.
- 원격저장소를 등록한다.
- 원격저장소와 로컬 저장소를 동기화한다.
- 동기화된 로컬 저장소로 부터 프로젝트로 checkout 한다.

![이미지 001.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/wvEJMnvNRKC78jpKFy97_%EC%9D%B4%EB%AF%B8%EC%A7%80%20001.png)

우선 새로운 프로젝트를 생성하

![이미지 002.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/q8l2ZaeXQoOoBH1txRtf_%EC%9D%B4%EB%AF%B8%EC%A7%80%20002.png)

![이미지 003.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/V1GxTIOTSCtsQe24HJsb_%EC%9D%B4%EB%AF%B8%EC%A7%80%20003.png)

Team > Share Project 에서 로컬저장소를 생성하고 

![이미지 004.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jsBxhezTHe6XB1EaCm3q_%EC%9D%B4%EB%AF%B8%EC%A7%80%20004.png)

![이미지 005.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jUT5sS8ISKaKEi4JBrug_%EC%9D%B4%EB%AF%B8%EC%A7%80%20005.png)

![이미지 006.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/cp99v3LzQH2iR7E3652t_%EC%9D%B4%EB%AF%B8%EC%A7%80%20006.png)

![이미지 007.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/AX8FmxGRrqAiDBFtTnQT_%EC%9D%B4%EB%AF%B8%EC%A7%80%20007.png)

원격저장소를 등록할때~! ** 잘 봐야합니다~ **
** Configure fetch ** 를 선택합니다.
왜냐구요? 이미 존재하는 원격저장소로부터 로컬저장소로 가져와야하기 때문이죠.

![이미지 008.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/i2QUXzNuTkmRK3T4CM95_%EC%9D%B4%EB%AF%B8%EC%A7%80%20008.png)

change 를 누르고 저장소 정보를 입력하고~

![이미지 009.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/BrlqwnSkRRO96sCW3kyR_%EC%9D%B4%EB%AF%B8%EC%A7%80%20009.png)

![이미지 010.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/orV0M2dfRO7pDsELrcOg_%EC%9D%B4%EB%AF%B8%EC%A7%80%20010.png)

![이미지 011.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0K5uYrPQQqi2qqErlVW1_%EC%9D%B4%EB%AF%B8%EC%A7%80%20011.png)

Save and Fetch 를 눌러주면 저장과 동시에 원격저장소를 tracking하게 됩니다.
그냥 쉽게 생각하면 동기화할 준비가 되었다고 보시면됩니다.

![이미지 012.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/g8q19amTtSJESJ55KrFg_%EC%9D%B4%EB%AF%B8%EC%A7%80%20012.png)

OK!!

![이미지 013.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/2yPgRAS8qqEOnmuzT9yw_%EC%9D%B4%EB%AF%B8%EC%A7%80%20013.png)

확인해보시면 기존에는 없던 Remote Tracking 하위에 원격저장소의 commit 정보가 나타납니다.

![이미지 014.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LMwa4dvyTUmS58xUxSfy_%EC%9D%B4%EB%AF%B8%EC%A7%80%20014.png)

그럼 해당 commit으로 부터 Checkout!

![이미지 015.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Ga9VMmL9Qaa22JCXx9m6_%EC%9D%B4%EB%AF%B8%EC%A7%80%20015.png)

원격저장소에서 로컬저정소로 Checkout 을 어떻게 할꺼냐 물어보는건대 
- Checkout as New local Branch : 새로운 저장소를 생성해서 거기에 넣어요~
- Checkout Commit : 원격저장소의 branch를 따라가요~

![이미지 016.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZowODdoTKSMVSggSwKgz_%EC%9D%B4%EB%AF%B8%EC%A7%80%20016.png)

자 이제 보면 로컬저장소로 원격저장소의 내용이 모두 내려왔습니다.
익숙해지면 별로 어렵지 않습니다;

![이미지 017.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CiJ94UXQdm6QHvcY9zl0_%EC%9D%B4%EB%AF%B8%EC%A7%80%20017.png)

![이미지 018.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/hwo95cy6QOie5yOlJgTc_%EC%9D%B4%EB%AF%B8%EC%A7%80%20018.png)

여기서 잠깐! 프로젝트별로 모아서 보는 방법~ Woking Set!

![이미지 019.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/w7LPPkDQRGbLojLlXCwU_%EC%9D%B4%EB%AF%B8%EC%A7%80%20019.png)



![이미지 020.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/jFVYj4sQoGMspqNrBGef_%EC%9D%B4%EB%AF%B8%EC%A7%80%20020.png)

New를 눌러서 원하는 그룹명을 설정하고


![이미지 021.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/SUZ1XVRuSNnnAgQvQweA_%EC%9D%B4%EB%AF%B8%EC%A7%80%20021.png)

프로젝트를 추가하면 됩니다.

![이미지 022.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/iCaLDYZR6WaG0wxwv0ZA_%EC%9D%B4%EB%AF%B8%EC%A7%80%20022.png)

여태까지 일반 프로젝트로 일단은! 생성을 한 후에 작업을 해왔습니다.
이제 이런 프로젝트들을 Maven 프로젝트로 변경하는 방법을 알려드립니다.
spring-project라고 뭐 크게 다르지 않습니다. 알고보면 전부다 maven의 변형일뿐입니다.

![이미지 023.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ozqgz42cTfaSJ7aov1sQ_%EC%9D%B4%EB%AF%B8%EC%A7%80%20023.png)

![이미지 024.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/vMA52HRJRK2Sy7apTYkr_%EC%9D%B4%EB%AF%B8%EC%A7%80%20024.png)

Import

![이미지 025.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GdKaDogqTD6hw2DFcb38_%EC%9D%B4%EB%AF%B8%EC%A7%80%20025.png)

Project from Git

![이미지 026.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZKehMNgmTWX0tovaif4l_%EC%9D%B4%EB%AF%B8%EC%A7%80%20026.png)

이미 우리는 로컬저장소가 있습니다.

![이미지 027.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/D6IOPDRWCELPZEP59zhg_%EC%9D%B4%EB%AF%B8%EC%A7%80%20027.png)

선택하고~

![이미지 028.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/rCfVFM6vSjiDUGDCjrql_%EC%9D%B4%EB%AF%B8%EC%A7%80%20028.png)

선택하고~

![이미지 029.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/XH8Oj2dbRleMwFIQA3Bm_%EC%9D%B4%EB%AF%B8%EC%A7%80%20029.png)

자 이 프로젝트의 경우에는 부모 maven 프로젝트가 있고, 하위에 module 들이 있습니다.
그래서 이런 형태의 구조가 보이게 됩니다.
우리는 각각의 프로젝트를 하나의 프로젝트로 생성하야 하기 때문에 
실제로 작업해야하는 프로젝트를 선택합니다.

![이미지 030.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Sex1K2CTWOJQ6ddalsVR_%EC%9D%B4%EB%AF%B8%EC%A7%80%20030.png)

**Configure에서 Convert to Maven Project** 끝!

![이미지 031.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Yv8T5YlRyeEF2iZzJVxm_%EC%9D%B4%EB%AF%B8%EC%A7%80%20031.png)

잠시 기다리면 이렇게 바뀌게 됩니다.

![이미지 032.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/O2Thd3fDT7CbITPOlPe9_%EC%9D%B4%EB%AF%B8%EC%A7%80%20032.png)

나머지 프로젝트로 모두 변환해본것입니다.

참고로 ocean-freamwork 프로젝트에서 변경한 파일은 pacfic/ocean-framework 프로젝트에서도 변경됩니다. 왜냐구요? 프로젝트를 Import 할때 해당 위치에서 가져왔기 때문입니다. 실제로도 같은 경로상에 위치하는 파일입니다.

