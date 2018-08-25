GCS 사용자 포탈
---


2017.5 - 2017.6
GCS 사용자 포탈은 Fuse - Angular Material Design Template를 사용해 구현하였습니다.
실행 방법(local)
이용할 수 있는 서버가 없으면 페이지 하단에 있는 MysoCloud 실행 방법을 참고해 서버 실행 후 진행하세요. 
서버 없이 실행 시 로그인 화면은 뜨지만 로그인할 수 없습니다.
GitLab project download
gitLab cloud-insoft/publicMesh-front project 접속합니다.
project URL을 복사합니다. (git@gitlab.com:cloud-insoft/publicMesh-front.git)
local에서 원하는 directory에 clone 받습니다.
Wiki > GCS 사용자 포탈 > gcs protal clone.JPG
Git pull dev branch
상황에 따라 해당 단계가 필요 없을 수 있습니다. (이미 dev branch source code로 다운로드한 경우)
download한 project directory로 이동합니다.
dev branch로 checkout 합니다.
git pull 합니다.
Wiki > GCS 사용자 포탈 > gcs dev checkout.JPG
Install bower & gulp
project directory에서 다음을 진행합니다. 참고 사이트 : Fuse installation
npm install -g bower
npm install -g gulp
npm install
bower install
Running Project
gulp serve
Wiki > GCS 사용자 포탈 > gcs gulp serve.JPG
http://localhost:9000/ 에 접속하면 아래와 같은 화면을 볼 수 있습니다.
Wiki > GCS 사용자 포탈 > start gcs.JPG
로그인하여 제대로 동작하는지 확인합니다.
ID    : chidae2000@gmail.com
PW  : indivi10!!

MysoCloud 실행 방법(local)
GitLab project download
gitLab cloud-insoft/myso-cloud project 접속합니다.
project URL을 복사합니다. (git@gitlab.com:cloud-insoft/myso-cloud.git)
local에서 원하는 directory에 clone 받습니다.
Git pull dev branch
상황에 따라 해당 단계가 필요 없을 수 있습니다. (이미 develop branch source code로 다운로드한 경우)
download한 project directory로 이동합니다.
develop branch로 checkout 합니다.
git pull 합니다.
Running Project
tomcat 설정 후 실행시킵니다. ( local DB에 MysoCloud DB가 있어야 합니다 - MySQL )
tomcat 설정

Wiki > GCS 사용자 포탈 > tomcat1.JPGWiki > GCS 사용자 포탈 > tomcat2.JPG


http://localhost:8080/console/ 로그인하여 제대로 동작하는지 확인합니다.
ID    : chidae2000@gmail.com
PW  : indivi10!!
