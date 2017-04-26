# MAVEN
## 다운로드

[Download](https://maven.apache.org/download.cgi) 

위 아파치 사이트로 이동하여 Maven zip버젼을 다운로드 후 압축을 해제한다.

![maven1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0KPawPVJS9GDX2E2lyLR_maven1.png)

C:\Program Files\apache-maven-3.3.9 으로 경로를 이동 시킨다.

# MAVEN 환경 변수 설정
## 시스템 설정

JAVA_HOME 환경 변수를 설정 하는 것과 마찬 가지 방법으로 MAVEN_HOME 시스템 변수를 생성한다.

![maven2.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/KUHIRu0nTc2HDMetN9cQ_maven2.PNG)

Path 시스템 변수를 찾아 편집을 눌러 %MAVEN_HOME%\bin을 추가해준다.

![maven3.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/38yVqUGZQ6Kf0TAvahkD_maven3.PNG)

## 확인

윈도우 명령 프롬프트 창을 열어 mvn-version 명령을 입력하여 아래와 같이 출력 되면 정상적으로 설치가 완료 된 것이다.

![maven4.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/t77VF6rQ52yt6csB4ALu_maven4.PNG)