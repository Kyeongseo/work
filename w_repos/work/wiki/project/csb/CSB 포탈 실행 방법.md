CSB 포탈 실행 방법
---


2017.1 - 2017.4
ETRI 서버를 대신하여 WireMock 서버를 사용합니다.
실행 방법(local)
이용할 수 있는 서버가 없으면  페이지 하단에 있는 WireMock 실행 방법을 참고해 서버 실행 후 진행하세요.  
(17.6.27 현재 csb.infra-manager 계정 인스턴스에서 WireMock 서버가 실행중입니다.)
서버 없이 실행 시 로그인할 수 없습니다.
GitLab project download
gitLab cloud-insoft/csc project 접속합니다.
project URL을 복사합니다. (git@gitlab.com:cloud-insoft/csc.git)
local에서 원하는 directory에 clone 받습니다.
Wiki > CSB 포탈 실행 방법 > csb git clone.JPG
Git pull dev branch
상황에 따라 해당 단계가 필요 없을 수 있습니다. (이미 dev branch source code로 다운로드한 경우)
download한 project directory로 이동합니다.
dev branch로 checkout 합니다.
git pull 합니다.
Running Project
project를 실행시킵니다.  (IntelliJ)

Wiki > CSB 포탈 실행 방법 > csb spring.JPG   Wiki > CSB 포탈 실행 방법 > csb.JPG

project directory에서 npm install
gulp serve
Wiki > CSB 포탈 실행 방법 > csc gulp.JPG
http://localhost:9000/ 에 접속하면 아래와 같은 화면을 볼 수 있습니다.

Wiki > CSB 포탈 실행 방법 > csc.JPG


로그인하여 제대로 동작하는지 확인합니다. (consumer or manager)
ID    : consumer
PW  : consumer 

WireMock 실행 방법(local)
참고 : WireMock 라이브러리
local에서 WireMock서버를 실행시켜 이용 시 CSB 코드의 API_URL이 "http://127.0.0.1:8182"로 되어있는지 확인하세요.
GitLab project download
gitLab cloud-insoft/csc-wm project 접속합니다.
project URL을 복사합니다. (git@gitlab.com:cloud-insoft/csc-wm.git)
local에서 원하는 directory에 clone 받습니다.
Download WireMock JAR File
http://wiremock.org/docs/getting-started/  Running standalone부분에 download the standalone JAR from here를 눌러 다운받습니다.
다운받은 파일을 project directory이동시킵니다.
Wiki > CSB 포탈 실행 방법 > wm.JPG

8182 포트로 실행시킵니다.
java -jar wiremock-standalone-2.6.0.jar --port 8182 

Wiki > CSB 포탈 실행 방법 > start wm.JPG